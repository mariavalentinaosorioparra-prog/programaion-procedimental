function validarDatos() {
    // Capturamos los valores directamente sin modificar los espacios
    const nombreVal = document.getElementById("nombre").value;
    const apellidoVal = document.getElementById("apellido").value;
    const tipodocumentoVal = document.getElementById("tipodocumento").value;
    const numerodocumentoVal = document.getElementById("numerodocumento").value;
    const telefonoVal = document.getElementById("telefono").value;
    const correoelectronicoVal = document.getElementById("correoelectronico").value;
    const fechanacimientoVal = document.getElementById("fechanacimiento").value;
    const generoVal = document.getElementById("genero").value;
    const cargoVal = document.getElementById("cargo").value;
    const contrasenaVal = document.getElementById("contrasena").value;

    // Expresiones regulares
    const regexNumero = /^\d+$/;
    const regexTexto = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/;
    const regexFecha = /^\d{4}-\d{2}-\d{2}$/;

    // Validaciones
    if (!regexTexto.test(nombreVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Nombre del Producto',
            text: 'El campo nombre del producto solo debe contener letras.'
        });
        return false;
    }

    if (!regexNumero.test(numerodocumentoVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Número de Documento',
            text: 'El campo número de documento solo debe contener números enteros.'
        });
        return false;
    }

    if (!regexTexto.test(fechanacimientoVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Fecha de Nacimiento',
            text: 'El campo fecha de nacimiento solo debe contener letras.'
        });
        return false;
    }

    if (!regexTexto.test(tipodocumentoVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Tipo de Documento',
            text: 'El campo tipo de documento solo debe contener letras.'
        });
        return false;
    }
    if (!regexTexto.test(cargoVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Cargo',
            text: 'El campo cargo solo debe contener letras.'
        });
        return false;
    }
    if (!regexNumero.test(contrasenaVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Contraseña',
            text: 'El campo contraseña solo debe contener números enteros.'
        });
        return false;
    }
    if (!regexNumero.test(telefonoVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Teléfono',
            text: 'El campo teléfono solo debe contener números enteros.'
        });
        return false;
    }

    if (!regexTexto.test(correoelectronicoVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Correo Electrónico',
            text: 'El campo correo electrónico no es válido.'
        });
        return false;
    }

    if (!regexTexto.test(generoVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Género',
            text: 'El campo género solo debe contener letras.'
        });
        return false;
    }

    if (!regexTexto.test(apellidoVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Apellido',
            text: 'El campo apellido solo debe contener letras.'
        });
        return false;
    }


    // Si todo está bien
    Swal.fire({
        icon: 'success',
        title: '¡Excelente!',
        text: 'Todos los datos son válidos.'
    });
     
    return true;
}