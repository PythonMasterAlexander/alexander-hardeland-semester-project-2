export default function outputCardOnPage(title, price, image, pageAddress) {
  const cardParent = document.createElement("div");
  cardParent.setAttribute("class", "card");

  const cardBody = document.createElement("hgroup");
  cardBody.setAttribute("class", "card-body");

  const titleElement = document.createElement("h2");
  titleElement.append(document.createTextNode(title));

  const priceElement = document.createElement("p");
  priceElement.append(document.createTextNode(price));

  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", `${image}`);

  const button = document.createElement("a");
  button.append(document.createTextNode(("Check out product")));
  button.setAttribute("class", "btn btn-primary");
  button.setAttribute("href", `${pageAddress}`);

  cardBody.append(titleElement, priceElement, button);
  cardParent.append(imageElement, cardBody);
  
  return cardParent;
}
