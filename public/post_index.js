// const classes = document.querySelectorAll('.classButton');
// const postings = document.querySelectorAll('.posting');

// for (let i = 0; i < classes.length; i++){
//     classes[i].addEventListener('click', showSelected);
// }

function showSelected(e) {
    const className = e.target.textContent;

    for (let i = 0; i < postings.length; i++){
        if (postings[i].classList.contains(className)){
            postings[i].classList.remove('notvisible');
        }
        else {
            postings[i].classList.add('notvisible');
        }
    }
}






document.addEventListener("DOMContentLoaded", function() {
  
  // server call 
  // server call will bring JSON file of ad elemets 

  const allads= JSON.parse(data)
  // check if there are no ads 
  if(allads.length!=0){
 // for each JSON element in json data, make a post and add to DOM   
    for(const i =0; i<allads.length;i++){
         
    }




  }


  // for each JSON element in json data, make a post and add to DOM






});


