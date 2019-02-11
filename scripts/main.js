var myHeading = document.querySelector('h2');
myHeading.textContent = 'The Heart Of The North!';

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'The Heart Of The North, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'THe Heart Of The North, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/tynebridge.jpg') {
      myImage.setAttribute ('src','images/tynebridge8.jpg');
    } else {
      myImage.setAttribute ('src','images/tynebridge.jpg');
    }
}