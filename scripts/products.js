import outputCardOnPage from './components/outputCardOnPage.js';
const cardContainerElement = document.querySelector(".card-container");
import getProductsFromApiCall from './components/getProductsFromApiCall.js';
const url = "http://localhost:1337/products";
const filterInputField = document.querySelector("#filter-input-field");

const getApiData = await getProductsFromApiCall(url);
let productsToFilter = getApiData.apiData;


function outputProductsOnPage(products) {
  const listOfProducts = products.apiData;
  //cardContainerElement.innerHTML = "";

  //Something is happening here 
  listOfProducts.forEach(function(products) {
    const { title, price, imageUrl } = products;
    return cardContainerElement.append(outputCardOnPage(title, price, "", "/"));
  });
}

outputProductsOnPage(getApiData);

filterInputField.addEventListener("keyup", function() {
  const filterKeyValue = event.target.value.trim().toLowerCase();
  //const apiData = getApiData.apiData;

  const filteredProducts = productsToFilter.filter(function(data) {
    const { title } = data;
    if (title.toLowerCase().startsWith(filterKeyValue)) {
      return true;
    } 
  });

  console.log(filteredProducts);
  console.log(productsToFilter);
  productsToFilter = filteredProducts;
  //This is where the code don't work, the error is listOfProducts is undefinded
  outputProductsOnPage(productsToFilter);
});
