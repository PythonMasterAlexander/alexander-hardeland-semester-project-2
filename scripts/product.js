import { productKey } from './constant/constants.js';
import { getValueFromLocalStorage } from './components/localStorageComponents.js';










//This is the add to cart code
const productsInLocalStorage = getValueFromLocalStorage(productKey);
console.log(productsInLocalStorage);
const checkBoxes = document.querySelectorAll("#check-product");
checkBoxes.forEach((checkBox) => {
  checkBox.addEventListener("click", function() {
    const isBoxChecked = this.checked
    const dataId = this.dataset.id;
    const dataName = this.dataset.name;

    const currentProductInStorage = getValueFromLocalStorage(productKey);

    const ifProductExist = currentProductInStorage.find(product => {
      return product.id === dataId;
    })

    if (!ifProductExist) {
      const product = { id: dataId, name: dataName };
      currentProductInStorage.push(product);

      saveValueInLocalStorage(productKey, currentProductInStorage);

    } else {
      const newProductInStorage = currentProductInStorage.filter(product => product.id !== dataId);
      saveValueInLocalStorage(productKey, newProductInStorage);
    }
  });
});
//From this page I must be able to
//show title description image price and a add to cart button
//When clicking add to cart button, we add the product to the cart page


