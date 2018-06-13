$(document).ready(function () {
    const lnkIngreso = $("a#lnkIngreso");
    const lnkRegistrarme = $("a#lnkRegistrarme");
    const lnkContacto = $("a#lnkContacto");
    const contenido = $("section#page");

    lnkIngreso.click(() => {
        cargarPagina("ingreso.html")
    });

    lnkRegistrarme.click(() => {
        cargarPagina("registro.html")
    });

    lnkContacto.click(() => {
        cargarPagina("contacto.html")
    });

    function cargarPagina(pagina) {
        $.ajax({
            url: pagina,
            dataType: "html",
        }).done(copiarContenido).fail(funcionError);
        contenido.html('<span class="cargando">Cargando</span>');
        agregarScript(pagina);
    }

    function copiarContenido(content) {
        contenido.html(content);
    }

    function funcionError(err){
        contenido.html("Contenido no disponible :(");
    }

    function agregarScript(pagina) {
        const script = document.createElement("script");
        switch(pagina) {
            case "contacto.html": {
                script.src = "js/contactos.js";
                break;
            }
            default: break;
        }
        if (script.src !== "") document.body.appendChild(script);
    }
});