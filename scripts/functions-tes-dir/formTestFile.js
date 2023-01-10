import showUserLoginError from '../components/showUserLoginError.js';

import { baseUrl, productsAuth, inputLength, wrongLoginCredentials } from '../constant/constants.js';
import { showErrorToUserContainer } from '../constant/variables.js';

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
    loginUser(username, password);
    
  } else {

    if (username.length < inputLength || password.length < inputLength) {
      showUserLoginError(showErrorToUserContainer, wrongLoginCredentials, "form-text");

      usernameInputField.addEventListener("click", function() {
        //Bug in code --> Attempt to login more than one time with wrong length of username will throw an error in the console, need to find some other way 
        //of grabbing/choosing the span element here
        //document.querySelector(".form-text").remove();
        
        usernameInputField.value = "";
      }); 
    } 
  }
}

//Want to put the addEventListener function on its own and import it from another file
function removeInputAndErrorMessageToUser(inputField, messageElement) {
}

async function loginUser(username, password) {
  const urlToAuthenticate = baseUrl + productsAuth;

  const userIdentifier = JSON.stringify({identifier: username, password: password});

  const dataHeadersForLoginRequest = {
    method: "POST",
    body: userIdentifier,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(urlToAuthenticate, dataHeadersForLoginRequest);
    const jsonResponse = await response.json();

    if(jsonResponse.error) {
      console.log(error);
    }
    console.log(jsonResponse);
  }
  catch(error) {
    console.log(error);
  }
}
