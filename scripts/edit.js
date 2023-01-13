import { default as addPageMenu } from './components/adminPagesNavigationMenu.js';

import { contentInQueryString, url, addEditForm } from './constant/variables.js';
import { idIdentifier } from './constant/constants.js';

addPageMenu();

const searchContentInQueryString = new URLSearchParams(contentInQueryString);
const getProductIdFromQueryString = searchContentInQueryString.get(idIdentifier);

const productId = url + "/" + getProductIdFromQueryString;  
console.log(productId);

(async function(){
  try {
    const response = await fetch(url);
    const returnJson = await response.json();

  } catch(error) {
    console.log(error);

  } finally {
    addEditForm.style.display = "none";
    //addEditForm.style.display = "block";
  }
})();
