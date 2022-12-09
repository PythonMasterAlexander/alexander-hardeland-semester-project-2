import { attributesOnErrorMessage } from '../constant/variables.js';

const addErrorStyleOnProvidedContainer = function(containerElement) {
  containerElement.classList.add(attributesOnErrorMessage.alertClass, attributesOnErrorMessage.warningClass);
  containerElement.setAttribute(attributesOnErrorMessage.ariaAttribute, attributesOnErrorMessage.ariaRole);

  return containerElement;
};
export default addErrorStyleOnProvidedContainer; 
