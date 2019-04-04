

// const classes = document.querySelectorAll('.classButton');
// const postings = document.querySelectorAll('.posting');

//window.open(window.open('../views/index.html','_self'))

document.addEventListener("DOMContentLoaded", function() {
   // server call 
  // server call will bring JSON file of ad elemets
    var posting;
    var thumbnail;
    var img;
    var caption;
    var h4;
    var h4text;
    var price;
    var priceNumber;
    const d =document.getElementById("abc")
    $.ajax({ 
    method: "get", 
    url: "/ads",
    }).done(function(data){
      for(var i = 0; i<data.length;i++){

        price = data[i].price
        title = data[i].price

      $("<div>", {class: "posting"}).append(
        $("<div>", {class: "thumbnail"}).append(
            $("<img>",{src:"../public/images/notes.jpg"}),
            $("<div", {class:"caption"}).append(
            )
            
        ), 
        $("<div>", {class: "inner"}).append(
            $("<h4>",{class: "product_title"}).text(
                title
            )
        ,$("<h4>",{class: ""}).text(
          price
      ))
    ).appendTo(d)
            }
    }).fail(function(err){
    
    console.log("ERROR HEr1!")
    });

// do everything here.
    
  console.log('LOADED!!')
  
  });


