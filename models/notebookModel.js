const db = require('../database');

const Note = {

    // Obtener todas las notas
    getAll: (callback) => {
        const sql = "SELECT * FROM notebook ORDER BY id ASC";
        db.query(sql, (err, result) => {
            if (err) {
                return callback(err);
            }
            // En PostgreSQL los datos están en result.rows
            callback(null, result.rows);
        });
    },

}


module.exports = Note;