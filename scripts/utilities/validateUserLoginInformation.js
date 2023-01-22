import showUserLoginError from './showUserLoginError.js';

import { saveUserLoginToken, saveUserLogin } from '../components/localStorageComponents.js';
import { baseUrl, productsAuth, wrongLoginCredentials, tokenKey, userKey, loginUserName, loginPassword} from '../constant/constants.js';
import { showErrorToUserContainer } from '../constant/variables.js';

const inputFields = document.querySelectorAll(".form-control");
export default function validateUserLoginInformation() {
  event.preventDefault();
  const formElement = this;
  const formDataOnInputs = new FormData(formElement);

  const username = formDataOnInputs.get("username");
  const password = formDataOnInputs.get("password");

  if ((username === loginUserName) && (password === loginPassword)) {
    loginUser(username, password);
    
  } else {
    showUserLoginError(showErrorToUserContainer, wrongLoginCredentials, "form-text");

    inputFields.forEach((inputField) => {
      inputField.addEventListener("click", function() {
        inputField.value = "";
        showErrorToUserContainer.replaceChildren();
      }); 
    });
  }
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

    if (jsonResponse.user) {
      saveUserLoginToken(jsonResponse.jwt);
      saveUserLogin(jsonResponse.user)

      location.href = "admin.html";
    }

    if (jsonResponse.error) {
      //Add a message to user if password or username is wrong 
    }
  }

  catch(error) {
  }
}
