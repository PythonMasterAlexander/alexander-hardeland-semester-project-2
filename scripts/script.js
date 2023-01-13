import getProductsFromApiCall from './components/getProductsFromApiCall.js';
import showProductsOnPage from './components/showProductsOnPage.js';

import { indexPageHtmlContainer, url } from './constant/variables.js';

const waitForProductsResult = getProductsFromApiCall(url);
waitForProductsResult.then(showProductsOnPage);
//Remember the featured is set to either true or false, there are a task in the assignment associated with this

