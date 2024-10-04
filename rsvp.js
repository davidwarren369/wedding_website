const modal = document.querySelector(".modal");               //dialog element - inbuilt modal
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button")

                                                    //Submit button opens the modal dialog
openModal.addEventListener("click", function() {    //Listening for a 'click', then function called
  validateForm();                                   
  confirmInfo();                                    
});
                                                    //Close button closes the modal dialog
closeModal.addEventListener("click", function() {   //Listening for a 'click', then function called
  modal.close();                                    
});



//declaring variables - form 'inputs' 
                                                          
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");        
let attendance = document.getElementById("attending");
let emailAddress = document.getElementById("email-address");
let mealOption = document.getElementById("meal-option");
let comments = document.getElementById("comments");



//Func to pass Input information into the modal

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

// Form validation - First name

function validateFirstName(fName) {
  if (fName.length == 0) {
     return "First name cannot be empty";
  } 
   else if (!fName.match(/^[a-zA-Z\s]+$/)) {   // regular expression pattern 
    return "First name can only contain letters and spaces";
  }
  else {
    return "";
  }

}


// Form validation - Last name 

function validateLastName(lName) {
  if (lName.length == 0) {
    return "Last name cannot be empty";
  } 
  else if (!lName.match(/^[a-zA-Z\s]+$/)) {     // regular expression pattern
    return "Last name can only contain letters and spaces";
  }
   else {
     return "";
   }
}
 

// Form validation - Email  

function validateEmail(emailAddr) {
   if (emailAddr.length == 0) {
     return "Email address cannot be empty";
 } 
   else if (!emailAddr.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {  // regular expression pattern
     return "Invalid email address";
   }
   else {
     return "";    }
}


// Form validation - Attendance 

function validateAttendance(attendanceCheck) {
  if (attendanceCheck === "Select One") {
     return "Are you attending ? Please select 'Yes' or 'No'"

   } else {
     return "";
   }      
}

// Form validation - Meal Option 

function validateMealOption(mealOption) {
  if (mealOption === "Select One") {
    return "Please select a meal option"
  
  } else {
    return "";
  }
  
}

// Form validation - main func for validation

function validateForm() {
   let fName = document.getElementById("first-name").value;
   let lName = document.getElementById("last-name").value;
   let emailAddr = document.getElementById("email-address").value;
   let attendanceCheck = document.getElementById("attending").value;
   let mealOption = document.getElementById("meal-option").value

   let fNameError = validateFirstName(fName);
   let lNameError = validateLastName(lName);
   let emailError = validateEmail(emailAddr);
   let attendanceCheckError = validateAttendance(attendanceCheck);
   let mealOptionError = validateMealOption(mealOption);


  if (fNameError) {
    alert(fNameError);
      
  } else if (lNameError) {
     alert(lNameError);
    
  } else if (emailError) {
     alert(emailError);
    
  } else if (attendanceCheckError) {
    alert(attendanceCheckError);
  
  } else if (mealOptionError) {
    alert(mealOptionError);
  
  } else modal.showModal();
}
