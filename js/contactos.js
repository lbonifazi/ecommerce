$(document).ready(function () {
    const tbxNombre = $("#tbxNombre");
    const tbxNombreError = $("#tbxNombreError");
    const tbxEmail = $("#tbxEmail");
    const tbxEmailError = $("#tbxEmailError");
    const txtMensaje = $("#txtMensaje");
    const txtMensajeError = $("#txtMensajeError");
    const btnEnviar = $("#btnEnviar");

    tbxNombre.blur(() => {
        if (nameValidator(tbxNombre.text())) {
            tbxNombre.addClass("ok");
            tbxNombreError.html("");
        } else {
            tbxNombre.addClass("error");
            tbxNombreError.html("El nombre debe contener al menos 4 caracteres");
        }
    });

    tbxEmail.blur(() => {
        if (emailValidator(tbxEmail.text())) {
            tbxEmail.addClass("ok");
            tbxEmailError.html("");
        } else {
            tbxEmail.addClass("error");
            tbxEmailError.html("El e-mail ingresado no es valido");
        }
    });

    txtMensaje.blur(() => {
        if (messageValidator(txtMensaje.text())) {
            txtMensaje.addClass("ok");
            txtMensajeError.html("");
        } else {
            txtMensaje.addClass("error");
            txtMensajeError.html("El mensaje no debe estar vacio");
        }
    });

    btnEnviar.click((event) => {
        event.preventDefault();
        enviarFormulario();
    });

    function enviarFormulario() {
        $.ajax({
            url: "emailSent.txt",
            dataType: "html",
        }).done(OK).fail(error);
    }

    function OK() {
        alert("Gracias por su consulta, responderemos a la brevedad :)");
    }

    function error() {
        alert("Ocurrió un error, vuelva a intentar o escribanos a info@educacionit.com :(");
    }

    function nameValidator(name) {
        if (name.length < 4) {
            return false;
        } else {
            return true;
        }
    }

    function messageValidator (message) {
        if (message == "") {
            return false;
        } else {
            return true;
        }
    }

    function emailValidator(email) {
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (emailRegex.test(email)) {
            return true;
        } else {
            return false;
        }
    }
});