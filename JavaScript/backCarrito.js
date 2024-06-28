let carrito = {}; // Objeto para almacenar los productos en el carrito
let total = 0; // Inicialización del total en 0

// Función para inicializar el carrito y los eventos
function inicializarCarrito() {
    // Seleccionar todos los botones "Eliminar"
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach(button => {
        button.addEventListener('click', eliminarProducto);
    });

    // Seleccionar todos los inputs de cantidad
    const quantityInputs = document.querySelectorAll('.product-quantity input');
    quantityInputs.forEach(input => {
        input.addEventListener('change', actualizarCantidad);
    });

    // Seleccionar botones de incrementar y decrementar cantidad
    const incrementButtons = document.querySelectorAll('.increment-button');
    incrementButtons.forEach(button => {
        button.addEventListener('click', incrementarCantidad);
    });

    const decrementButtons = document.querySelectorAll('.decrement-button');
    decrementButtons.forEach(button => {
        button.addEventListener('click', decrementarCantidad);
    });

    // Calcular el total inicial basado en las cantidades iniciales
    calcularTotalInicial();
}

// Función para calcular el total inicial basado en las cantidades iniciales
function calcularTotalInicial() {
    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('.product-price').textContent.replace('$', ''));
        const quantity = parseInt(item.querySelector('.product-quantity input').value);
        carrito[item.id] = { price: price, quantity: quantity };
        total += price * quantity; // Sumamos al total inicial
    });

    // Actualizar el total mostrado inicialmente
    actualizarTotal();
}

// Función para eliminar un producto del carrito
function eliminarProducto(event) {
    const item = event.target.parentElement;
    const itemId = item.id;
    const price = parseFloat(item.querySelector('.product-price').textContent.replace('$', ''));
    const quantity = parseInt(item.querySelector('.product-quantity input').value);

    // Restar el valor del producto que se va a eliminar del total
    total -= price * quantity;

    // Remover el producto del objeto carrito usando su ID
    delete carrito[itemId];

    // Remover el producto del carrito visualmente
    item.remove();

    // Actualizar el total mostrado
    actualizarTotal();
}

// Función para actualizar la cantidad de un producto
function actualizarCantidad(event) {
    const input = event.target;
    const item = input.closest('.cart-item');
    const itemId = item.id;
    const price = parseFloat(item.querySelector('.product-price').textContent.replace('$', ''));
    let newQuantity = parseInt(input.value);

    // Validar la cantidad mínima
    if (newQuantity < 1) {
        newQuantity = 1;
        input.value = newQuantity;
    }

    // Calcular la diferencia en la cantidad
    const oldQuantity = carrito[itemId].quantity;
    const quantityDifference = newQuantity - oldQuantity;

    // Actualizar el total sumando el valor del producto multiplicado por la diferencia de cantidad
    total += price * quantityDifference;

    // Actualizar la cantidad en el objeto carrito usando su ID
    carrito[itemId].quantity = newQuantity;

    // Actualizar el total mostrado
    actualizarTotal();
}

// Función para incrementar la cantidad de un producto
function incrementarCantidad(event) {
    const button = event.target;
    const item = button.closest('.cart-item');
    const itemId = item.id;
    const input = item.querySelector('.product-quantity input');
    const price = parseFloat(item.querySelector('.product-price').textContent.replace('$', ''));
    let newQuantity = parseInt(input.value) + 1;

    // Actualizar el input de cantidad
    input.value = newQuantity;

    // Calcular la diferencia en la cantidad
    const oldQuantity = carrito[itemId].quantity;
    const quantityDifference = newQuantity - oldQuantity;

    // Actualizar el total sumando el valor del producto multiplicado por la diferencia de cantidad
    total += price * quantityDifference;

    // Actualizar la cantidad en el objeto carrito usando su ID
    carrito[itemId].quantity = newQuantity;

    // Actualizar el total mostrado
    actualizarTotal();
}

// Función para decrementar la cantidad de un producto
function decrementarCantidad(event) {
    const button = event.target;
    const item = button.closest('.cart-item');
    const itemId = item.id;
    const input = item.querySelector('.product-quantity input');
    const price = parseFloat(item.querySelector('.product-price').textContent.replace('$', ''));
    let newQuantity = parseInt(input.value) - 1;

    // Validar la cantidad mínima
    if (newQuantity < 1) {
        newQuantity = 1;
    }

    // Actualizar el input de cantidad
    input.value = newQuantity;

    // Calcular la diferencia en la cantidad
    const oldQuantity = carrito[itemId].quantity;
    const quantityDifference = newQuantity - oldQuantity;

    // Actualizar el total sumando el valor del producto multiplicado por la diferencia de cantidad
    total += price * quantityDifference;

    // Actualizar la cantidad en el objeto carrito usando su ID
    carrito[itemId].quantity = newQuantity;

    // Actualizar el total mostrado
    actualizarTotal();
}

// Función para actualizar el total mostrado
function actualizarTotal() {
    const totalElement = document.querySelector('.cart-total h3');
    totalElement.textContent = `Total: $${total.toFixed(2)} USD`;
}

// Evento de carga del documento para inicializar el carrito
document.addEventListener('DOMContentLoaded', inicializarCarrito);
