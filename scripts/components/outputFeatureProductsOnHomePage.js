const outputFeatureProductsOnHomePage = function(productContainer, title, image_url) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("col-lg-3");

  const cardBody = document.createElement("div");
  const imgElement = document.createElement("img"); 

  const headerTwoElement = document.createElement("h2");
  const cardElement = cardBody.cloneNode(false);

  imgElement.setAttribute("src", `${image_url}`);
  imgElement.setAttribute("alt", `${title}`);

  headerTwoElement.append(document.createTextNode(title));
  cardBody.append(headerTwoElement);

  cardElement.classList.add("card", "h-100");
  cardBody.classList.add("card-body", "d-flex", "flex-column");

  cardElement.append(imgElement, cardBody);
  cardContainer.append(cardElement);

  return productContainer.append(cardContainer);
};
export default outputFeatureProductsOnHomePage;
