const Note = require('../models/notebookModel');

//Rnderizar la lista de notas 
exports.renderNotes = (req, res) => {
    Note.getAll((err, notes) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send("Error al obtener las notas");
        }
        // Renderizamos la plantilla 'index' y le pasamos el array de tareas
        res.render('notebook/notebookList', { notesList: notes });
    });
};