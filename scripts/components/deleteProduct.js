import  getProductsFromApiCall  from '../utilities/getProductsFromApiCall.js';
import { deleteButton } from '../constant/variables.js';

export default function deleteProduct() {
  deleteButton.addEventListener("click", async function() {
    console.log(event.target);
    //At this time I am stuck with little time left
    const deleteRequest = await getProductsFromApiCall("http://localhost:1337/products/");
    console.log(deleteRequest.apiData[0].id);
  });
}
