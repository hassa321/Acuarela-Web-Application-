var data2;


document.addEventListener("DOMContentLoaded", function() {
   // server call 
  // server call will bring JSON file of ad elemets
    var posting;
    var id;
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
      id = data[i]._id
      console.log('condit:'+condit + "condition:"+ condition)

      if((category!=cat && category!=0) || (condit!=condition&&condition!=0) || (data[i].location!=location&&location!=0)){
        continue
      }else{
    img=data[i].img

  $("<div>", {class: "posting"}).append(
    $("<div>", {class: "thumbnail"}).append(
        $("<img>",{src:img, class: "circle"}),
        $("<div", {class:"caption"}).append(
        )
        
    ), 
    $("<div>", {class: "inner"}).append(
        $("<a>",{class: "product_title",href: "https://acuarela.ca/ad/"+data[i]._id}).text(
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


