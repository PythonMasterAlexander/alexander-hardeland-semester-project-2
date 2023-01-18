import outputFeatureProductsOnHomePage from './outputFeatureProductsOnHomePage.js';
import errorMessageToUser from '../utilities/errorMessageToUser.js';
import addErrorStyleOnProvidedContainer from '../utilities/addErrorStyleOnProvidedContainer.js';

import { errorHeading } from '../constant/constants.js';
import { cardContainerElement, errorMessageContainer, attributesOnErrorMessage } from '../constant/variables.js';

const showFeatureProductsOnHomePage = function(products) {
  const apiDataProduct = products.apiData;

  const errorFromApiCall = products.outputError;
  if (errorFromApiCall) {
    return errorMessageToUser(addErrorStyleOnProvidedContainer(errorMessageContainer), errorFromApiCall);

  } else {
    return apiDataProduct.map(product => {
      const isFeatured = product.featured;
      if (isFeatured) {
        const { title, image_url } = product;
        outputFeatureProductsOnHomePage(cardContainerElement, title, image_url);
      }
    });
  }
};
export default showFeatureProductsOnHomePage;
