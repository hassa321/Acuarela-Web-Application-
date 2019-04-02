
const log = console.log;




function addPostDb() {
	// get values of post ad 
	const cat = document.querySelector('#category')
	const category = cat.options[cat.selectedIndex].text;
	const ad = document.querySelector('#type')
	const adType = ad.options[ad.selectedIndex].text;
	const title = document.querySelector('#title').value
	const desc = document.querySelector('#description').value
	const loc = document.querySelector('#location')
	const location = loc.options[loc.selectedIndex].text;
	const price = document.querySelector('#price').value


	//error checking, making sure all fields are filled in correctly
	if((title.length<1) || (desc.length<1) || (adType==="Choose the Ad type") || (category==="Choose a subject category") ||(location === "Location") ||(price === "")){
		alert('Please fill out all fields!')
	

	}else{
		//all fields are correctly filled out
		// need to add ad to database
		// then send user back to homepage


		const url = 'http://localhost:3000/ads';
    // The data we are going to send in our request
    let data = {
       title,
       price,
       type
    }
    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: 'post', 
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    });
    fetch(request)
    .then(function(res) {
        // Handle response we get from the API
        // Usually check the error codes to see what happened
        const message = document.querySelector('#message')
        if (res.status === 200) {
            console.log('Added student')
            message.innerText = 'Success: Added a student.'
            message.setAttribute("style", "color: green")
           
        } else {
            message.innerText = 'Could not add student'
            message.setAttribute("style", "color: red")
     
        }
        console.log(res)
        
    }).catch((error) => {
        console.log(error)
    })


}
}

	
