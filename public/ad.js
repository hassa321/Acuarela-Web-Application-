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
          $("#location").html(" "+data2.location)
        $("#title").text(data2.title)
        $("#price").text("$"+data2.price)
        $("#desc").text(data2.desc)
        $("#phone").text(data2.phone)
        $("#email").text(data2.email)
        $("#name").text(data2.name)
        $("#img").attr("src", data2.img)



        }).fail(function(err){
        
        console.log("ERROR HEr1!")
        });

        

})