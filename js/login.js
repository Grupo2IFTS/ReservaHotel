// script.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');
    const switchLinks = document.querySelectorAll('.switch-link');
    
    // Cambiar entre formularios
    switchLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const formToShow = this.getAttribute('data-form');
            
            if (formToShow === 'register') {
                loginForm.classList.add('hidden');
                registerForm.classList.remove('hidden');
            } else {
                registerForm.classList.add('hidden');
                loginForm.classList.remove('hidden');
            }
        });
    });
    
    // Validación del formulario de registro
    const registerFormElement = document.getElementById('registerForm');
    if (registerFormElement) {
        registerFormElement.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('registerConfirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }
            
            // Aquí iría la lógica para enviar los datos al servidor
            alert('Registro exitoso!');
            this.reset();
        });
    }
    
    // Validación del formulario de login
    const loginFormElement = document.getElementById('loginForm');
    if (loginFormElement) {
        loginFormElement.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí iría la lógica para enviar los datos al servidor
            alert('Inicio de sesión exitoso!');
            this.reset();
        });
    }
});