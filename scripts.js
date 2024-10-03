$(document).ready(function() {
    // Validación del formulario
    $("#contact-form").submit(function(event) {
        event.preventDefault();
        var email = $("#email").val();
        var mensaje = $("#mensaje").val();

        // Validación simple de email
        if (email === "" || !validateEmail(email)) {
            alert("Por favor, ingrese un correo válido.");
            return;
        }

        // Si todo es correcto, mostrar el modal de confirmación
        $("#modalConfirmacion").modal('show');
    });

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }

    // Buscador de proyectos (búsqueda simple usando contains)
    $("#project-search").on("input", function() {
        var value = $(this).val().toLowerCase();
        $("#projects-container .card").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});
