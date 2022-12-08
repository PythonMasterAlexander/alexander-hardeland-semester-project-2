import getProductsFromApiCall from './components/getProductsFromApiCall.js';
import showProductsOnPage from './components/showProductsOnPage.js';
import errorMessage from './utilities/errorMessage.js';

import { baseUrl } from './constant/constants.js';
import { indexPageHtmlContainer } from './constant/variables.js';

const productsUrl = "/product";
const url = baseUrl + productsUrl;
const waitForProductsResult = getProductsFromApiCall(url);

waitForProductsResult.then(showProductsOnPage);
errorMessage("hello");
//Remember the featured is set to either true or false, there are a task in the assignment associated with this

