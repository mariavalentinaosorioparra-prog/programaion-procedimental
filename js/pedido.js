function validarDatos() {
    // Capturamos los valores directamente sin modificar los espacios
    const nombrepVal = document.getElementById("nombreproducto").value;
    const nombreuVal = document.getElementById("nombreusuario").value;
    const cantidadVal = document.getElementById("cantidad").value;
    const direccionVal = document.getElementById("direccion").value;
    const metodoPagoVal = document.getElementById("metodopago").value;
    const pagoVal = document.getElementById("pago").value;
    const telefonoVal = document.getElementById("telefono").value;

    // Expresiones regulares
    const regexNumero = /^\d+$/;
    const regexTexto = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/;
    const regexFecha = /^\d{4}-\d{2}-\d{2}$/;

    if (!nombrepVal || !nombreuVal || !cantidadVal || !direccionVal || !metodoPagoVal || !pagoVal || !telefonoVal) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Campos Obligatorios',
            text: 'Por favor, complete todos los campos.'
        });
        return false;
    }
    // Validaciones
    if (!regexTexto.test(nombrepVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Nombre del Producto',
            text: 'El campo nombre del producto solo debe contener letras.'
        });
        return false;
    }

    if (!regexNumero.test(cantidadVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Cantidad',
            text: 'El campo cantidad solo debe contener números enteros.'
        });
        return false;
    }

    if (!regexTexto.test(direccionVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Dirección',
            text: 'El campo dirección solo debe contener letras.'
        });
        return false;
    }

    if (!regexTexto.test(nombreuVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Nombre de Usuario',
            text: 'El campo nombre de usuario solo debe contener letras.'
        });
        return false;
    }
    if (!regexTexto.test(metodoPagoVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Método de Pago',
            text: 'El campo método de pago solo debe contener letras.'
        });
        return false;
    }
    if (!regexNumero.test(pagoVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Pago',
            text: 'El campo pago solo debe contener números enteros.'
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

    // Si todo está bien
    Swal.fire({
        icon: 'success',
        title: '¡Excelente!',
        text: 'Todos los datos son válidos.'
    });
     
    return true;
}

document.getElementById("btnGuardar").onclick = validarDatos;