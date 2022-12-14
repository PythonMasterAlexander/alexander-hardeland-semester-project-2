import showUserLoginError from '../components/showUserLoginError.js';

import { wrongPassword, wrongUsername, baseUrl, productsAuth, inputLength } from '../constant/constants.js';
import { inputGroupPassword, inputGroupUsername } from '../constant/variables.js';

export default function validateUserLoginInformation() {
  event.preventDefault();

  const formElement = event.target;
  //Create a object of the values on the input fields
  const formDataOnInputs = new FormData(formElement);

  const username = formDataOnInputs.get("username");
  const password = formDataOnInputs.get("password");

  console.log(formElement);

  formElement.innerHTML = "";
  if ((username.length > inputLength) && (password.length > inputLength)) {
    //loginUser()
    
  } else {

    if (username.length < inputLength) {
      showUserLoginError(inputGroupUsername, wrongUsername);
    }

    if (password.length < inputLength) {
      showUserLoginError(inputGroupPassword, wrongPassword);
    }
  }
}

function loginUser(username, password) {
}
