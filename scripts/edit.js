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

const valuesOfProductsInLocalStorage = productsInLocalStorage[0].values; 
const { title, description, price, image_url } = valuesOfProductsInLocalStorage;

const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const priceInput = document.querySelector("#price");
const imageInput = document.querySelector("#upload-image");

titleInput.value = title;
priceInput.value = price;
descriptionInput.value = description; 
imageInput.value = image_url;
