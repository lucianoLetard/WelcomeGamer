// Función para generar un número aleatorio entre min y max (ambos incluidos)
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para generar una operación matemática aleatoria y mostrarla en el formulario
function generarCaptcha() {
    const num1 = generarNumeroAleatorio(1, 10);
    const num2 = generarNumeroAleatorio(1, 10);
    const operador = '+';
    const captchaDiv = document.getElementById('captcha');
    captchaDiv.textContent = `${num1} ${operador} ${num2}`;
    captchaDiv.dataset.resultado = num1 + num2; // Guardamos el resultado en un atributo de datos (data-*)
}

// Función para validar el CAPTCHA y los campos requeridos
function validarFormulario(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const captchaInput = document.getElementById('captcha-input').value.trim();

    // Validar que todos los campos estén completos
    if (nombre === '' || email === '' || captchaInput === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const captchaDiv = document.getElementById('captcha');
    const resultadoEsperado = parseInt(captchaDiv.dataset.resultado);
    const resultado = parseInt(captchaInput);

    if (resultado === resultadoEsperado) {
        alert('¡CAPTCHA validado. Click en aceptar');
        setTimeout(() => {
            window.location.href = 'CompraConfirmada.html'; // Redireccionar después de validar correctamente
        }, 1000); // Redireccionar después de 1 segundo (puedes ajustar el tiempo según necesites)
    } else {
        alert('El resultado del CAPTCHA es incorrecto. Generando nuevo CAPTCHA..');
        document.getElementById('captcha-input').value = ''; // Limpiar el campo de entrada del CAPTCHA
        generarCaptcha(); // Generar un nuevo CAPTCHA automáticamente
    }
}

// Evento de carga del documento para generar el CAPTCHA inicial y configurar la validación del formulario
document.addEventListener('DOMContentLoaded', function() {
    generarCaptcha();
    
    const form = document.getElementById('captcha-form');
    form.addEventListener('submit', validarFormulario);
});
