import getProducts from './components/getProducts.js';
import createHtmlElement from './components/createHtmlElement.js';

import { baseUrl } from './partials/variables.js';
const productsUrl = "/products";
const url = baseUrl + productsUrl;

const testParentElement = document.querySelector(".home");

getProducts(url);
createHtmlElement(testParentElement);
