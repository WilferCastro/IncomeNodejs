// Seleccionamos todos los botones con la clase btn-delete
console.log("CARGANDO SCRIPTS EXCLUSIVOS DE LA PAGINA DE INDEX");
const deleteButtons = document.querySelectorAll('.btn-delete');

deleteButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        const taskName = this.getAttribute('data-task');
        // Si el usuario presiona "Cancelar", evitamos que el enlace funcione
        if (!confirm(`¿Realmente quieres borrar "${taskName}"?`)) {
            event.preventDefault();
        }
    });
});