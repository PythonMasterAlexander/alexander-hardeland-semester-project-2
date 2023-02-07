const createCartProduct = function(cartContainer, title, image, price) {
  const tableRowElement = document.createElement("tr");
  const titleElement = document.createElement("th");
  const imageElement = document.createElement("img");
  const linkToProducPageElement = document.createElement("a");

  const priceElement = titleElement.cloneNode(false);
  const linkContainer = titleElement.cloneNode(false);
  const imageContainer = titleElement.cloneNode(false);

  priceElement.append(document.createTextNode(price));
  titleElement.append(document.createTextNode(title));

  linkContainer.append(linkToProducPageElement);
  imageContainer.append(imageElement); 
  tableRowElement.append(titleElement, imageContainer, linkContainer, priceElement)

 return cartContainer.append(tableRowElement);
};

function outputProductInCart(listOfProducts, pageContainer) {
  
  listOfProducts.forEach((product) => {
    const { title, price, image_url } = product.values;

    createCartProduct(pageContainer, title, image_url, price);
  });
}
export default outputProductInCart;
