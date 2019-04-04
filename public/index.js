

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
      const d =document.getElementById("abc")
      d.innerHTML='abc'
   //server call brings all ads in JSON file
   // check if JSON is empty, means there are no ads
    console.log(`Number of Ads:${data.length}`)

      const data1 = data

    }).fail(function(err){
    
    console.log("ERROR HEr1!")
    });

// do everything here.
    
  console.log('LOADED!!')
  const dom = document.getElementById("ad-section")
  var varray
  var posting;
  var thumbnail;
  var img;
  var caption;
  var h4;
  var h4text;
  var price;
  var priceNumber;


  for (let i = 0;i<data1.length;i++){
  //create ALL dom Elements first
   posting = document.createElement('div')
  posting.classList.add('posting');
   thumbnail = document.createElement('div')
  thumbnail.classList.add('thumbnail');
   img = document.createElement('img')
   if(data1[i].type==="Textbook"){img.src="https://image.slidesharecdn.com/introductiontoalgorithms3rdedition-140128021114-phpapp02/95/introduction-to-algorithms-3rd-edition-1-638.jpg?cb=1390876516"}
    if (data1[i].type==="iClicker"){img.src="../public/images/iClickers.jpg"}
    if(data1[i].type==="Electronics"){img.src="../public/images/Electronics.jpg"}
    if(data1[i].type==="Course Notes"){img.src="../public/images/notes.jpg"}
      if(data1[i].type==="Calculator"){img.src="../public/images/Calculators.jpg"}
        if(data1[i].type==="Others"){img.src="../public/images/others.png"}
   caption = document.createElement('div')
  caption.classList.add('caption')
   h4 = document.createElement('h4')
   h4text = document.createTextNode(data1[i].title)
  h4.appendChild(h4text)
   price = document.createElement('p')
   priceNumber = document.createTextNode(`List Price: ${data1[i].price}`)
  price.appendChild(priceNumber)
  
  
  
  
  posting.appendChild(thumbnail)
  thumbnail.appendChild(img)
  thumbnail.appendChild(caption)
  caption.appendChild(h4)
  caption.appendChild(price)
  console.log('appending here')
  dom.append(posting)
  console.log(posting)
  console.log(dom)

}
  });


