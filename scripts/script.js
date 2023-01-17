import getProductsFromApiCall from './components/getProductsFromApiCall.js';
import showProductsOnPage from './components/showProductsOnPage.js';

import { indexPageHtmlContainer, url } from './constant/variables.js';

const waitForProductsResult = getProductsFromApiCall(url);
waitForProductsResult.then(showProductsOnPage);





/*
return cardContainerElement.innerHTML += `<div class="card">
                                            <img src"${products.image_url}">
                                            <hgroup class="card-body">
                                              <h2>${products.title}</h2>
                                              <p>${products.price}</p>
                                              <a href="product.html" class="btn btn-primary">to product</a>
                                            </hgroup>
                                          </div>`;
*/

