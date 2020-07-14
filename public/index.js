var data2;


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
    $.ajax({ 
    method: "get", 
    url: "/ads",
    }).done(function(data){
    data2=data
      loadAds(data2,0,0,0,0)
    }).fail(function(err){
    
    console.log("ERROR HEr1!")
    });

// do everything here.

var category
var condition
var location

$(".filter-btn").click(function(){        
 


  category = $('#category').find(":selected").val();
  condition = $('#condition').find(":selected").val();
  location = $('#location').find(":selected").val();


  console.log("category: "+category+" condition: "+condition + " location: "+location);
  
  loadAds(data2,category,condition,location)




})

$(".clear-btn").click(function(){
  $('#category').val("0")
  $('#location').val("0")
  $('#condition').val("0")
  category=condition=location=0
  console.log("category: "+category+"condition: "+condition + " location: "+location);
  loadAds(data2,0,0,0)

})


function loadAds (data,category,condition,location){

  $("#abc").empty()
  for(var i = 0; i<data.length;i++){
    
      price = `$${data[i].price}`
      title = data[i].title
      cat = data[i].type
      condit = data[i].condition
      console.log('condit:'+condit + "condition:"+ condition)

      if((category!=cat && category!=0) || (condit!=condition&&condition!=0) || (data[i].location!=location&&location!=0)){
        continue
      }else{
    if(cat==="Textbook"){img="https://image.slidesharecdn.com/introductiontoalgorithms3rdedition-140128021114-phpapp02/95/introduction-to-algorithms-3rd-edition-1-638.jpg?cb=1390876516"}
    if (cat==="iClicker"){img="../public/images/iClickers.jpg"}
    if(cat==="Electronics"){img="../public/images/Electronics.jpg"}
    if(cat==="Course Notes"){img="../public/images/notes.jpg"}
      if(cat==="Calculator"){img="../public/images/Calculators.jpg"}
        if(cat==="Others"){img="../public/images/others.png"}

  $("<div>", {class: "posting"}).append(
    $("<div>", {class: "thumbnail"}).append(
        $("<img>",{src:img, class: "circle"}),
        $("<div", {class:"caption"}).append(
        )
        
    ), 
    $("<div>", {class: "inner"}).append(
        $("<h4>",{class: "product_title"}).text(
            title
        )
    ,$("<h3>",{class: ""}).text(
      price
  ))
).appendTo($("#abc"))
        }

}
}
  
  });


