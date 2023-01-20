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
    console.log("product added");
  }
  const apiData = {
    title: title,
    price: price,
    description: description,
    image_url: image
  };

  const userToken = getTokenFromStorage();
  addProductToApi(apiData, userToken, url);
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
    //Create two if statements to see if products have been create using returnJson.created_att
    //The other one checks if the returnJson returns a error. If display a error message to the user

  } catch(error) {
    //return a display error message to the user
    return error;
  }
}
