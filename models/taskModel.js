const db = require('../database') // Asegúrate de que apunte a tu archivo de conexión

const Task = {
    getAll: (callback) => {
        const sql = "SELECT id, task FROM tasks";
        db.all(sql, [], (err, rows) => {
            if (err) {
                return callback(err);
            }
            callback(null, rows);
        });
    },

    create: (text, callback) => {
        const sql = "INSERT INTO tasks (task) VALUES (?)";
        db.run(sql, [text], (err) => {
            callback(err);
        });
    },

    delete: (id, callback) => {
        const sql = "DELETE FROM tasks WHERE id = ?";
        db.run(sql, [id], (err) => {
            callback(err);
        });
    },

};

module.exports = Task;

    

