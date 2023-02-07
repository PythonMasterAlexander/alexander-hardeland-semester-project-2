import { getValueFromLocalStorage } from './components/localStorageComponents.js';
import { default as addPageMenu } from './components/adminPagesNavigationMenu.js';

import { productKey } from './constant/constants.js';
const showCartSection = document.querySelector(".show-cart-section");

addPageMenu();
//let productInLocalStorage = getValueFromLocalStorage(productKey);



