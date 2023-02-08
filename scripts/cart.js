import outputProductInCart from './components/outputProductInCart.js';
import { productKey } from './constant/constants.js';
import { getValueFromLocalStorage } from './components/localStorageComponents.js';
import { cartPageContainer, cartSectionContainer, cartIsEmptyWarningContainer } from './constant/variables.js';

const summaryPriceElement = document.querySelector(".summary-price");
const productsInLocalStorage = getValueFromLocalStorage(productKey);

if (!productsInLocalStorage.length) {
  cartSectionContainer.style.display = "none";

  cartIsEmptyWarningContainer.classList.add("alert", "alert-info");
  cartIsEmptyWarningContainer.append(document.createTextNode("Your cart is empty"));

} else {
  let listOfProductPrices = [];

  for(let i = 0; i < productsInLocalStorage.length; i++) {
    listOfProductPrices.push(productsInLocalStorage[i].values.price);
  }

  let sumOfProductPrices = listOfProductPrices.reduce((a, b) => {
    return a + b;
  }); 

  outputProductInCart(productsInLocalStorage, cartPageContainer);

  summaryPriceElement.append(document.createTextNode(`$${sumOfProductPrices}`));
}
