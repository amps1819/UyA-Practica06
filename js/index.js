// Limpia los campos de texto
function reset() {
    $('#texto').val(null);
}

// Hace la petición desde el submit del formulario
$('#formulario').submit(function(){
    $.ajax({url: "https://jsonplaceholder.typicode.com/comments?postId="+$('#texto').val(), type: "GET", success: function(respuesta){
        for (var i = 0; i < respuesta.length; i++) {
            $("#tabla").append("<tr><td>"+respuesta[i]["postId"]+"</td><td>"+respuesta[i]["id"]+"</td><td>"+respuesta[i]["name"]+"</td><td>"+respuesta[i]["email"]+"</td><td>"+respuesta[i]["body"]+"</td></tr>");
        }
    }});
    // Para cancelar el submit "oficial"
    return false;
});

// Cuando termina de cargar la página reseteamos los textos
window.onload = reset;
