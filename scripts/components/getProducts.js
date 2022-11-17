//According to MDN, a IIEF function is best used when you don't need to reuse the function
const getProducts = async function(url) {
  const response = await fetch(url)
  const jsonResponse = await response.json();

  console.log(jsonResponse);
};

export default getProducts;
