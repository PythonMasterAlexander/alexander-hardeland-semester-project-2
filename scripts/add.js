import  submitProductToApi from './components/submitProductToApi.js';
import logoutUser from './utilities/logoutUser.js';

import { addProductsForm } from './constant/variables.js';
import { default as addPageMenu } from './components/adminPagesNavigationMenu.js';

addPageMenu();
const logoutButton = document.querySelector("#logout-button");
logoutUser(logoutButton);
addProductsForm.addEventListener("submit", submitProductToApi);
