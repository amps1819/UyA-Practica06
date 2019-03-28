function reset() {
    $('#texto').val(null);
}

$('#formulario').submit(function(){
    $.ajax({url: "https://jsonplaceholder.typicode.com/comments?postId="+$('#texto').val(), type: "GET", success: function(result){
        $("#div1").html(JSON.stringify(result));
    }});
    return false;
});

/*
$("#boton").click(function(){
    $.ajax({url: "https://jsonplaceholder.typicode.com/comments?postId="+$('#texto').val(), type: "GET", success: function(result){
        $("#div1").html(JSON.stringify(result));
    }});
});
*/

window.onload = reset;
