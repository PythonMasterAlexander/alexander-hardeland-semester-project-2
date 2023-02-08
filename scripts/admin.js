import logoutUser from './utilities/logoutUser.js';
import getProductsFromApiCall from './utilities/getProductsFromApiCall.js';
import { url } from './constant/variables.js';
import { getValueFromLocalStorage } from './components/localStorageComponents.js';
import { default as addPageMenu } from './components/adminPagesNavigationMenu.js';
import { productKey } from './constant/constants.js';

const showCartSection = document.querySelector(".show-cart-section");
addPageMenu();

const logoutButton = document.querySelector("#logout-button");
logoutUser(logoutButton);

/*
  Att this point I got stuck with little time left

let productInLocalStorage = getValueFromLocalStorage(productKey);

const productQueryString = document.location;
const productParameter = new URLSearchParams(productQueryString);

const id = productParameter.get("id");
console.log(url);
const getApiData = await getProductsFromApiCall(url + id);
*/



