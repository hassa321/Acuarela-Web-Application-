document.addEventListener("DOMContentLoaded", function() {
    
    //var obj = JSON.parse(objSentFromServer);
    var url = window.location.href 

    var id = url.split("/").pop();
    var data2;
    console.log(id)

    $.ajax({ 
        method: "get", 
        url: "/vert/"+id,
        }).done(function(data){
        data2=data
          console.log(data2)
        }).fail(function(err){
        
        console.log("ERROR HEr1!")
        });

        $("#location").html(data2.location)
        $("title").html(data2.title)

})