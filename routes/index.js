const express = require('express');
const router = express.Router();

// CONTROLADORES
const taskController = require('../controllers/taskController');
const notebookController = require('../controllers/notebookController');


// Ruta de inicio
router.get('/', taskController.renderTasks);

// Nueva ruta para mostrar el formulario
router.get('/crear', taskController.renderForm);
router.post('/guardar', taskController.saveTask);
router.get('/eliminar/:id', taskController.deleteTask);

// Nueva ruta para mostrar el formulario de edición y ruta para actualizar
router.get('/editar/:id', taskController.renderEditForm);
router.post('/actualizar/:id', taskController.updateTask);


// Rutas para el apartado de CUADERNO(notebook)
router.get('/notebook/list', notebookController.renderNotes);

module.exports = router;