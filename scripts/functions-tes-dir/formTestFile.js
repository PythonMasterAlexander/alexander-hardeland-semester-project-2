const showUserNameWarning = document.querySelector("#if-username-wrong--show");
console.log(showUserNameWarning);

export default function validateUserLoginInformation() {
  event.preventDefault();
  const formElement = event.target;
  console.log(formElement);

  //Create a object of the values on the input fields
  const formDataOnInputs = new FormData(formElement);
  console.log(formDataOnInputs);

  //Add trim so user can't enter empty string
  const userName = formDataOnInputs.get("username");

  const userNameInputElement = formElement[1];
  if(userName.length < 2) {
    //If I want the message to display while typing, we need a keyup event attached to when the user are typing in the input field
    //Create a function for this, this function will be something like displayWarningToUser, It acts like the displayMessage from connor video
    showUserNameWarning.style.display = "block";
    showUserNameWarning.style.color = "red";
    userNameInputElement.value = "";

  } else {
    showUserNameWarning.style.display = "none";
  }

  //Login the user
}

function loginUser() {}
function showUserLoginError() {
  //<p id="if-password-wrong--show" class="form-text">wrong password</p>
}
