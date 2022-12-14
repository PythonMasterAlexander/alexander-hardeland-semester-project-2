import getProductsFromApiCall from './components/getProductsFromApiCall.js';
import showProductsOnPage from './components/showProductsOnPage.js';

import { baseUrl, productsUrl } from './constant/constants.js';
import { indexPageHtmlContainer } from './constant/variables.js';

const url = baseUrl + productsUrl;
const waitForProductsResult = getProductsFromApiCall(url);

waitForProductsResult.then(showProductsOnPage);
//Remember the featured is set to either true or false, there are a task in the assignment associated with this

