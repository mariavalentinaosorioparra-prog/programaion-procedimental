function validarDatos() {
    // Capturamos los valores directamente sin modificar los espacios
    const codigoVal = document.getElementById("codigoproducto").value;
    const nombreVal = document.getElementById("nombreproducto").value;
    const cantidadVal = document.getElementById("cantidadproducto").value;
    const descripcionVal = document.getElementById("descripcionproducto").value;

    // Expresiones regulares
    const regexNumero = /^\d+$/;
    const regexTexto = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/;
    const regexFecha = /^\d{4}-\d{2}-\d{2}$/;

    // Validaciones
    if (!regexNumero.test(codigoVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Código',
            text: 'El campo código solo debe contener números enteros.'
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

    if (!regexTexto.test(descripcionVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Descripción',
            text: 'El campo descripción solo debe contener letras.'
        });
        return false;
    }

    if (!regexTexto.test(nombreVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Nombre',
            text: 'El campo nombre solo debe contener letras.'
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