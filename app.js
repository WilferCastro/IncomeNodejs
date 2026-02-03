// app.js
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// AÑADE ESTAS DOS LÍNEAS AQUÍ:
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});