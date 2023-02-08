const createCartProduct = function(cartContainer, title, image, price, id) {
  const tableRowElement = document.createElement("tr");
  const titleElement = document.createElement("th");

  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", `${image}`);
  imageElement.setAttribute("alt", `${title}`);

  const linkToProducPageElement = document.createElement("a");
  linkToProducPageElement.setAttribute("href", `/product.html?=${id}`);

  const priceElement = titleElement.cloneNode(false);
  const linkContainer = titleElement.cloneNode(false);
  const imageContainer = titleElement.cloneNode(false);

  priceElement.append(document.createTextNode(`$${price}`));
  titleElement.append(document.createTextNode(title));

  linkToProducPageElement.append(document.createTextNode("Show product"));
  linkToProducPageElement.setAttribute("href", `product.html`);

  linkContainer.append(linkToProducPageElement);
  imageContainer.append(imageElement); 
  tableRowElement.append(titleElement, imageContainer, linkContainer, priceElement)

 return cartContainer.append(tableRowElement);
};

function outputProductInCart(listOfProducts, pageContainer) {
  
  listOfProducts.forEach((product) => {
    const { title, price, image_url, id } = product.values;

    createCartProduct(pageContainer, title, image_url, price, id);
  });
}
export default outputProductInCart;
