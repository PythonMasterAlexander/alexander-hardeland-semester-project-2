import getProductsFromApiCall from './utilities/getProductsFromApiCall.js';
import showFeatureProductsOnHomePage from './components/showFeatureProductsOnHomePage.js';
import { url, urlHome, heroBannerImage } from './constant/variables.js';
import { ifNoHeroBannerIsProvided } from './constant/constants.js';

const waitForHeroBannerResult = await getProductsFromApiCall(urlHome);
const waitForProductsResult = getProductsFromApiCall(url);

waitForProductsResult.then(showFeatureProductsOnHomePage);
const heroBanner = waitForHeroBannerResult.apiData.image_url;

if (!heroBanner) {
  heroBannerImage.style.backgroundImage = `url(${ifNoHeroBannerIsProvided})`;

} else {
  heroBannerImage.style.backgroundImage = `url(${heroBanner})`;
}
