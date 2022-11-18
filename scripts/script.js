import getProducts from './components/getProducts.js';
import { baseUrl } from './partials/constants.js';

const productsUrl = "/products";
const url = baseUrl + productsUrl;
getProducts(url);
//This is where I want to be able to use the API result to create dynamic html, not inside the API call function in getProducts.js


//Remember the featured is set to either true or false, there are a task in the assignment associated with this

