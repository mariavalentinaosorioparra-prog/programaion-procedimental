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
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombreVal || !apellidoVal || !tipodocumentoVal || !numerodocumentoVal || !telefonoVal || !correoelectronicoVal || !fechanacimientoVal || !generoVal || !cargoVal || !contrasenaVal) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Campos Obligatorios',
            text: 'Por favor, complete todos los campos.'
        });
        return false;
    } else {
        if (!regexTexto.test(nombreVal)) {
            Swal.fire({
                icon: 'error',
                title: 'Error en Nombre',
                text: 'El campo nombre solo debe contener letras.'
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

        if (!regexTexto.test(tipodocumentoVal)) {
            Swal.fire({
                icon: 'error',
                title: 'Error en Tipo de Documento',
                text: 'El campo tipo de documento solo debe contener letras.'
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

        if (!regexNumero.test(telefonoVal)) {
            Swal.fire({
                icon: 'error',
                title: 'Error en Teléfono',
                text: 'El campo teléfono solo debe contener números enteros.'
            });
            return false;
        }

        if (!regexEmail.test(correoelectronicoVal)) {
            Swal.fire({
                icon: 'error',
                title: 'Error en Correo Electrónico',
                text: 'Ingrese un formato de correo válido (ejemplo@correo.com).'
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

        if (!regexTexto.test(cargoVal)) {
            Swal.fire({
                icon: 'error',
                title: 'Error en Cargo',
                text: 'El campo cargo solo debe contener letras.'
            });
            return false;
        }

        if (!regexFecha.test(fechanacimientoVal)) {
            Swal.fire({
                icon: 'error',
                title: 'Error en Fecha de Nacimiento',
                text: 'La fecha debe tener el formato YYYY-MM-DD.'
            });
            return false;
        }

        if (contrasenaVal.length < 1) {
            Swal.fire({
                icon: 'error',
                title: 'Error en Contraseña',
                text: 'El campo contraseña no puede estar vacío.'
            });
            return false;
        }

    }
    Swal.fire({
        icon: 'success',
        title: '¡Excelente!',
        text: 'Todos los datos son válidos.'
    });

    return true;
}

document.getElementById("btnGuardar").onclick = validarDatos;