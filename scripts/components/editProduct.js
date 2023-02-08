import { editProductsButton } from '../constant/variables.js'

function editProduct(id, validationToken, dataToSendToApi) {
  editProductsButton.addEventListener("click", async function() {
    const url = `http://localhost:1337/products/${id}`;
    const { title, description, price, image_url } = dataToSendToApi;
    const dataToPassApiRequest = JSON.stringify({id: id, title: title, description: description, price: price, image_url: image_url });

    //This is where I could not finish the api call to edit the product
    const optionForDeleteRequest = {
      method: "PUT",
      body: dataToPassApiRequest,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${validationToken}` 
      },
    }

    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();
    }
    catch(error) {
      console.log(error);
    }
  }); 
}
export default editProduct;
