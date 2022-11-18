import createHtmlElement from './createHtmlElement.js';
import { indexPageHtmlContainer } from '../partials/variables.js';

const showProductsOnPage = function(products) {
  products.forEach(product => {
    createHtmlElement(indexPageHtmlContainer, product.id);
  }); 
};
export default showProductsOnPage; 
