import createHtmlElement from '../components/createHtmlElement.js';

import { indexPageHtmlContainer } from '../constant/variables.js';
import { errorHeading } from '../constant/constants.js';

const errorMessage = function(errorMessage) {
  indexPageHtmlContainer.classList.add("alert-warning", "alert");
  indexPageHtmlContainer.setAttribute("role", "alert");

  const errorMessageInHtml = createHtmlElement(indexPageHtmlContainer, errorMessage, errorHeading);
  return errorMessageInHtml;
}
export default errorMessage;
