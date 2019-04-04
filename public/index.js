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


    if(data.length<1){
      console.log("EMPTY NO ADS")
    }else{
      console.log(`There ARE ${data.length} number of ads`)
    }


    console.log(`array of ads${data}`)  
    const dom = document.getElementById("ad-section")
    var posting;
    var thumbnail;
    var img;
    var caption;
    var h4;
    var h4text;
    var price;
    var priceNumber;


    for (let i = 0;i<data.length;i++){
    //create ALL dom Elements first
    console.log(i)
     posting = document.createElement('div')
    posting.classList.add('posting');
     thumbnail = document.createElement('div')
    thumbnail.classList.add('thumbnail');
     img = document.createElement('img')
     if(data[i].type==="Textbook"){img.src="https://image.slidesharecdn.com/introductiontoalgorithms3rdedition-140128021114-phpapp02/95/introduction-to-algorithms-3rd-edition-1-638.jpg?cb=1390876516"}
      if (data[i].type==="iClicker"){img.src="../public/images/iClickers.jpg"}
      if(data[i].type==="Electronics"){img.src="../public/images/Electronics.jpg"}
      if(data[i].type==="Course Notes"){img.src="../public/images/notes.jpg"}
        if(data[i].type==="Calculator"){img.src="../public/images/Calculators.jpg"}
          if(data[i].type==="Others"){img.src="../public/images/others.png"}
     caption = document.createElement('div')
    caption.classList.add('caption')
     h4 = document.createElement('h4')
     h4text = document.createTextNode(data[i].title)
    h4.appendChild(h4text)
     price = document.createElement('p')
     priceNumber = document.createTextNode(`List Price: ${data[i].price}`)
    price.appendChild(priceNumber)
    
    
    
    
    posting.appendChild(thumbnail)
    thumbnail.appendChild(img)
    thumbnail.appendChild(caption)
    caption.appendChild(h4)
    caption.appendChild(price)
    dom.appendChild(posting)
    
  }
    
    









  }).fail(function(err){
    
    console.log("ERROR HEr1!")
  });



console.log('LOADED!!')


});


