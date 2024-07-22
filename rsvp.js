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
  validateForm()
  confirmInfo();
});

closeModal.addEventListener("click", function() {
  modal.close();
});


  function confirmInfo() {
  
    let firstNameEntered = document.getElementById("first-name-entered");
    let lastNameEntered = document.getElementById("last-name-entered");
    let emailEntered = document.getElementById("email-entered");
    let attendanceYesOrNo = document.getElementById("attending-yes-or-no");
    let mealOptionEntered = document.getElementById("meal-option-entered");
    let guestComments = document.getElementById("guest-comments");

    firstNameEntered.innerHTML = "First Name: " + firstName.value;
    lastNameEntered.innerHTML = 'Last Name: ' + lastName.value;
    emailEntered.innerHTML = "Email Address: " + emailAddress.value
    attendanceYesOrNo.innerHTML = "Attendance: " + attendance.value
    mealOptionEntered.innerHTML = "Meal Option: " + mealOption.value
    guestComments.innerHTML = "Comments From Guest: " + comments.value
  }



  function validateFirstName(fName) {
    if (fName.length == 0) {
      return "First name cannot be empty";
   } 
    else if (!fName.match(/^[a-zA-Z\s]+$/)) {
      return "First name can only contain letters and spaces";
   }
    else {
      return "";
    }

  }

  function validateLastName(lName) {
    if (lName.length == 0) {
      return "Last name cannot be empty";
   } 
    else if (!lName.match(/^[a-zA-Z\s]+$/)) {
      return "Last name can only contain letters and spaces";
   }
    else {
      return "";
    }
  }

  
  function validateEmail(emailAddr) {
    if (emailAddr.length == 0) {
      return "Email address cannot be empty";
   } 
    else if (!emailAddr.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return "Invalid email address";
    }
    else {
      return "";
    }
  }

  function validateAttendance(attendanceCheck) {
    if (attendanceCheck === "Select One") {
      return "Are you attending ? Please select 'Yes' or 'No'"
    
    } else {
      return "";
    }
        
       
  }


  function validateForm() {
    let fName = document.getElementById("first-name").value;
    let lName = document.getElementById("last-name").value;
    let emailAddr = document.getElementById("email-address").value;
    let attendanceCheck = document.getElementById("attending").value;

    let fNameError = validateFirstName(fName);
    let lNameError = validateLastName(lName);
    let emailError = validateEmail(emailAddr);
    let attendanceCheckError = validateAttendance(attendanceCheck);

    if (fNameError) {
      alert(fNameError);
      
    } else if (lNameError) {
      alert(lNameError);
    
    } else if (emailError) {
      alert(emailError);
    
    } else if (attendanceCheckError) {
      alert(attendanceCheckError);
    }
    
    else modal.showModal();
  }
