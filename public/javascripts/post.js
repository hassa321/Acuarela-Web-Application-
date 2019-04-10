
const log = console.log;

function ifPrice() {
	var type = document.getElementById('type')
	var adType = type.options[type.selectedIndex].text;
	if(adType === 'Selling'){
		var priceField = document.getElementById('price')
		priceField.style.display = "inline"
		priceField.required = true
	}else {
		var priceField = document.getElementById('price')
		priceField.style.display = "none"
		priceField.required = false
	}
}

function addPostDb() {
	// get values of post ad
	const cat = document.querySelector('#category')
	const category = cat.options[cat.selectedIndex].text;
	const ad = document.querySelector('#type')
	const type = ad.options[ad.selectedIndex].text;
	const con = document.querySelector('#condition')
	const condition = con.options[con.selectedIndex].text;
	const title = document.querySelector('#title').value
	const desc = document.querySelector('#description').value
	const loc = document.querySelector('#location')
	const location = loc.options[loc.selectedIndex].text;
	if(type === 'Selling'){
		const price = document.querySelector('#price').value
	}else{
		const price = 0
	}
	const contact = document.querySelector('#contact').value


	//error checking, making sure all fields are filled in correctly
	if((title.length<1) || (desc.length<1) || (type==="Choose the Ad type") || (category==="Choose a subject category") ||(location === "Location") ||(price === "") || (contact === "")){
		alert('Please fill out all required fields')
	}else if (((type==="Selling") && (price <= 0)) || (typeof price === "number")) {
		alert('Please re-enter a valid price')
	}else{
		//all fields are correctly filled out
		// need to add ad to database
		// then send user back to homepage
		var data;

	$.ajax({
		method: "post",
		url: "http://localhost:3000/ads",
		data: {
			title: title,
			price: price,
			type: type,
			location: location
		}
	}).done(function(data){
		window.open('../views/index.html','_self')
		console.log('Success!')
	}).fail(function(err){

		console.log("ERROR HEr1!")
	});









}

    }
