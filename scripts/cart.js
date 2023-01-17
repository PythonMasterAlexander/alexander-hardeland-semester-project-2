import { productKey } from './constant/constants.js';
import { getValueFromLocalStorage } from './components/localStorageComponents.js';

const productsInLocalStorage = getValueFromLocalStorage(productKey);
console.log(productsInLocalStorage);







//This page must include a 
//List of all products added to the cart with the local storage and then display on the cart page
//if cart is empty display a message

//Get the list of product to show in the cart, this list can be found in products.js 

//Output the list of product if the product has been marked
