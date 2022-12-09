const errorMessageToUser = function(containerElement, errorMessage = "There was a problem loading the content") {
  if (containerElement) {
    return containerElement.append(errorMessage);

  } else {
    console.log("No container element provided");
  }
};
export default errorMessageToUser;
