import createHtmlElement from './createHtmlElement.js';
import  errorMessageToUser from '../utilities/errorMessageToUser.js';
import addErrorStyleOnProvidedContainer from '../utilities/addErrorStyleOnProvidedContainer.js';

import { errorHeading, divElement } from '../constant/constants.js';
import { indexPageHtmlContainer, errorMessageContainer, attributesOnErrorMessage } from '../constant/variables.js';

const showProductsOnPage = function(products) {
  const errorFromApiCall = products.outputError;
  const apiDataProduct = products.apiData;

  if (errorFromApiCall) {
    return errorMessageToUser(addErrorStyleOnProvidedContainer(errorMessageContainer), errorFromApiCall);
    
  } else {
    return apiDataProduct.map(product => {
      if (!product.featured) {
        createHtmlElement(indexPageHtmlContainer, product, divElement);
      } 
    });
  }
};
export default showProductsOnPage; 
