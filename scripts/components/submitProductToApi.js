import { addProductsForm, url } from '../constant/variables.js';
import { getTokenFromStorage } from './localStorageComponents.js';

export default function submitProductToApi() {
  event.preventDefault();

  const formProperties = new FormData(addProductsForm);

  const title = formProperties.get("title");
  let price = formProperties.get("price");

  const description = formProperties.get("description");
  const image = formProperties.get("image");

  if ((title <= 0) || (isNaN(price)) || (description <= 0)) {
    //Create a warning message if any of the fields are not populated, use a return statement too
  } else {
    //Create a message to user that the product was added
  }
  let apiData = {
    title: title,
    price: price,
    description: description,
    image_url: image
  };

  const userToken = getTokenFromStorage();
  addProductToApi(apiData, userToken, url);

  const titleInput = document.querySelector("#title");
  titleInput.value = "";

  const descriptionInput = document.querySelector("#description");
  descriptionInput.value = "";

  const priceInput = document.querySelector("#price");
  priceInput.value = "";

  const imageInput = document.querySelector("#upload-image");
  imageInput.value = "";
}

async function addProductToApi(dataToSendToApi, userToken, url) {
  let outputError;

  const dataHeadersForLoginRequest = {
    method: "POST",
    body: JSON.stringify(dataToSendToApi),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}` 
    }
  };
  
  try {
    const response = await fetch(url, dataHeadersForLoginRequest);
    const returnJson = await response.json();

  } catch(error) {
    return error;
  }
}
