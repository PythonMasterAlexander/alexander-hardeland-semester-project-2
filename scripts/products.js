import outputCardOnPage from './components/outputCardOnPage.js';
import getProductsFromApiCall from './components/getProductsFromApiCall.js';

import { productPagePath } from './constant/constants.js';
import { url, cardContainerElement, filterInputField } from './constant/variables.js';

const getApiData = await getProductsFromApiCall(url);

function outputProductsOnPage(products) {
  const listOfProducts = products.apiData;

  //listOfProducts undefined
  //console.log(listOfProducts);
  for(let i = 0; i < listOfProducts.length; i++) {
    const products = listOfProducts[i];

    const { id, title, price } = products;
    const imageUrl = products.image.url;

    cardContainerElement.append(outputCardOnPage(title, price, "", `${productPagePath + id}`));
  }
}
outputProductsOnPage(getApiData);

//???? code here, is fucked
let productsToFilter = getApiData.apiData;
//console.log(productsToFilter);
filterInputField.addEventListener("keyup", function() {
  const filterKeyValue = this.value.trim().toLowerCase();

  const filteredProducts = productsToFilter.filter(function(data) {
    const { title } = data;
    if (title.toLowerCase().startsWith(filterKeyValue)) {
      return true;
    } 
  });
  //filteredProducts are outputing the array of objects, so its working,
  console.log(filteredProducts);

  //This is where the code gets an error, listOfProducts is undefined
  //The code is adding the product to the filterProducts list when typing in the right key, but after that the error is showing
  outputProductsOnPage(filteredProducts);
});

