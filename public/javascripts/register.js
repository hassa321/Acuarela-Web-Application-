// const log = console.log;
// const registerForm = document.querySelector('.form-register');
// registerForm.addEventListener('submit', addUserDb);
//
//
// function addUserDb(e) {
// 	// get values of post ad
//   e.preventDefault();
// 	const g = document.querySelector('#gender')
// 	const gender = g.options[g.selectedIndex].text;
//
// 	const first = document.querySelector('#firstname').value
// 	const last = document.querySelector('#lastname').value
// 	const username = document.querySelector('#username').value
// 	const phone = document.querySelector('#phone').value
// 	const email = document.querySelector('#email').value
// 	const password = document.querySelector("#password").value
// 	const confirmPass=document.querySelector("#confirm-password").value
//
//
// 	//check if email and password field are correctly field
//     // if ((email==="")||(password==="")||(confirmPass==="")){
//     //
//     // 		// email and password fields are not correct
//   	// 		alert('Please fill out all fields')
//   	// }else{
//     //
//   	// 	if(password!=confirmPass){
//   	// 		alert('Passords must match!!')
//   	// 	}
//   	// }
// }
//
//
// // 	//error checking, making sure all fields are filled in correctly
// // 	if((title.length<1) || (desc.length<1) || (adType==="Choose the Ad type") || (category==="Choose a subject category") ||(location === "Location") ||(price === "")){
// // 		alert('Please fill out all fields!')
//
//
// // 	}else{
// // 		//all fields are correctly filled out
// // 		// need to add ad to database
// // 		// then send user back to homepage
//
//
// // 		const url = 'http://localhost:3000/ads';
// //     // The data we are going to send in our request
// //     let data = {
// //        title,
// //        price,
// //        type,
// //        location
// //     }
// //     // Create our request constructor with all the parameters we need
// //     const request = new Request(url, {
// //         method: 'post',
// //         body: JSON.stringify(data),
// //         headers: {
// //             'Accept': 'application/json, text/plain, */*',
// //             'Content-Type': 'application/json'
// //         },
// //     });
// //     fetch(request)
// //     .then(function(res) {
// //         // Handle response we get from the API
// //         // Usually check the error codes to see what happened
// //         const message = document.querySelector('#message')
// //         if (res.status === 200) {
// //             console.log('Added student')
// //             message.innerText = 'Success: Added a student.'
// //             message.setAttribute("style", "color: green")
//
// //         } else {
// //             message.innerText = 'Could not add student'
// //             message.setAttribute("style", "color: red")
//
// //         }
// //         console.log(res)
//
// //     }).catch((error) => {
// //         console.log(error)
// //     })
//
//
// // }
// // }
