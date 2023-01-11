import { dynamicMenuContainer } from '../constant/variables.js';
import { getEmailLoginFromLocalStorage } from './localStorageComponents.js';

function addProductsToApi() {
}

function deleteProductsFromApi() {
}

export default function adminPagesNavigationMenu() {
  const adminPage = document.createElement("a");
  const logoutButton = document.createElement("button");

  const loginPage = adminPage.cloneNode(false);
  const editPage = adminPage.cloneNode(false);

  const addPage = adminPage.cloneNode(false);
  logoutButton.appendChild(document.createTextNode("logout"));

  logoutButton.setAttribute("id", "logout-button");

  const { pathname } = document.location;
  const loginUserName = getEmailLoginFromLocalStorage();

  loginPage.setAttribute("href", "login.html");
  loginPage.classList.add(`${pathname === "/login.html" ? "admin-pages-active-link" : "admin-pages-none-active-link"}`);
  let ifUserLogedIn = loginPage; 

  if (loginUserName) {
    ifUserLogedIn.setAttribute("href", "/admin.html");
    ifUserLogedIn.appendChild(document.createTextNode(`Welcome ${loginUserName}`));

    loginPage.classList.add(`${pathname === "/admin.html" ? "admin-pages-active-link" : "admin-pages-none-active-link"}`);
  }

  editPage.setAttribute("href", "edit.html");
  editPage.appendChild(document.createTextNode("edit"));
  editPage.classList.add(`${pathname === "/edit.html" ? "admin-pages-active-link" : "admin-pages-none-active-link"}`);

  addPage.setAttribute("href", "add.html");
  addPage.appendChild(document.createTextNode("add"));
  addPage.classList.add(`${pathname === "/add.html" ? "admin-pages-active-link" : "admin-pages-none-active-link"}`);

  dynamicMenuContainer.append(loginPage, logoutButton, adminPage, editPage, addPage);
}
