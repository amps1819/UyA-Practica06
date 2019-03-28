$("#boton").click(function(){
    $.ajax({url: "https://jsonplaceholder.typicode.com/comments?postId="+$('#texto').value, type: "GET", success: function(result){
      $("#div1").html(result);
    }});
});
