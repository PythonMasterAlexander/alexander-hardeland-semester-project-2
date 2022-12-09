const errorMessageToUser = function(containerElement, errorMessage = "There was a problem loading the content") {
  if (containerElement) {
    const textMessage = document.createTextNode(errorMessage);

    return containerElement.append(textMessage);

  } else {
    console.log("No container element provided");
  }
};
export default errorMessageToUser;
