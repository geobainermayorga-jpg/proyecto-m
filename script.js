document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario tradicional

    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    const mensajeError = document.getElementById('mensajeError');
    
    // **Usuarios Definidos:**
    const usuariosPermitidos = {
        "GMB": "130698G", // Administrador
        "Marlen": "Marlen" // Observador
    };

    if (usuariosPermitidos[usuario] === contrasena) {
        
        // ************************************************
        // CAMBIO DE SEGURIDAD CRÍTICO: 
        // Establecer la bandera de acceso en la sesión
        sessionStorage.setItem('acceso_permitido', 'true');
        // ************************************************

        // Redirigir a la página de dedicatoria
        window.location.href = "./dedicatoria.html"; 
    } else {
        // Credenciales incorrectas
        mensajeError.textContent = "Usuario o contraseña incorrectos. Inténtalo de nuevo.";
        mensajeError.style.display = 'block';
    }
});
