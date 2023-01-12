import  deleteProduct from './components/deleteProduct.js';
import  submitProductToApi from './components/submitProductToApi.js';

import { default as addAdminPageMenu } from './components/adminPagesNavigationMenu.js';
import { addProductsForm } from './constant/variables.js';

addAdminPageMenu();
addProductsForm.addEventListener("submit", submitProductToApi);

/*
{
  "title": "test",
  "description": "test description",
  "price": 5,
  "image": "something.jgp",
  "image_url": "chrome://branding/content/firefox-wordmark.svg",
  "featured": false
}
*/
