const outputFeatureProductsOnHomePage = function(productContainer, title, image_url) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("col");

  const cardBody = document.createElement("div");
  const imgElement = document.createElement("img"); 

  const headerTwoElement = document.createElement("h2");
  const cardElement = cardBody.cloneNode(false);

  imgElement.setAttribute("src", `${image_url}`);
  imgElement.setAttribute("alt", `${title}`);

  headerTwoElement.append(document.createTextNode(title));
  cardBody.append(headerTwoElement);

  cardElement.classList.add("card");
  cardBody.classList.add("card-body");
  cardElement.append(imgElement, cardBody);
  cardContainer.append(cardElement);

  return productContainer.append(cardContainer);
};
export default outputFeatureProductsOnHomePage;
