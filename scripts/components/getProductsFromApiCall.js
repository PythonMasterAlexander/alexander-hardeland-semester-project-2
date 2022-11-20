import createHtmlElement from './createHtmlElement.js';
import { indexPageHtmlContainer } from '../constant/variables.js';

const getProductsFromApiCall = async function(url) {
  let apiData, error;

  if (!url){
    return error = "Wrong URL address provided";
  }
  try {
    const response = await fetch(url)

    if (response.ok) {
      apiData = await response.json();

    } else {
        error = `Unresponsive API call. Status:  ${response.status}`;
    }
  }
  catch (err) {
    error = err;
  }
  return { apiData, error };
};
export default getProductsFromApiCall;
