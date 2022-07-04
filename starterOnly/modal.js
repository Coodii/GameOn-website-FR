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
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const radioList = document.getElementsByName("location");
const checkbox =  document.getElementById("checkbox1");



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
  else {
    formData[0].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    formData[0].setAttribute("data-error-visible", "true");
  }
}

//check if the last name contains at least 2 caracters
function checkLastName(){
  if (lastName.value.length >= 2){
    return true;
}
  else {
    formData[1].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    formData[1].setAttribute("data-error-visible", "true");
  }
}


//check if the email is correct
function checkEmail(){
  const mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (email.value.match(mailformat)){
    return true;
  }
  else {
    formData[2].setAttribute("data-error", "Merci de renseigner un mail correct.");
    formData[2].setAttribute("data-error-visible", "true");
  }
}

//check if the age is over 16 years old.
function checkAge(){
  const birthDateFullDate = birthDate.value.split("-");
  const birthYear = birthDateFullDate[0];
  const birthMonth = birthDateFullDate[1];
  const birthDay = birthDateFullDate[2];
  const currentDate = new Date();
  const yearDifference = currentDate.getFullYear() - birthYear;
  const monthDifference = currentDate.getMonth() + 1 - birthMonth;
  const dayDifference = currentDate.getDate()- birthDay;
  console.log(monthDifference + "-" + dayDifference);

  if(yearDifference > 16 && yearDifference != currentDate.getFullYear()
     || yearDifference === 16 && (monthDifference > 0 || monthDifference === 0 && dayDifference >= 0))
    {
      return true;
    }
  else {
    formData[3].setAttribute("data-error", "Vous n'avez pas l'âge requis pour vous inscrire.");
    formData[3].setAttribute("data-error-visible", "true");
  }
}


//check if the quantity value is a number and not empty
function checkInteger(){
  var quantityValue = Number(quantity.value);
  if (typeof quantityValue === 'number' && quantity.value != ''){
    return true;
  }
  else {
    formData[4].setAttribute("data-error", "Merci de séléctionner une valeur numérique.");
    formData[4].setAttribute("data-error-visible", "true");
  }
  }


//check that a radio button is checked
function checkRadio(){
    for (var i=0; i<radioList.length; i++){
      if (radioList[i].checked){
        return true;
      }
    }
    formData[5].setAttribute("data-error", "Merci de sélectionné un tournoi.");
    formData[5].setAttribute("data-error-visible", "true");
    return false;
}

//check the checkbox terms and conditions is checked.
function checkCheckbox(){
  if(checkbox.checked){
    return true;
  }
  else{
    formData[6].setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions.");
    formData[6].setAttribute("data-error-visible", "true");
    return false;
  }
}

function validate(){
  const isFirsNameValid = checkFirstName();
  const isLastNameValid = checkLastName();
  const isEmailValid = checkEmail();
  const isOver16 = checkAge();
  const isInteger = checkInteger();
  const isRadioSelected = checkRadio();
  const isChecked = checkCheckbox();
  
  const listIsCorrect = [isFirsNameValid, isLastNameValid, isEmailValid, isOver16, isInteger, isRadioSelected, isChecked];
  if(isFirsNameValid && isLastNameValid && isEmailValid && isRadioSelected && isInteger && isChecked && isOver16){
      return true;
  }
  else { 
    for(i=0; i < listIsCorrect.length; i++){
      if(listIsCorrect[i] === true){
        formData[i].setAttribute("data-error-visible", "false");
      }
    }
    return false;
  }
}
  
    
