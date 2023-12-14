console.log("Welcome to Ajax");
document.getElementById("fetchbtn");
fetchbtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){
	const xhr = new XMLHttpRequest();
	console.log("button clicked");
	//open the object
	xhr.open('GET','shweta.txt', true);
	xhr.onprogress = function(){
		console.log("it is in progress");
	}
	xhr.onload = function(){
		console.log(this.responseText);
	}
	xhr.send();
}