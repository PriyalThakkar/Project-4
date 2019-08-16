// JavaScript Document

//set up variables and store reference to the form, the email input and the span with class of error_ 
var form = document.querySelector('form'); 
var email = document.getElementById('mail'); 
var firstname= document.getElementById('firstname');
var urage= document.getElementById('urage');
var city= document.getElementById('ct');


var letterSet = /^[a-zA-Z]+$/;

var digitSet = /^[0-9]+$/;
var error_ = document.querySelector('.error_');
var error_firstname = document.querySelector('.error_firstname');
var error_urage = document.querySelector('.error_urage');
var error_city = document.querySelector('.error_city');

var asideHeading=document.querySelector('aside h2');



email.addEventListener("input", function (event) {
  if(email.validity.valid) {
    //in case there is an error_ message visible, we remove the error_ message 
    error_.innerHTML = ""; //reset the content of the message
    error_.className = "error_"; //reset the visual state of the message
  }  
  
}, false); 

firstname.addEventListener("input", function (event) {
  if(firstname.value.match(letterSet)) {
      //in case there is an error_ message visible, we remove the error_ message 
      error_firstname.innerHTML = ""; //reset the content of the message
      error_firstname.className = "error_"; //reset the visual state of the message
    }  
  } ,false); 

 

    urage.addEventListener("input", function (event) {
      if(urage.value.match(digitSet)) {
          //in case there is an error_ message visible, we remove the error_ message 
          error_urage.innerHTML = ""; //reset the content of the message
          error_urage.className = "error_"; //reset the visual state of the message
        }  
      } ,false);

      city.addEventListener("input", function (event) {
        if(city.value.match('barrie')) {
            //in case there is an error_ message visible, we remove the error_ message 
            error_city.innerHTML = ""; //reset the content of the message
            error_city.className = "error_"; //reset the visual state of the message
          }  
        } ,false); 

        
           

      

form.addEventListener("submit", function(event) {
  //each time the user tries to send the date, we are going to check if the email field is valid 
  if(!email.validity.valid) {
    //if the field is not valid, we display a custom error_ message 
    error_.innerHTML = "Put a valid email!"; 
    error_.className = "error_ active"; 
    //prevent the form from being submitted by preventing the default action 
    event.preventDefault();  
  }
  if(!firstname.value.match(letterSet)) {
    //if the field is not valid, we display a custom error_ message 
    
    error_firstname.innerHTML = "Enter Valid name!"; 
    error_firstname.className = "error_ active"; 
    //prevent the form from being submitted by preventing the default action 
    event.preventDefault();  
  }
 
  if(!urage.value.match(digitSet)) {
    //if the field is not valid, we display a custom error_ message 
    
    error_urage.innerHTML = "Please enter vaid urage!"; 
    error_urage.className = "error_ active"; 
    //prevent the form from being submitted by preventing the default action 
    event.preventDefault();  
  }

  
  if(!city.value.match('barrie')) {
    //if the field is not valid, we display a custom error_ messurage 
    
    error_city.innerHTML = "Please write barrie!"; 
    error_city.className = "error_ active"; 
    //prevent the form from being submitted by preventing the default action 
    event.preventDefault();  
  }



}, false); 


