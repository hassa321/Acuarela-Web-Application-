

// const classes = document.querySelectorAll('.classButton');
// const postings = document.querySelectorAll('.posting');

//window.open(window.open('../views/index.html','_self'))

document.addEventListener("DOMContentLoaded", function() {
   // server call 
  // server call will bring JSON file of ad elemets 
  var data;


    $.ajax({ 
    method: "get", 
    url: "/ads",
    }).done(function(data){
   console.log(data)

   //server call brings all ads in JSON file
   // check if JSON is empty, means there are no ads
    console.log(`Number of Ads:${data.length}`)



    }).fail(function(err){
    
    console.log("ERROR HEr1!")
    });


  console.log('LOADED!!')
    const h = document.getElementById('header1')
    h.innerHTML('ASdasdasd  ')

  });


