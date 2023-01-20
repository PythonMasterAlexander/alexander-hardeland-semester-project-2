import errorMessageToUser from './errorMessageToUser.js';

function showUserLoginError(parentElement, messageToUser, className) {
  const spanElement = document.createElement("span");

  spanElement.classList.add(className);
  errorMessageToUser(spanElement, messageToUser);

  parentElement.append(spanElement);
  return parentElement;
} 
export default showUserLoginError;
