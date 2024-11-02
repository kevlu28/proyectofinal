// Obtener los modales
var loginModal = document.getElementById("loginModal");
var registerModal = document.getElementById("registerModal");

// Obtener los enlaces que abren los modales
var openLoginModal = document.getElementById("openLoginModal");
var openRegisterModal = document.getElementById("openRegisterModal");

// Obtener los elementos de cierre
var closeLoginModal = document.getElementById("closeLoginModal");
var closeRegisterModal = document.getElementById("closeRegisterModal");

// Abrir el modal de inicio de sesión
openLoginModal.onclick = function() {
    loginModal.style.display = "block";
}

// Abrir el modal de registro
openRegisterModal.onclick = function() {
    registerModal.style.display = "block";
}

// Cerrar el modal de inicio de sesión
closeLoginModal.onclick = function() {
    loginModal.style.display = "none";
}

// Cerrar el modal de registro
closeRegisterModal.onclick = function() {
    registerModal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
}

function enviarFormulario(event) {
    event.preventDefault();
    const telefono = document.getElementById("telefono").value;
    const regexTelefono = /^\d{10}$/;  // Valida 10 dígitos
 
    if (!regexTelefono.test(telefono)) {
       alert("Por favor, ingresa un número de teléfono válido de 10 dígitos.");
       return;
    }
 
    alert("¡Formulario enviado exitosamente!");
 }
 