import editProduct from './components/editProduct.js';
import deleteProduct from './components/deleteProduct.js';
import outputProduct from './components/outputProduct.js';
import outputProductOnEditPage from './components/outputProductOnEditPage.js';
import getProductsFromApiCall from './utilities/getProductsFromApiCall.js';
import logoutUser from './utilities/logoutUser.js';
import { default as addPageMenu } from './components/adminPagesNavigationMenu.js';
import { getValueFromLocalStorage } from './components/localStorageComponents.js';
import {  url, addEditForm, editProductsContainer } from './constant/variables.js';
import { productKey, tokenKey } from './constant/constants.js';

addPageMenu();

const logoutButton = document.querySelector("#logout-button");
logoutUser(logoutButton);

const productsInLocalStorage = getValueFromLocalStorage(productKey);
if (localStorage.getItem(productKey) === null) {
  addEditForm.style.display = "none";

  editProductsContainer.classList.add("alert-info", "alert");
  editProductsContainer.append(document.createTextNode("No products in the cart"));

} else {
  const productQueryString = document.location.search;
  const productParameter = new URLSearchParams(productQueryString);

  const id = productParameter.get("id");
  const getApiData = await getProductsFromApiCall(url + id);
  const loginValidationToken = getValueFromLocalStorage(tokenKey);

  outputProductOnEditPage(getApiData);
  await deleteProduct(id, loginValidationToken, productKey);
  await editProduct(id, loginValidationToken, getApiData.apiData);
}
