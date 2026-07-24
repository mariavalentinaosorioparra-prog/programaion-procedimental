function validarDatos() {
    // Capturamos los valores directamente sin modificar los espacios
    const ingresosVal = document.getElementById("ingresos").value;
    const egresosVal = document.getElementById("egresos").value;
    const conceptoVal = document.getElementById("concepto").value;
    const fechaVal = document.getElementById("fecha").value;
    

    const regexNumero = /^\d+$/;
    const regexTexto = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/;
    const regexFecha = /^\d{4}-\d{2}-\d{2}$/;

    if (!ingresosVal || !egresosVal || !conceptoVal || !fechaVal) {
        Swal.fire({
            icon: 'error',
            title: 'Error en los Campos',
            text: 'Por favor, complete todos los campos.'
        });
        return false;
    }

    if (!regexNumero.test(ingresosVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Ingresos',
            text: 'El campo ingresos solo debe contener números enteros.'
        });
        return false;
    }

    if (!regexNumero.test(egresosVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Egresos',
            text: 'El campo egresos solo debe contener números enteros.'
        });
        return false;
    }

    if (!regexTexto.test(conceptoVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Concepto',
            text: 'El campo concepto solo debe contener letras.'
        });
        return false;
    }

    if (!regexFecha.test(fechaVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Error en Fecha',
            text: 'La fecha debe tener el formato YYYY-MM-DD.'
        });
        return false;
    }

    Swal.fire({
        icon: 'success',
        title: '¡Excelente!',
        text: 'Todos los datos son válidos.'
    });
     
    return true;
}
document.getElementById("btnGuardar").onclick = validarDatos;