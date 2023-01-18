export function createCheckBox(id, name) {
  const containerElement = document.createElement("div");
  const inputElement = document.createElement("input");

  containerElement.classList.add("form-check");
  inputElement.classList.add("form-check-input");

  inputElement.setAttribute("type", "checkbox");
  inputElement.setAttribute("id", "check-product");
  inputElement.setAttribute("data-id", id);
  inputElement.setAttribute("data-name", name);

  containerElement.append(inputElement);
  return containerElement;
}

export default function outputProduct(data, productContainer) {
  const apiData = data.apiData; 
  const { id, title, description, image_url, price } = apiData;

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card");
  const imageElement = document.createElement("img");
  const groupElement = document.createElement("hgroup");

  const headingTwoElement = document.createElement("h2");
  headingTwoElement.append(document.createTextNode(title));

  const paragraphElement = document.createElement("p");
  paragraphElement.append(document.createTextNode(price));

  const checkBoxContainer = createCheckBox(id, title);
  
  //Nb remember to set src attribute ${image_url}
  imageElement.setAttribute("src", ``);

  //checkBoxContainer.append(checkBoxElement);
  groupElement.append(headingTwoElement, paragraphElement)
  cardContainer.append(imageElement, groupElement, checkBoxContainer);

  return productContainer.append(cardContainer);
}
