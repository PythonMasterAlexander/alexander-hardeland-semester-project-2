const createHtmlElement= function(parentElement, content) {
  const divElement = document.createElement("div");
  divElement.innerText = content;

  parentElement.append(divElement);
  return parentElement;
};

export default createHtmlElement;
