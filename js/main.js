
var contactForm = document.querySelector('.contact-form');
var contactFormSent = document.querySelector('.contact-form-sent');

var babySelect = document.querySelector('#babyselected');
babySelect.addEventListener('click', function(){
    document.getElementById('service').selectedIndex = 1;
    var elmnt = document.getElementById("contact");
    elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' });
    contactFormSent.style.display = "none";
    contactForm.style.display = "block";
    contactForm.style.opacity = "1";

})
var familySelect = document.querySelector('#familyselected');
familySelect.addEventListener('click', function(){
    document.getElementById('service').selectedIndex = 2;
    var elmnt = document.getElementById("contact");
    elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' });
    contactFormSent.style.display = "none";
    contactForm.style.display = "block";
    contactForm.style.opacity = "1";

})
var partySelect = document.querySelector('#partyselected');
partySelect.addEventListener('click', function(){
    document.getElementById('service').selectedIndex = 3;
    var elmnt = document.getElementById("contact");
    elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' });
    contactFormSent.style.display = "none";
    contactForm.style.display = "block";
    contactForm.style.opacity = "1";

})
var weddingSelect = document.querySelector('#weddingselected');
weddingSelect.addEventListener('click', function(){
    document.getElementById('service').selectedIndex = 4;
    var elmnt = document.getElementById("contact");
    elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' });
    contactFormSent.style.display = "none";
    contactForm.style.display = "block";
    contactForm.style.opacity = "1";
})

function submitForm (e){
 var xhr = new XMLHttpRequest();
 var name = document.querySelector('#name');
 var email = document.querySelector('#email');
 var preferreddate = document.querySelector('#preferreddate');
 var service = document.querySelector('#service option:checked');
 var message = document.querySelector('#message');

 xhr.open("POST",  mailerpath, true);

 xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

 

 //Send the proper header information along with the request
 //xhr.setRequestHeader("Content-Type", "text/html");

 xhr.onreadystatechange = function() { // Call a function when the state changes.
     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
         // Request finished. Do processing here.
         contactForm.style.display = "none";
         contactFormSent.style.display = "block";
         contactFormSent.style.opacity = "1";
     }
 }
 xhr.send('name='+name.value+'&email='+email.value+'&message='+message.value+'&preferreddate='+preferreddate.value+'&service='+service.value); 
}

// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
var i;
var x = document.getElementsByClassName("mySlides");
for (i = 0; i < x.length; i++) {
x[i].style.display = "none";  
}
myIndex++;
if (myIndex > x.length) {myIndex = 1}    
x[myIndex-1].style.display = "block";  
setTimeout(carousel, 4000);    
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
var x = document.getElementById("navDemo");
if (x.className.indexOf("w3-show") == -1) {
 x.className += " w3-show";
} else { 
 x.className = x.className.replace(" w3-show", "");
}
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

var formBtn = document.querySelector('#submit-form');

formBtn.addEventListener('click', submitForm);

