require('dotenv').config();
const { Pool } = require('pg');

// Creamos la conexión para Supabase (PostgreSQL)
const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Requerido para conexiones seguras con Supabase
  }
});

db.connect((err) => {
  if (err) {
    console.error('❌ Error conectando a Supabase:', err.stack);
  } else {
    console.log('☁️ Conectado exitosamente a Supabase (PostgreSQL)');
  }
});

module.exports = db;