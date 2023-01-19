import outputProductInCart from './components/outputProductInCart.js';

import { productKey } from './constant/constants.js';
import { getValueFromLocalStorage } from './components/localStorageComponents.js';
import { cartPageContainer } from './constant/variables.js';

const productsInLocalStorage = getValueFromLocalStorage(productKey);
outputProductInCart(productsInLocalStorage, cartPageContainer);







//To go back to product page and the same product, check the query string, if its the same go back to product








/*
Cart/Basket page
The cart/basket page must display a list of all products added to the cart. Load the items that have been added to local 
storage and display them on the page. If the cart is empty display a message indicating this.
Each product in the cart must display:
title
price
a link to the product view page
image
After the list of products, display the total price of all the products in the cart.
*/
