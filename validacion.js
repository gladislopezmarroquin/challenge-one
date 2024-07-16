document.addEventListener('DOMContentLoaded', () => {
    const form = document.forms['form'];
    const nombre = form['nombre'];
    const email = form['email'];
    const asunto = form['asunto'];
    const mensaje = form['mensaje'];
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    form.appendChild(errorElement);

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevenir envío del formulario por defecto
        let errorMessages = [];
        
        // Validar nombre
        if (nombre.value.trim() === '') {
            errorMessages.push('Por favor, ingrese su nombre.');
        }

        // Validar email
        if (email.value.trim() === '') {
            errorMessages.push('Por favor, ingrese su email.');
        } else if (!isValidEmail(email.value)) {
            errorMessages.push('Por favor, ingrese un email válido.');
        }

        // Validar asunto
        if (asunto.value.trim() === '') {
            errorMessages.push('Por favor, ingrese el asunto.');
        }

        // Validar mensaje
        if (mensaje.value.trim() === '') {
            errorMessages.push('Por favor, ingrese su mensaje.');
        }

        if (errorMessages.length > 0) {
            errorElement.innerHTML = errorMessages.join('<br>');
        } else {
            errorElement.innerHTML = '';
            // Si no hay errores, puedes enviar el formulario
            form.submit();
        }
    });

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
