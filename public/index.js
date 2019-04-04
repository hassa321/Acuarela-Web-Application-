

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
      //d.append(document.createElement('button'))
      //for (let i = 0;i<data.length;i++){
        //create ALL dom Elements first
         posting = document.createElement('div')
        posting.classList.add('posting');
         thumbnail = document.createElement('div')
        thumbnail.classList.add('thumbnail');
         img = document.createElement('img')
         if(data[0].type==="Textbook"){img.src="https://image.slidesharecdn.com/introductiontoalgorithms3rdedition-140128021114-phpapp02/95/introduction-to-algorithms-3rd-edition-1-638.jpg?cb=1390876516"}
      if (data[0].type==="iClicker"){img.src="../public/images/iClickers.jpg"}
      if(data[0].type==="Electronics"){img.src="../public/images/Electronics.jpg"}
      if(data[0].type==="Course Notes"){img.src="../public/images/notes.jpg"}
        if(data[0].type==="Calculator"){img.src="../public/images/Calculators.jpg"}
          if(data[0].type==="Others"){img.src="../public/images/others.png"}

          caption = document.createElement('div')
    caption.classList.add('caption')
     h4 = document.createElement('h4')
     h4text = document.createTextNode(data[i].title)
    h4.append(h4text)
     price = document.createElement('p')
     priceNumber = document.createTextNode(`List Price: ${data[i].price}`)
    price.append(priceNumber)
    
    
    
    
    posting.append(thumbnail)
    thumbnail.append(img)
    thumbnail.append(caption)
    caption.append(h4)
    caption.append(price)

    d.append(posting)
   //server call brings all ads in JSON file
   // check if JSON is empty, means there are no ads
    console.log(`Number of Ads:${data.length}`)

    }).fail(function(err){
    
    console.log("ERROR HEr1!")
    });

// do everything here.
    
  console.log('LOADED!!')
  
  });


