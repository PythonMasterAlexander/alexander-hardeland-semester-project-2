const createHtmlElement= function(parentElement, content, element) {
  const divElement = document.createElement(element);

  divElement.innerText = content;
  parentElement.append(divElement);

  return parentElement;
};
export default createHtmlElement;
