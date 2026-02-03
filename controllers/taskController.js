const Task = require('../models/taskModel');

exports.renderTasks = (req, res) => {
    Task.getAll((err, tasks) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send("Error al obtener las tareas");
        }
        // Renderizamos la plantilla 'index' y le pasamos el array de tareas
        res.render('index', { listaDeTareas: tasks });
    });
};



exports.saveTask = (req, res) => {
    const newTaskText = req.body.task; // 'task' es el "name" del input en tu HTML
    
    Task.create(newTaskText, (err) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send("Error al guardar la tarea");
        }
        res.redirect('/'); // Redirige al inicio para ver la nueva tarea
    });
};



exports.deleteTask = (req, res) => {
    const id = req.params.id; // Obtenemos el ID de la URL
    
    Task.delete(id, (err) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send("Error al eliminar la tarea");
        }
        res.redirect('/'); // Volvemos al inicio para ver la lista actualizada
    });
};


exports.renderForm = (req, res) => {
    res.render('create'); 
};