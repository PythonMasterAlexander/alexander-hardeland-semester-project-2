const getProductsFromApiCall = async function(url) {
  let apiData, outputError;

  if (!url) {
    return outputError = "Wrong URL address provided";
  } else {

    try {
      const response = await fetch(url)

      if (response.ok) {
        apiData = await response.json();
      } else {
        outputError = `Unresponsive API call. Status:  ${response.status}`;
      }
    }

    catch (error) {
      outputError = error;
    }
    return { apiData, outputError };
  }
}
export default getProductsFromApiCall;
