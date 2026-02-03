const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.renderTasks);

// Nueva ruta para mostrar el formulario
router.get('/crear', taskController.renderForm);
router.post('/guardar', taskController.saveTask);
router.get('/eliminar/:id', taskController.deleteTask);

module.exports = router;