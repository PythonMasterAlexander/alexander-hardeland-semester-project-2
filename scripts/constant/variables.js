import { baseUrl, productsUrl } from './constants.js';

export const indexPageHtmlContainer = document.querySelector(".products-container");
export const containerForErrorMessage = document.querySelector(".container-for-error-message");

export const showErrorToUserContainer = document.querySelector(".show-error-to-user");
export const errorMessageContainer = document.querySelector(".container-error-message");

export const deleteButton = document.querySelector("#delete-button");
export const addProductsForm = document.querySelector("#add-products-form");

export const dynamicMenuContainer = document.querySelector(".dynamic-header-container");
export const contentInQueryString = document.location.search;

export const url = baseUrl + productsUrl;
export const addEditForm = document.querySelector("#edit-page-form");

export const attributesOnErrorMessage = {
  alertClass: "alert",
  warningClass: "alert-warning",
  ariaAttribute: "role",
  ariaRole: "alert"
};
