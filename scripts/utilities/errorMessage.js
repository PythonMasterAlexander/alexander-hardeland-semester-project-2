import createHtmlElement from '../components/createHtmlElement.js';
import { indexPageHtmlContainer } from '../constant/variables.js';

const errorMessage = function(errorMessage) {
  const returnErrorMessageInHtml = createHtmlElement(indexPageHtmlContainer, errorMessage, "div");
}
export default errorMessage;
