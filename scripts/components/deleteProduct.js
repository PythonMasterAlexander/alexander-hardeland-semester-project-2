import { deleteButton } from '../constant/variables.js';

export default function deleteProduct(id, validationToken, productKey) {
  deleteButton.addEventListener("click", async function() {
    event.stopPropagation();
    const deleteProduct = confirm("Are you sure you want to delete the product");
    const url = `http://localhost:1337/products/${id}`;

    const optionForDeleteRequest = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${validationToken}`,
      },
    }

    try {
      const response = await fetch(url, optionForDeleteRequest);
      const jsonResponse = await response.json();
    }
    catch(error) {
      console.log(error);
    }

    const titleInput = document.querySelector("#title");
    const descriptionInput = document.querySelector("#description");

    const priceInput = document.querySelector("#price");
    const imageInput = document.querySelector("#upload-image");

    titleInput.value = "";
    priceInput.value = "";
    descriptionInput.value = ""; 
    imageInput.value = "";

    localStorage.removeItem(productKey);
  });
}
