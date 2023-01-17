import { default as addPageMenu } from './components/adminPagesNavigationMenu.js';

import { contentInQueryString, url, addEditForm } from './constant/variables.js';
import { idIdentifier } from './constant/constants.js';

addPageMenu();

const searchContentInQueryString = new URLSearchParams(contentInQueryString);
const getProductIdFromQueryString = searchContentInQueryString.get(idIdentifier);

//const productId = url + "/" + getProductIdFromQueryString;  

//To to this we need to get the products that are in the cart page
//Show the products that are in the cart page on the admin page. 
//When user go to edit page, the user must be able to edit the products here
//Get product that is in the api, then load the product into edit form


(async function(){
  try {
    const response = await fetch(url);
    const returnJson = await response.json();
    console.log(returnJson);

  } catch(error) {
    console.log(error);

  } finally {
    addEditForm.style.display = "none";
    //addEditForm.style.display = "block";
    //addEditForm.style.display = "none";
  }
})();
