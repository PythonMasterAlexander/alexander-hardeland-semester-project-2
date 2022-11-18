import createHtmlElement from './createHtmlElement.js';
import { indexPageHtmlContainer } from '../partials/variables.js';

const getProducts = async function(url) {
  const response = await fetch(url)
  const apiResults = await response.json();

  console.log(apiResults);

  //This code I want to be able to do somewhere else. Not here inside the API get request, if possible??
  apiResults.forEach(apiResult => {
    //Get the property on each object --> apiResult.id 

    createHtmlElement(indexPageHtmlContainer, apiResult.id);
  });
};

export default getProducts;
