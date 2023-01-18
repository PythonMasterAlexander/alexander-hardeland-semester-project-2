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

export default function outputCardOnPage(id, title, price, image, pageAddress) {
  const cardParent = document.createElement("div");
  cardParent.classList.add("card");

  const cardBody = document.createElement("hgroup");
  cardBody.classList.add("card-body");

  const titleElement = document.createElement("h2");
  titleElement.append(document.createTextNode(title));

  const priceElement = document.createElement("p");
  priceElement.append(document.createTextNode(price));

  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", `${image}`);

  const checkBoxElement = createCheckBox(id, title);

  const button = document.createElement("a");
  button.append(document.createTextNode(("Check out product")));
  button.classList.add("btn", "btn-primary", "product-button")
  button.setAttribute("href", `${pageAddress}`);

  cardBody.append(titleElement, priceElement, checkBoxElement, button);
  cardParent.append(imageElement, cardBody);
  
  return cardParent;
}
