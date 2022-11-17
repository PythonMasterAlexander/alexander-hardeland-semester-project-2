const createHtmlElement= function(parentElement) {
  const divElement = document.createElement("div");

  parentElement.append(divElement);
  return parentElement;
};

export default createHtmlElement;
