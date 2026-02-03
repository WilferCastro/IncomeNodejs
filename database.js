const sqlite3 = require('sqlite3').verbose();
const path = require('path');

let db;

// Si estamos en desarrollo, usamos SQLite
if (process.env.NODE_ENV === 'development') {
    const dbPath = path.resolve(__dirname, process.env.DATABASE_URL);
    db = new sqlite3.Database(dbPath, (err) => {
        if (err) console.error("Error con SQLite:", err.message);
        else console.log("Conectado a SQLite local");
    });
} else {
    // Aquí irá la conexión a Supabase (PostgreSQL) más adelante
    console.log("Configurando conexión a PostgreSQL para producción...");
}

module.exports = db;