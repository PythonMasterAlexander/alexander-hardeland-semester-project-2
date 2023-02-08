import { addProductTextToCart } from '../constant/constants.js';

export function createCheckBox(id, name) {
  const containerElement = document.createElement("div");
  const inputElement = document.createElement("input");
  const spanElement = document.createElement("span");
  spanElement.append(document.createTextNode(addProductTextToCart));

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
  const productDescriptionElement = document.createElement("p");

  const groupElement = document.createElement("hgroup");
  const headingTwoElement = document.createElement("h2");

  const spanElement = document.createElement("span");
  spanElement.append(document.createTextNode(`Price $${price}`));

  headingTwoElement.append(document.createTextNode(title));
  productDescriptionElement.append(document.createTextNode(description));

  const checkBoxContainer = createCheckBox(id, title);
  imageElement.setAttribute("src", `${image_url}`);

  groupElement.append(headingTwoElement, spanElement, productDescriptionElement);
  cardContainer.append(imageElement, groupElement, checkBoxContainer);

  return productContainer.append(cardContainer);
}
