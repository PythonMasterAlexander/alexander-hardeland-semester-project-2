import createHtmlElement from './createHtmlElement.js';
import { indexPageHtmlContainer } from '../partials/variables.js';

const getProducts = async function(url) {
  const response = await fetch(url)
  const apiResults = await response.json();

  return apiResults;
};
export default getProducts;
