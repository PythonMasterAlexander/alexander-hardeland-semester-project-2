import outputCardOnPage from './components/outputCardOnPage.js';
import getProductsFromApiCall from './components/getProductsFromApiCall.js';

import { productPagePath } from './constant/constants.js';
import { url, cardContainerElement, filterInputField } from './constant/variables.js';

const getApiData = await getProductsFromApiCall(url);
let productsToFilter = getApiData.apiData;

function outputProductsOnPage(products) {
  const listOfProducts = products.apiData;
  //cardContainerElement.innerHTML = "";

  //Something is happening here, the listOfProducts is undefined when generating a new list in the event listener 
  listOfProducts.forEach(function(products) {
    const { id, title, price, imageUrl } = products;
    return cardContainerElement.append(outputCardOnPage(title, price, "", `${productPagePath + id}`));
  });
}
outputProductsOnPage(getApiData);


filterInputField.addEventListener("keyup", function() {
  const filterKeyValue = this.value.trim().toLowerCase();
  //const apiData = getApiData.apiData;

  const filteredProducts = productsToFilter.filter(function(data) {
    const { title } = data;
    if (title.toLowerCase().startsWith(filterKeyValue)) {
      return true;
    } 
  });

  //This is where the code don't work, the error is listOfProducts is undefinded
  console.log(filteredProducts);
  console.log(productsToFilter);
  productsToFilter = filteredProducts;
  outputProductsOnPage(productsToFilter);
});
