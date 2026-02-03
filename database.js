const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Esto une la ruta de la carpeta actual con el nombre del archivo
const dbPath = path.resolve(__dirname, 'tasks.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err.message);
    } else {
        console.log('Conectado con éxito a tasks.db');
    }
});

module.exports = db;