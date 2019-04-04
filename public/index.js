

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

    $.ajax({ 
    method: "get", 
    url: "/ads",
    }).done(function(data){
   console.log(data)
      const d =document.getElementById("abc")
      d.innerHTML='123ab'
      d.style.visibility="visible"
      d.append(document.createElement('button'))
      
      const div = document.createElement('div')
      cont img = document.createElement('img')
      $(img).attr("src","./../public/images/notes.jpg")
      d.append(img)

   //server call brings all ads in JSON file
   // check if JSON is empty, means there are no ads
    console.log(`Number of Ads:${data.length}`)

    }).fail(function(err){
    
    console.log("ERROR HEr1!")
    });

// do everything here.
    
  console.log('LOADED!!')
  
  });


