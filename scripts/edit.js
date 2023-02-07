import deleteProduct from './components/deleteProduct.js';
import  getProductsFromApiCall  from './utilities/getProductsFromApiCall.js';

import  outputProduct from './components/outputProduct.js';
import outputProductsEditFieldsOnEditPage from './components/showEditProductFieldsOnEditPage.js';

import logoutUser from './utilities/logoutUser.js';
import { default as addPageMenu } from './components/adminPagesNavigationMenu.js';

import { getValueFromLocalStorage } from './components/localStorageComponents.js';
import { contentInQueryString, url, addEditForm, editProductsContainer, editProductsButton } from './constant/variables.js';
console.log(editProductsButton);

import { idIdentifier, productKey } from './constant/constants.js';

addPageMenu();
deleteProduct();

const logoutButton = document.querySelector("#logout-button");
logoutUser(logoutButton);

const productsInLocalStorage = getValueFromLocalStorage(productKey);
if (localStorage.getItem("products") === null) {
  addEditForm.style.display = "none";

  editProductsContainer.classList.add("alert-info", "alert");
  editProductsContainer.append(document.createTextNode("No products in the cart"));

} else {
  const valuesOfProductsInLocalStorage = productsInLocalStorage[0].values; 

  const { title, description, price, image_url } = valuesOfProductsInLocalStorage;
  const titleInput = document.querySelector("#title");
  const descriptionInput = document.querySelector("#description");
  const priceInput = document.querySelector("#price");
  const imageInput = document.querySelector("#upload-image");

  titleInput.value = title;
  priceInput.value = price;
  descriptionInput.value = description; 
  imageInput.value = image_url;
  //At this point I am stuck with little time left for my delivery
}
