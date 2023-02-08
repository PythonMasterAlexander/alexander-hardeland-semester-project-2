import logoutUser from './utilities/logoutUser.js';
import getProductsFromApiCall from './utilities/getProductsFromApiCall.js';

import { url } from './constant/variables.js';
import { getValueFromLocalStorage } from './components/localStorageComponents.js';
import { default as addPageMenu } from './components/adminPagesNavigationMenu.js';
import { productKey } from './constant/constants.js';

const showCartSection = document.querySelector(".show-cart-product");
addPageMenu();

const logoutButton = document.querySelector("#logout-button");
logoutUser(logoutButton);

let productInLocalStorage = getValueFromLocalStorage(productKey);

for(let i = 0; i < productInLocalStorage.length; i++) {
  const product = productInLocalStorage[i].values;
  const { title, id } = product;

  const columnElement = document.createElement("div");
  columnElement.classList.add("col"); 

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card");

  const cardBodyContainer = document.createElement("div");
  cardBodyContainer.classList.add("card-body");

  const productHeader = document.createElement("h2");
  productHeader.append(document.createTextNode(title));

  const goToEditLink = document.createElement("a");
  goToEditLink.classList.add("btn", "btn-primary");
  goToEditLink.append(document.createTextNode("Edit product"));
  goToEditLink.setAttribute("href", `edit.html?id=${id}`);

  cardBodyContainer.append(productHeader, goToEditLink);
  cardContainer.append(cardBodyContainer);
  columnElement.append(cardContainer);
  showCartSection.append(columnElement);
}
