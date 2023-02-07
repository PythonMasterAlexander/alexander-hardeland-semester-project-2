import showProductsOnProductsPage from './components/showProductsOnProductsPage.js';
import getProductsFromApiCall from './utilities/getProductsFromApiCall.js';

import { productPagePath } from './constant/constants.js';
import { url, productsPageCardContainer, filterInputField } from './constant/variables.js';

const getApiData = await getProductsFromApiCall(url);
const productsToFilter = getApiData.apiData;
let showProducts = getApiData.apiData;

function outputProducts() {
  productsPageCardContainer.replaceChildren();

  showProducts.forEach((product) => {
    const { id, title, price, image_url } = product;
    productsPageCardContainer.append(showProductsOnProductsPage(title, price, image_url, `${productPagePath + id}`));
  });
}
outputProducts();

filterInputField.addEventListener("keyup", function() {
  const filterKeyValue = this.value.trim().toLowerCase();

  const filteredProducts = productsToFilter.filter(function(product) {
    const { title } = product;
    if (title.toLowerCase().startsWith(filterKeyValue)) {
      return true;
    } 
  });
  showProducts = filteredProducts; 
  outputProducts();
});
