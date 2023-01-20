import getProductsFromApiCall from './utilities/getProductsFromApiCall.js';
import showFeatureProductsOnHomePage from './components/showFeatureProductsOnHomePage.js';
import { url, urlHome, heroBannerContainer } from './constant/variables.js';

const waitForProductsResult = getProductsFromApiCall(url);
waitForProductsResult.then(showFeatureProductsOnHomePage);

const waitForHeroBannerResult = await getProductsFromApiCall(urlHome);
const heroBannerUrlProvided = waitForHeroBannerResult.apiData.hero_banner.url;

if (!heroBannerUrlProvided) {
  //Some default value if no hero banner url
} else {

  heroBannerContainer.style.background ="red"
}




