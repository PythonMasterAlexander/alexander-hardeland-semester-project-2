import outputProductOnAdminPage from './components/outputProductOnAdminPage.js';
import logoutUser from './utilities/logoutUser.js';
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
}
