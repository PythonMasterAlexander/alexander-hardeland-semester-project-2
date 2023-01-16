import outputCardOnPage from './components/outputCardOnPage.js';
const cardContainerElement = document.querySelector(".card-container");
import getProductsFromApiCall from './components/getProductsFromApiCall.js';
const url = "http://localhost:1337/products";
const getApiData = await getProductsFromApiCall(url);
const filterInputField = document.querySelector("#filter-input-field");

function outputProductsOnPage(products) {
  const listOfProducts = products.apiData;

  cardContainerElement.innerHTML = "";

  listOfProducts.forEach(function(products) {
    const { title, price, imageUrl } = products;

    return cardContainerElement.append(outputCardOnPage(title, price, "", "/"));
  });
}

let showProductIfFilterSearchMatch = outputProductsOnPage(getApiData);

console.log(showProductIfFilterSearchMatch);

outputProductsOnPage(getApiData);

filterInputField.addEventListener("keyup", function() {
  const filterKeyValue = event.target.value.trim().toLowerCase();
  const apiData = getApiData.apiData;

  const filteredProducts = apiData.filter(function(data) {
    const { title } = data;
    if (title.toLowerCase().startsWith(filterKeyValue)) {
      return true;
    } 
  });

  showProductIfFilterSearchMatch = filteredProducts; 
  outputProductsOnPage(getApiData);
});
