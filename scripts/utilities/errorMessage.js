import createHtmlElement from '../components/createHtmlElement.js';

const errorMessage = function(containerElement, errorMessage, element) {
  containerElement.classList.add("alert-warning", "alert");
  containerElement.setAttribute("role", "alert");

  const errorMessageInHtml = createHtmlElement(containerElement, errorMessage, element);
  return errorMessageInHtml;
}
export default errorMessage;
