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

  const checkBoxContainer = cardContainer.cloneNode(false);
  const checkBoxElement = document.createElement("input");
  checkBoxContainer.classList.add("form-check") 

  checkBoxElement.classList.add("form-check-input");
  checkBoxElement.setAttribute("type", "checkbox");

  checkBoxElement.setAttribute("id", "check-product");
  checkBoxElement.setAttribute("data-id", id);

  checkBoxElement.setAttribute("data-name", title);
  //Nb remember to set src attribute ${image_url}
  imageElement.setAttribute("src", ``);

  checkBoxContainer.append(checkBoxElement);
  groupElement.append(headingTwoElement, paragraphElement)
  cardContainer.append(imageElement, groupElement, checkBoxContainer);

  return productContainer.append(cardContainer);
}
