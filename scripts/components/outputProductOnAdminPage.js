function outputProductOnAdminPage(product, cartSection) {
  const { title, id } = product;

  const columnElement = document.createElement("div");
  columnElement.classList.add("col"); 

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card");

  const cardBodyContainer = document.createElement("div");
  cardBodyContainer.classList.add("card-body");

  const productHeader = document.createElement("h2");
  productHeader.append(document.createTextNode(title));

  const goToEditLink = document.createElement("a");
  goToEditLink.classList.add("btn", "btn-primary");

  goToEditLink.append(document.createTextNode("Edit product"));
  goToEditLink.setAttribute("href", `edit.html?id=${id}`);

  cardBodyContainer.append(productHeader, goToEditLink);
  cardContainer.append(cardBodyContainer);
  columnElement.append(cardContainer);
  cartSection.append(columnElement);

  return cartSection;
}
export default outputProductOnAdminPage;
