import getProducts from './components/getProducts.js';
import showProductsOnPage from './components/showProductsOnPage.js';

import { baseUrl } from './partials/constants.js';
import { indexPageHtmlContainer } from './partials/variables.js';

const productsUrl = "/products";
const url = baseUrl + productsUrl;
const test = getProducts(url);

const waitForProductsResult = getProducts(url);
waitForProductsResult.then(showProductsOnPage);
//Remember the featured is set to either true or false, there are a task in the assignment associated with this

