import getProductsFromApiCall from './utilities/getProductsFromApiCall.js';
import showFeatureProductsOnHomePage from './components/showFeatureProductsOnHomePage.js';
import { url, urlHome, heroBannerContainer } from './constant/variables.js';
import { ifNoHeroBannerIsProvided } from './constant/constants.js';

const waitForHeroBannerResult = await getProductsFromApiCall(urlHome);
const waitForProductsResult = getProductsFromApiCall(url);

waitForProductsResult.then(showFeatureProductsOnHomePage);

const heroBanner = waitForHeroBannerResult.apiData.image_url;

if (!heroBanner) {
  heroBannerContainer.style.backgroundImage = `url(${ifNoHeroBannerIsProvided})`;
} else {
  heroBannerContainer.style.backgroundImage = `url(${heroBanner})`;
  //Style in scss
}




