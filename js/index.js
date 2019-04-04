// Limpia los campos de texto
function reset() {
    $('#texto').val(null);
}

// Hace la petición desde el submit del formulario
$('#formulario').submit(function(){
    $.ajax({url: "https://jsonplaceholder.typicode.com/comments?postId="+$('#texto').val(), type: "GET", success: function(respuesta){
        $("#parrafo").append("<table>")
        .append("<thead><tr><th>PostID</th><th>ID</th><th>Name</th><th>Email</th><th>Body</th></tr></thead>")
        .append("<tbody>");
        for (var i = 0; i < respuesta.length; i++) {
            $("#parrafo").append("<tr><td>"+respuesta[i]["postId"]+"</td><td>"+respuesta[i]["id"]+"</td><td>"+respuesta[i]["name"]+"</td><td>"+respuesta[i]["email"]+"</td><td>"+respuesta[i]["body"]+"</td></tr>");
        }
        $("#parrafo").append("</tbody>")
        .append("</table>");
        /*
        $("#parrafo").append("<table>");
        $("#parrafo").append("<thead><tr><th>PostID</th><th>ID</th><th>Name</th><th>Email</th><th>Body</th></tr></thead>");
        $("#parrafo").append("<tbody>");
        for (var i = 0; i < respuesta.length; i++) {
            $("#parrafo").append("<tr><td>"+respuesta[i]["postId"]+"</td><td>"+respuesta[i]["id"]+"</td><td>"+respuesta[i]["name"]+"</td><td>"+respuesta[i]["email"]+"</td><td>"+respuesta[i]["body"]+"</td></tr>");
        }
        $("#parrafo").append("</tbody>");
        $("#parrafo").append("</table>");
        */
    }});
    // Para cancelar el submit "oficial"
    return false;
});

// Cuando termina de cargar la página reseteamos los textos
window.onload = reset;
