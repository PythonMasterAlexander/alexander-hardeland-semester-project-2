import outputCardOnPage from './components/outputCardOnPage.js';
const cardContainerElement = document.querySelector(".card-container");
import getProductsFromApiCall from './components/getProductsFromApiCall.js';
const url = "http://localhost:1337/products";
const getApiData = getProductsFromApiCall(url);
const filterInputField = document.querySelector("#filter-input-field");

function outputProductsOnPage(products) {
  const listOfProducts = products.apiData;

  listOfProducts.forEach(function(products) {
    const { title, price } = products;
    cardContainerElement.append(outputCardOnPage(title, price, "", "/"));
  });
}

getApiData.then(outputProductsOnPage);
