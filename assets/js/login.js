const correo = document.getElementsByClassName('correo');
const password = document.getElementsByClassName('password');
const boton = document.getElementById('botoniniciarsesion');
const mensajeError = document.getElementById('mensajeError')

const usuario = "admin@gmail.com";
const contraseña = "admin123"

console.log(correo);

boton.addEventListener("click", (e) => {
    e.preventDefault();
    let valorCorreo = correo[0].value;
    let valorContraseña = password[0].value;

    
    if(valorCorreo == usuario && valorContraseña == contraseña ) {
        console.log("CORRECTO");
        window.location = 'cuentas.html';
    }
    else {
/*         alert("Los datos NO coinciden") */
        mensajeError.innerHTML = "<p class='text-danger fs-3 fw-bold'>NO COINCIDEN LOS DATOS</p>"
    }
})

