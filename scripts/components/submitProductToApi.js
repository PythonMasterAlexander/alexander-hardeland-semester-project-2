import { baseUrl, productsUrl } from '../constant/constants.js';
import { addProductsForm } from '../constant/variables.js';

const url = baseUrl + productsUrl;

export default function submitProductToApi() {
  event.preventDefault();
  const formProperties = new FormData(addProductsForm);

  const title = formProperties.get("title");

  let price = formProperties.get("price");
  //Check if price is NaN

  const description = formProperties.get("description");

  const image = formProperties.get("image");

  if ((title <= 0) || (isNaN(price)) || (description <= 0)) {
    //Create a warning message if any of the fields are not populated, use a return statement too
    console.log("not working" + isNaN(price));
  } else {
    console.log("working" + isNaN(price));
  }


  //Use the add product function
  //addProductToApi(title, price, description, image, url);
}

async function addProductToApi(title, price, description, image, url) {
  const apiUrl = url;
  let apiToken;
  let outputError;
  let apiData;

  const dataToSendToApi = JSON.stringify(
    {
      title: title,
      price: price,
      description: description,
      image: image
    }
  );

  const dataHeadersForLoginRequest = {
    method: "POST",
    body: dataToSendToApi,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiToken}` 
    },
  };
  
  if (!apiUrl) {
    return outputError = "Wrong api address provided";
  } else {

    try {
      const response = await fetch(apiUrl, dataToSendToApi);
      if (response.ok) {
        apiData = await response.json();

      } else {
        outputError = `Unresponsive API call: Status: ${response.status}`;
      }
    }
    catch(error) {
      outputError = error;
    }
    return { outputError, apiData };
  }
}







