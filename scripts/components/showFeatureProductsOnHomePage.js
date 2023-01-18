import outputFeatureProductsOnHomePage from './outputFeatureProductsOnHomePage.js';
import errorMessageToUser from '../utilities/errorMessageToUser.js';
import addErrorStyleOnProvidedContainer from '../utilities/addErrorStyleOnProvidedContainer.js';

import { errorHeading, divElement } from '../constant/constants.js';
import { indexPageHtmlContainer, errorMessageContainer, attributesOnErrorMessage } from '../constant/variables.js';

const showFeatureProductsOnHomePage = function(products) {
  const apiDataProduct = products.apiData;
  const errorFromApiCall = products.outputError;

  if (errorFromApiCall) {
    return errorMessageToUser(addErrorStyleOnProvidedContainer(errorMessageContainer), errorFromApiCall);

  } else {
    return apiDataProduct.map(product => {
      outputFeatureProductsOnHomePage(indexPageHtmlContainer, product.id, divElement);
    });
  }
};
export default showFeatureProductsOnHomePage;
