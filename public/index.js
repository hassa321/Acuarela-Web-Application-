

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
    var type;
    var price;
    var priceNumber;
    const d =document.getElementById("abc")
    $.ajax({ 
    method: "get", 
    url: "/ads",
    }).done(function(data){
      for(var i = 0; i<data.length;i++){

        price = `$${data[i].price}`
        title = data[i].title
        var type = data[i].type
        if(data[i].type==="Textbook"){img="https://image.slidesharecdn.com/introductiontoalgorithms3rdedition-140128021114-phpapp02/95/introduction-to-algorithms-3rd-edition-1-638.jpg?cb=1390876516"}
        if (data[i].type==="iClicker"){img="../public/images/iClickers.jpg"}
        if(data[i].type==="Electronics"){img="../public/images/Electronics.jpg"}
        if(data[i].type==="Course Notes"){img="../public/images/notes.jpg"}
          if(data[i].type==="Calculator"){img="../public/images/Calculators.jpg"}
            if(data[i].type==="Others"){img="../public/images/others.png"}

      $("<div>", {class: "posting"}).append(
        $("<div>", {class: "thumbnail"}).append(
            ($("<img>",{src:img })).addClass("rounded"),
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

var category
var type 
var condition
var location

$(".filter-btn").click(function(){        
 


  category = $('#category').find(":selected").val();
  type = $('#type').find(":selected").val();
  condition = $('#condition').find(":selected").val();
  location = $('#location').find(":selected").val();


  console.log("category: "+category+" type: "+type+" condition: "+condition + " location: "+location);

  



})


  
  });


