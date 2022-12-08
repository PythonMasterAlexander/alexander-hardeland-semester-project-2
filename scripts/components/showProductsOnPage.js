import createHtmlElement from './createHtmlElement.js';
//import errorMessage from '../utilities/errorMessage.js';

import { errorHeading } from '../constant/constants.js';
import { indexPageHtmlContainer } from '../constant/variables.js';

const showProductsOnPage = function(products) {
  const errorFromApiCall = products.outputError;
  const apiDataProduct = products.apiData;

  if (errorFromApiCall) {
    //This is where I am returning the error function if there is any error from the api call
    //return errorMessage(indexPageHtmlContainer, errorFromApiCall, errorHeading);
    
  } else {
    return apiDataProduct.map(product => {
      createHtmlElement(indexPageHtmlContainer, product.id, "div");
    });
  }
};
export default showProductsOnPage; 
