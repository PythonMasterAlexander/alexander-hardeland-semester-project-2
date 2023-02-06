import { baseUrl, productsUrl, homeUrl } from './constants.js';

//export const homePageProductContainer = document.querySelector(".home-page-products-container");

export const containerForErrorMessage = document.querySelector(".container-for-error-message");

export const showErrorToUserContainer = document.querySelector(".show-error-to-user");
export const errorMessageContainer = document.querySelector(".container-error-message");

export const deleteButton = document.querySelector("#delete-button");
export const addProductsForm = document.querySelector("#add-products-form");

export const dynamicMenuContainer = document.querySelector(".dynamic-header-container");
export const contentInQueryString = document.location.search;

export const url = baseUrl + productsUrl;
export const urlHome = baseUrl + homeUrl;

export const addEditForm = document.querySelector("#edit-page-form");
export const homePageCardContainer = document.querySelector(".show-feature-products-on-home-page");

export const productsPageCardContainer = document.querySelector(".show-products-on-products-page");
export const cardContainerElement = document.querySelector(".card-container");

export const filterInputField = document.querySelector("#filter-input-field");
export const heroBannerImage = document.querySelector(".hero-banner")

export const cartPageContainer = document.querySelector(".cart-page-product-container");
export const editProductsContainer = "products-edit-container";

export const attributesOnErrorMessage = {
  alertClass: "alert",
  warningClass: "alert-warning",
  ariaAttribute: "role",
  ariaRole: "alert"
};
