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



// 1. Muestra el formulario de edición
exports.renderEditForm = (req, res) => {
    const id = req.params.id;
    Task.getById(id, (err, task) => {
        if (err || !task) return res.status(404).send("Tarea no encontrada");
        res.render('edit', { task: task });
    });
};

// 2. Procesa la actualización
exports.updateTask = (req, res) => {
    const id = req.params.id;
    const updatedTask = req.body.task;
    Task.update(id, updatedTask, (err) => {
        if (err) return res.status(500).send("Error al actualizar");
        res.redirect('/');
    });
};


exports.renderForm = (req, res) => {
    res.render('create'); 
};