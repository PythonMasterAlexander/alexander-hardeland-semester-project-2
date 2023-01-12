import { addProductsForm } from '../constant/variables.js';

export default function submitProductToApi() {
  event.preventDefault();
  const formProperties = new FormData(addProductsForm);

  const title = formProperties.get("title");

  let price = formProperties.get("price");
  //Check if price is NaN

  const description = formProperties.get("description");
  description.trim();

  const image = formProperties.get("image");

  if ((title === 0) || (isNaN(price)) || (description === 0)) {
    //Create a warning message if any of the fields are not populated, use a return statement too
    console.log(typeof(price));
  }
  //Use the add product function
  //addProductToApi(title, price, description, image, url);
}

function addProductToApi(title, price, description, image, url) {
  const apiUrl = url;
  let apiToken;

  const dataToSendToApi = JSON.stringify({
    title: title,
    price: price,
    description: description,
    image: image
  });

  const dataHeadersForLoginRequest = {
    method: "POST",
    body: dataToSendToApi,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiToken}` 
    },
  };

  try {
  }
  catch(error) {
  }
}
