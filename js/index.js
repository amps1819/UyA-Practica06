$("#boton").click(function(){
    $.ajax({url: "https://jsonplaceholder.typicode.com/comments?postId=1", type: "GET", success: function(result){
      $("#div1").html(result);
    }});
   //$.get("https://jsonplaceholder.typicode.com/comments?postId=1", function(result){ $('#div1').load(result) });
});
