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


