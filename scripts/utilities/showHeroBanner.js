function showHeroBanner(heroBannerUrl, heroBannerContainer) {
  if (!heroBannerUrl) {
    //Some default value if no hero banner url
  } else {
    console.log(heroBannerContainer.style);
    heroBannerContainer.style.backgroundImage = `url(${heroBannerUrl})`;
  }
}
export default showHeroBanner;
