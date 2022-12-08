import createHtmlElement from '../components/createHtmlElement.js';

/*
const errorMessage = function(containerElement, errorMessage, element) {
  containerElement.classList.add("alert-warning", "alert");
  containerElement.setAttribute("role", "alert");

  const errorMessageInHtml = createHtmlElement(containerElement, errorMessage, element);
  return errorMessageInHtml;
};
*/

//Writing the new error function
const errorMessage = function(containerElement, errorMessageToUser = "There was a problem loading the content") {
  if (containerElement) {
    const errorMessageStyles = {
      alert: "alert",
      warning: "alert-warning",
      attribute: "role",
      aria: "alert"
    }
  }
};
export default errorMessage;
