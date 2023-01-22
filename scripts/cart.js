import outputProductInCart from './components/outputProductInCart.js';

import { productKey } from './constant/constants.js';
import { getValueFromLocalStorage } from './components/localStorageComponents.js';
import { cartPageContainer } from './constant/variables.js';

const productsInLocalStorage = getValueFromLocalStorage(productKey);
outputProductInCart(productsInLocalStorage, cartPageContainer);
