export default function showProductsOnProductsPage(title, price, image, pageAddress) {
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

  const button = document.createElement("a");
  button.append(document.createTextNode(("Check out product")));

  button.classList.add("btn", "btn-primary", "product-button")
  button.setAttribute("href", `${pageAddress}`);

  cardBody.append(titleElement, priceElement, button);
  cardParent.append(imageElement, cardBody);
  
  return cardParent;
}

