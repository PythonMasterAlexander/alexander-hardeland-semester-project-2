const createHtmlElement= function(parentElement, content, element) {
  const divElement = document.createElement(element);
  
  const { title, price } = content;
  console.log(content.image_url);
  //const imgElement = document.createElement("img");
  //imgElement.setAttribute("src", `${content.image_url}`);
  //imgElement.setAttribute("alt", "....");

  //divElement.innerText = content;
  //parentElement.append(imgElement);

  //return parentElement;
};
export default createHtmlElement;
