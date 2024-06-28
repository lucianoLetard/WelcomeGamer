document.querySelectorAll('.remove-button').forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.cart-item').remove();
        // Aquí puedes añadir lógica adicional para actualizar el total
    });
});
