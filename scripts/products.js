import outputCardOnPage from './components/outputCardOnPage.js';
import getProductsFromApiCall from './components/getProductsFromApiCall.js';
import { productPagePath } from './constant/constants.js';
import { url } from './constant/variables.js';
import { getValueFromLocalStorage, saveValueInLocalStorage } from './components/localStorageComponents.js';

const productKey = "products";
const cardContainerElement = document.querySelector(".card-container");
const filterInputField = document.querySelector("#filter-input-field");

const getApiData = await getProductsFromApiCall(url);
let productsToFilter = getApiData.apiData;

function outputProductsOnPage(products) {
  const listOfProducts = products.apiData;
  //cardContainerElement.innerHTML = "";

  //Something is happening here, the listOfProducts is undefined when generating a new list in the event listener 
  listOfProducts.forEach(function(products) {
    const { id, title, price, imageUrl } = products;
    return cardContainerElement.append(outputCardOnPage(id, title, price, "", productPagePath));
  });
}

outputProductsOnPage(getApiData);

const checkBoxes = document.querySelectorAll("#check-product");
checkBoxes.forEach((checkBox) => {
  checkBox.addEventListener("click", function() {
    const isBoxChecked = this.checked
    const dataId = this.dataset.id;
    const dataName = this.dataset.name;

    const currentProductInStorage = getValueFromLocalStorage(productKey);

    const ifProductExist = currentProductInStorage.find(product => {
      return product.id === dataId;
    })

    if (!ifProductExist) {
      const product = { id: dataId, name: dataName };
      currentProductInStorage.push(product);

      saveValueInLocalStorage(productKey, currentProductInStorage);

    } else {
      const newProductInStorage = currentProductInStorage.filter(product => product.id !== dataId);
      saveValueInLocalStorage(productKey, newProductInStorage);
    }
  });
});

filterInputField.addEventListener("keyup", function() {
  const filterKeyValue = this.value.trim().toLowerCase();
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
