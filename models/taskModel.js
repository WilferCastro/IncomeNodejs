const db = require('../database'); // Asegúrate de que este archivo use 'pg' (Pool)

const Task = {
    // Obtener todas las tareas
    getAll: (callback) => {
        const sql = "SELECT id, task FROM tasks ORDER BY id ASC";
        db.query(sql, (err, result) => {
            if (err) {
                return callback(err);
            }
            // En PostgreSQL los datos están en result.rows
            callback(null, result.rows);
        });
    },

    // Crear una nueva tarea
    create: (text, callback) => {
        const sql = "INSERT INTO tasks (task) VALUES ($1)";
        db.query(sql, [text], (err) => {
            callback(err);
        });
    },

    // Obtener una tarea por ID para editar
    getById: (id, callback) => {
        const sql = "SELECT * FROM tasks WHERE id = $1";
        db.query(sql, [id], (err, result) => {
            if (err) {
                return callback(err);
            }
            // Retornamos solo el primer resultado (la fila)
            callback(null, result.rows[0]);
        });
    },

    // Guardar los cambios de una edición
    update: (id, newTask, callback) => {
        const sql = "UPDATE tasks SET task = $1 WHERE id = $2";
        db.query(sql, [newTask, id], (err) => {
            callback(err);
        });
    },

    // Eliminar una tarea
    delete: (id, callback) => {
        const sql = "DELETE FROM tasks WHERE id = $1";
        db.query(sql, [id], (err) => {
            callback(err);
        });
    },
};

module.exports = Task;



