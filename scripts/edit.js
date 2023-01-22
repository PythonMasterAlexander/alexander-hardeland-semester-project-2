import { default as addPageMenu } from './components/adminPagesNavigationMenu.js';
import { getValueFromLocalStorage } from './components/localStorageComponents.js';
import  getProductsFromApiCall  from './utilities/getProductsFromApiCall.js';
import  outputProduct from './components/outputProduct.js';
import outputProductsEditFieldsOnEditPage from './components/showEditProductFieldsOnEditPage.js';


import { contentInQueryString, url, addEditForm, editProductsContainer } from './constant/variables.js';
import { idIdentifier, productKey } from './constant/constants.js';

addPageMenu();

//To to this we need to get the products that are in the cart page
const productsInLocalStorage = getValueFromLocalStorage(productKey);
//const valueOfProductInLocalStorage = productsInLocalStorage.values; 

const valuesOfProductsInLocalStorage = productsInLocalStorage[0].values; 
outputProductsEditFieldsOnEditPage(valuesOfProductsInLocalStorage, editProductsContainer); 
//Show the products that are in the cart page on the admin page. 
//When user go to edit page, the user must be able to edit the products here
//Get product that is in the api, then load the product into edit form


(async function(){
  try {
    const response = await fetch(url);
    const returnJson = await response.json();

  } catch(error) {

  } finally {
    //addEditForm.style.display = "none";
    //addEditForm.style.display = "block";
    //addEditForm.style.display = "none";
  }
})();
