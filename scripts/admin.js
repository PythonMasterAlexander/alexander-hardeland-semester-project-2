import  deleteProduct from './components/deleteProduct.js';
import  submitProductToApi from './components/submitProductToApi.js';

import { default as addAdminPageMenu } from './components/adminPagesNavigationMenu.js';
import { addProductsForm } from './constant/variables.js';

addAdminPageMenu();
addProductsForm.addEventListener("submit", submitProductToApi);
