//Create html to output to user on page with fields to edit each product
/*Fields to add 
  -> the user must be able to toggle feature image on or of
  -> title 
  -> img field to edit 
  -> price
  -> description
*/
function addProductEditFields(text) {
  const divContainer = document.createElement("div");
  const titleOfElement = document.createElement("label");
  const inputFieldForTitle = document.createElement("input");

  titleOfElement.append(document.createTextNode(text));

  divContainer.append(titleOfElement, inputFieldForTitle); 
  return divContainer;
}

function createEditFields(products) {
  const { title, description, price, image_url, featured } = products;

  const titleFieldContainer = addProductEditFields(title);
  const descriptionContainer = addProductEditFields(description);
  const priceContainer = addProductEditFields(price);
}


export default function outputProductsEditFieldsOnEditPage(products, formContainer) {
  return formContainer;
}


