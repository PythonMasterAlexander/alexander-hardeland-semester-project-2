import showUserLoginError from '../components/showUserLoginError.js';

import { wrongPassword, wrongUsername, baseUrl, productsAuth, inputLength } from '../constant/constants.js';
import { inputGroupPassword, inputGroupUsername } from '../constant/variables.js';

export default function validateUserLoginInformation() {
  event.preventDefault();
  const formElement = event.target;

  const usernameInputField = formElement[1];
  const passwordInputField = formElement[2];

  //Create a object of the values on the input fields
  const formDataOnInputs = new FormData(formElement);

  const username = formDataOnInputs.get("username");
  const password = formDataOnInputs.get("password");

  
  //--> Find out how to display a empty input box 
  if ((username.length > inputLength) && (password.length > inputLength)) {
    //loginUser()
    
  } else {

    if (username.length < inputLength) {
      showUserLoginError(inputGroupUsername, wrongUsername, "form-text");

      usernameInputField.addEventListener("click", function() {
        //Bug in code --> Attempt to login more than one time with wrong length of username will throw an error in the console 
        //document.querySelector(".form-text").remove();
        
        usernameInputField.value = "";
      }); 
    } 

    if (password.length < inputLength) {
      showUserLoginError(inputGroupPassword, wrongPassword, "form-text");
      passwordInputField.addEventListener("click", function() {
        //Bug in code --> Attempt to login more than one time with wrong length of password will throw an error in the console 
        //Bug in code --> Because I use querySelector already one time, when trying again it only selects the error message from the username container
        //document.querySelector(".form-text").remove();

        passwordInputField.value = "";
      }); 
    }
  }
}

//Want to put the addEventListener function on its own and import it from another file
function removeInputAndErrorMessageToUser(inputField, messageElement) {
}

function loginUser(username, password) {
}
