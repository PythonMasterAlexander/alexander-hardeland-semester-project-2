import { dynamicMenuContainer } from '../constant/variables.js';
import { getEmailLoginFromLocalStorage } from './localStorageComponents.js';

function addProductsToApi() {
}

function deleteProductsFromApi() {
}

export default function adminPagesNavigationMenu() {
  const adminPage = document.createElement("a");
  const loginPage = adminPage.cloneNode(false);

  const editPage = adminPage.cloneNode(false);
  const deletePage = adminPage.cloneNode(false);

  const { pathname } = document.location;
  const loginUserName = getEmailLoginFromLocalStorage();

  loginPage.setAttribute("href", "login.html");
  loginPage.classList.add(`${pathname === "/login.html" ? "admin-pages-active-link" : "admin-pages-none-active-link"}`);
  let ifUserLogedIn = loginPage; 

  if (loginUserName) {
    console.log(ifUserLogedIn);
    //Change loginPage to be the admin page
  }

  /*
  adminPage.setAttribute("href", "admin.html");
  adminPage.appendChild(document.createTextNode(`Welcome ${loginUserName}`));
  adminPage.classList.add(`${pathname === "/admin.html" ? "admin-pages-active-link" : "admin-pages-none-active-link"}`);
  */

  editPage.setAttribute("href", "edit.html");
  editPage.appendChild(document.createTextNode("edit"));
  editPage.classList.add(`${pathname === "/edit.html" ? "admin-pages-active-link" : "admin-pages-none-active-link"}`);

  deletePage.setAttribute("href", "delete.html");
  deletePage.appendChild(document.createTextNode("delete"));
  deletePage.classList.add(`${pathname === "/delete.html" ? "admin-pages-active-link" : "admin-pages-none-active-link"}`);

  dynamicMenuContainer.append(loginPage, adminPage, editPage, deletePage);
}
