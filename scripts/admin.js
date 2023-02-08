import outputProductOnAdminPage from './components/outputProductOnAdminPage.js';
import logoutUser from './utilities/logoutUser.js';
import getProductsFromApiCall from './utilities/getProductsFromApiCall.js';
import { url } from './constant/variables.js';
import { getValueFromLocalStorage } from './components/localStorageComponents.js';
import { default as addPageMenu } from './components/adminPagesNavigationMenu.js';
import { productKey } from './constant/constants.js';

const showCartSection = document.querySelector(".show-cart-product");
addPageMenu();

const logoutButton = document.querySelector("#logout-button");
logoutUser(logoutButton);

let productInLocalStorage = getValueFromLocalStorage(productKey);

for(let i = 0; i < productInLocalStorage.length; i++) {
  const product = productInLocalStorage[i].values;
  outputProductOnAdminPage(product, showCartSection);
  //This is where the product in localStorage should be deleted if the user has deleted it from the edit page
}
