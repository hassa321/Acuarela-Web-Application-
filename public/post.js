
const log = console.log;

const postForm = document.querySelector('.form-post');
postForm.addEventListener('submit', addPostDb);


function addPostDb(e) {
	// get values of post ad 
	e.preventDefault()
	const cat = document.querySelector('#category')
	const category = cat.options[cat.selectedIndex].text;
	const ad = document.querySelector('#type')
	const type = ad.options[ad.selectedIndex].text;
	var title = document.querySelector('#title').value
	title ="TESTING!" 
	const desc = document.querySelector('#description').value
	const loc = document.querySelector('#location')
	const location = loc.options[loc.selectedIndex].text;
	const price = document.querySelector('#pric').value


	//error checking, making sure all fields are filled in correctly
	//if((title.length<1)){// || (desc.length<1) || (type==="Choose the Ad type") || (category==="Choose a subject category") ||(location === "Location") ||(price === "")){
		//alert('Please fill out all fields!')
	

	//}else{
		//all fields are correctly filled out
		// need to add ad to database
		// then send user back to homepage
		var data;
		log(title)
		log(price)
		log(type)
		log(location)

	$.ajax({ 
		method: "post", 
		url: "/ads",
		data: { 
			title: title,
			price: price,
			type: type,
			location: location
		}
	}).done(function(data){
		window.open('../public/index.html','_self')
		console.log('Success!')
	}).fail(function(err){
		
		console.log("ERROR HEr1!")
	});









}


	
