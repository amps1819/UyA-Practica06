$("#boton").click(function(){
    $.ajax({url: "https://jsonplaceholder.typicode.com/comments?postId="+$('#texto').val(), type: "GET", success: function(result){
        $("#div1").html(JSON.stringify(result));
    }});
});
