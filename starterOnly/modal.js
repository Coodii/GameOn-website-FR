function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const exitForm = document.getElementsByClassName('close');
const form = document.getElementsByName("reserve");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const radioList = document.getElementsByName("location");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


exitForm[0].addEventListener('click', closeModal);


// close modal form
function closeModal() {
  modalbg.style.display = "none";
}



//check if the last name contains at least 1 caracters
function checkFirstName() {
  if (firstName.value.length >= 2){
    return true;
    // errror message formData[0].setAttribute(data-error);
}
}

//check if the last name contains at least 2 caracters
function checkLastName(){
  if (lastName.value.length >= 2){
    return true;
}
}


//check if the email 
function checkEmail(){
  const mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (email.value.match(mailformat)){
    return true;
  }
}

function checkInteger(){
  var quantityValue = Number(quantity.value);
  if (typeof quantityValue === 'number' && quantity.value != ''){
    return true;
  }
  }

function checkRadio(){
    for (var i=0; i<radioList.length; i++){
      if (radioList[i].checked){
        return true;
      }
    }
    return false;
}

function validate(){
  const isFirsNameValid = checkFirstName();
  const isLastNameValid = checkLastName();
  const isEmailValid = checkEmail();
  const isRadioSelected = checkRadio();
  const isInteger = checkInteger();
  if(isFirsNameValid && isLastNameValid && isEmailValid && isRadioSelected && isInteger){
      return true;
  }
  else {
    return false;
  }
}
