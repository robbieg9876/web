var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello Premier league';
//var Bielsa = Bielsa.querySelector('Bielsa');
//var myImage = document.querySelector('img');
var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'Images/bielsa.jpeg') {
      myImage.setAttribute ('src','Images/radz.jpeg');
    
    } 
    else {
      myImage.setAttribute ('src','Images/bielsa.jpeg');
     }
    }

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');
function setTeam(){
	var myTeam= prompt('Please enter your team.');
	localStorage.setItem('team',myTeam);
	 myHeading.textContent = 'MOT';
 	if(!localStorage.getItem('team')){
 		setUserName();

  } else {
  	var storedT= localStorage.getItem('Team');
 myHeading.textContent=myTeam+' are going up!';
		}
}
myButton.onclick = function() {
  setTeam();
}