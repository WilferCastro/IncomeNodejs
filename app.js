/**
 * CONFIGURACIÓN DEL SERVIDOR - app.js
 */

require('dotenv').config();
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const indexRoutes = require('./routes/index');

const app = express();

// --- 1. CONFIGURACIÓN DE VISTAS (EJS) ---
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// --- 2. MIDDLEWARES DE LAYOUTS ---
app.use(expressLayouts);
app.set('layout', 'base');           // Define "base.ejs" como la plantilla maestra
app.set("layout extractScripts", true); // Extrae automáticamente <script> de las vistas al layout
app.set("layout extractStyles", true);

// --- 3. ARCHIVOS ESTÁTICOS ---
// Esto permite que el navegador encuentre /css/style.css o /js/main.js
app.use(express.static(path.join(__dirname, 'public')));

// --- 4. PROCESAMIENTO DE DATOS ---
// Permite recibir datos de formularios (POST)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// --- 5. RUTAS ---
app.use('/', indexRoutes);

// --- 6. ARRANQUE DEL SERVIDOR ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor en: http://localhost:${PORT}`);
});