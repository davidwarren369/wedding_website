const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button")

let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let attendance = document.getElementById("attending");
let emailAddress = document.getElementById("email-address");
let mealOption = document.getElementById("meal-option");
let comments = document.getElementById("comments");


openModal.addEventListener("click", function() {
  //validateForm()
  modal.showModal();
  myFunction();
});

closeModal.addEventListener("click", function() {
  modal.close();
});


  function myFunction() {
  
    let firstNameEntered = document.getElementById("first-name-entered");
    let lastNameEntered = document.getElementById("last-name-entered");
    let emailEntered = document.getElementById("email-entered");
    let attendanceYesOrNo = document.getElementById("attending-yes-or-no");
    let mealOptionEntered = document.getElementById("meal-option-entered");
    let guestComments = document.getElementById("guest-comments");
  
    firstNameEntered.innerHTML = "First Name: " + firstName.value
    lastNameEntered.innerHTML = "Last Name: " + lastName.value
    emailEntered.innerHTML = "Email Address: " + emailAddress.value
    attendanceYesOrNo.innerHTML = "Attendance: " + attendance.value
    mealOptionEntered.innerHTML = "Meal Option: " + mealOption.value
    guestComments.innerHTML = "Comments From Guest: " + comments.value
  
  }


  function validateName(fName) {
    if (fName.length == 0) {
      return "Name cannot be empty";
   }
  }


  function validateForm() {
    let fName = document.getElementById("first-name").value;

    let nameError = validateName(fName);
    if (nameError) {
      alert(nameError);
      return false;
    }
  }

  
  
  