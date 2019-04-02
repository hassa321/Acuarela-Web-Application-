'use strict';
const log = console.log;

const picContainer = document.querySelector('#picContainer');
const userName = document.querySelector('#userName');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const adList = document.querySelector('#adList');
const adTitle = document.querySelector('#adTitle');
const adDetails = document.querySelector('#adDetails');
const adDesc = document.querySelector('#adDesc');




function loadAds()
{
	var listOfAds = getAds();
	if (listOfAds.length)
	{
		for (let i = 0; i < listOfAds.length; ++i)
		{
			adList.appendChild(listOfAds[i]);
		}
	}
}

function getAds()
{
	//This function would get ads from the server and return them
	var ads = [];
	const titleText = adTitle.textContent;
	const descText = adDesc.textContent;
	for (let i = 0; i < 3; ++i)
	{
		let newItem = document.createElement('div');
		newItem.className = 'adItem';

		let adPicContainer = document.createElement('div');
		adPicContainer.className = 'thumbContainer';

		let adPic = document.createElement('img');
		adPic.className = 'adThumbnail';
		adPic.src = 'adThumbnail.jpg';

		let details = document.createElement('div');
		details.className = 'adDetails';

		let title = document.createElement('span');
		title.className = 'adTitle';
		title.appendChild(document.createTextNode(adTitle.textContent));

		let price = document.createElement('span');
		price.className = 'adPrice';

		let description = document.createElement('span');
		description.className = 'adDesc';
		description.textContent = descText;

		newItem.appendChild(adPicContainer);
		newItem.appendChild(details);
		adPicContainer.appendChild(adPic);
		
		ads[i] = newItem;

	}
	return ads;
}


function getUsername()
{
	//Get username of the current user and display it.
}

function getContactInfo()
{

}