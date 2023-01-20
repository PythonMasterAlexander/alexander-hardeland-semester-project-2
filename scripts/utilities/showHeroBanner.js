function showHeroBanner(heroBannerUrl, heroBannerContainer) {
  heroBannerUrl.forEach((banner) => {
    if (!banner) {
      //Some default value if no hero banner url
    } else {
      console.log(heroBannerContainer.style);
      heroBannerContainer.style.backgroundImage = `url(${banner})`;
    }
  });
}
export default showHeroBanner;
