

// const classes = document.querySelectorAll('.classButton');
// const postings = document.querySelectorAll('.posting');

//window.open(window.open('../views/index.html','_self'))

document.addEventListener("DOMContentLoaded", function() {
   // server call 
  // server call will bring JSON file of ad elemets 


    $.ajax({ 
    method: "get", 
    url: "/ads",
    }).done(function(data){
   console.log(data)
      const d =document.getElementById('ad-section')
      d.appendChild(document.createElement('div'))
   //server call brings all ads in JSON file
   // check if JSON is empty, means there are no ads
    console.log(`Number of Ads:${data.length}`)

      const data1 = data

    }).fail(function(err){
    
    console.log("ERROR HEr1!")
    });

// do everything here.
    
  console.log('LOADED!!')
});


