import errorMessageToUser from '../utilities/errorMessageToUser.js';

function showUserLoginError(parentElement, messageToUser) {
  const spanElement = document.createElement("span");

  spanElement.classList.add("form-text");
  errorMessageToUser(spanElement, messageToUser);

  parentElement.append(spanElement);
  return parentElement;
}

export default showUserLoginError;
