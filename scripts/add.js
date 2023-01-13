import  submitProductToApi from './components/submitProductToApi.js';

import { addProductsForm } from './constant/variables.js';
import { default as addPageMenu } from './components/adminPagesNavigationMenu.js';

addPageMenu();
addProductsForm.addEventListener("submit", submitProductToApi);
