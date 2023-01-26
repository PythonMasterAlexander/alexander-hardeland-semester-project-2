import outputProduct from './components/outputProduct.js';
import getProductsFromApiCall from './utilities/getProductsFromApiCall.js';

import { productKey } from './constant/constants.js';
import { url, cardContainerElement } from './constant/variables.js';
import { getValueFromLocalStorage, saveValueInLocalStorage } from './components/localStorageComponents.js';

const productQueryString = document.location.search;
const productParameter = new URLSearchParams(productQueryString);
const id = productParameter.get("id");
const getApiData = await getProductsFromApiCall(url + id);

outputProduct(getApiData, cardContainerElement);
const apiData = getApiData.apiData;

const checkBox = document.querySelector("#check-product");
checkBox.addEventListener("click", function() {
  const isBoxChecked = this.checked
  const dataId = this.dataset.id;
  const dataName = this.dataset.name;

  const currentProductInStorage = getValueFromLocalStorage(productKey);

  const ifProductExist = currentProductInStorage.find(product => {
    return product.id === dataId;
  })

  if (!ifProductExist) {
    const product = { id: dataId, name: dataName, values: apiData };
    currentProductInStorage.push(product);

    saveValueInLocalStorage(productKey, currentProductInStorage);

  } else {
    const newProductInStorage = currentProductInStorage.filter(product => product.id !== dataId);
    saveValueInLocalStorage(productKey, newProductInStorage);
  }
});
