import outputProductInCart from './components/outputProductInCart.js';

import { productKey } from './constant/constants.js';
import { getValueFromLocalStorage } from './components/localStorageComponents.js';
import { cartPageContainer, cartSectionContainer, cartIsEmptyWarningContainer } from './constant/variables.js';

const productsInLocalStorage = getValueFromLocalStorage(productKey);
if (!productsInLocalStorage.length) {
  cartSectionContainer.style.display = "none";

  cartIsEmptyWarningContainer.classList.add("alert", "alert-info");
  cartIsEmptyWarningContainer.append(document.createTextNode("Your cart is empty"));

} else {
  outputProductInCart(productsInLocalStorage, cartPageContainer);
}
