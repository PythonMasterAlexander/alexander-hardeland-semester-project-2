import createHtmlElement from './createHtmlElement.js';

import { indexPageHtmlContainer } from '../constant/variables.js';

const showProductsOnPage = function(products) {
  const errorMessage = products.error;
  const apiDataProduct = products.apiData;

  if (errorMessage) {
    console.log(errorMessage);
    //return error variable as a warning to user on the page. Write a reusable function for this
    
  } else {
    console.log(apiDataProduct);

    return apiDataProduct.map(product => {
      createHtmlElement(indexPageHtmlContainer, product.id, "div");
    });
  }
};
export default showProductsOnPage; 
