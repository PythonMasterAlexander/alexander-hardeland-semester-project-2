import getProductsFromApiCall from '../utilities/getProductsFromApiCall.js';
import { url } from '../constant/variables.js';

export default await function outputProductOnEditPage(getApiData) {
  const titleInput = document.querySelector("#title");
  const descriptionInput = document.querySelector("#description");

  const priceInput = document.querySelector("#price");
  const imageInput = document.querySelector("#upload-image");

  const  productData = getApiData.apiData; 
  if (!productData) {
    titleInput.value = "";
    priceInput.value = "";
    descriptionInput.value = ""; 
    imageInput.value = "";
    

  } else {
    const { title, description, price, image_url } = productData;

    titleInput.value = title;
    priceInput.value = price;
    descriptionInput.value = description; 
    imageInput.value = image_url;

    return { titleInput, priceInput, descriptionInput, imageInput };
  }
}
