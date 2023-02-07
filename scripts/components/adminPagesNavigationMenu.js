import { dynamicMenuContainer } from '../constant/variables.js';
import { getUserNameInLocalStorage } from './localStorageComponents.js';

export default function adminPagesNavigationMenu() {
  const adminPage = document.createElement("a");
  const logoutButton = document.createElement("button");

  const loginPage = adminPage.cloneNode(false);
  const editPage = adminPage.cloneNode(false);
  const addPage = adminPage.cloneNode(false);

  logoutButton.setAttribute("id", "logout-button");
  logoutButton.appendChild(document.createTextNode("logout"));

  const { pathname } = document.location;
  const loginUserName = getUserNameInLocalStorage();

  addPage.setAttribute("href", "add.html");
  addPage.appendChild(document.createTextNode("add"));
  addPage.classList.add(`${pathname === "/add.html" ? "admin-pages-active-link" : "admin-pages-none-active-link"}`);

  editPage.setAttribute("href", "edit.html");
  editPage.appendChild(document.createTextNode("edit"));
  editPage.classList.add(`${pathname === "/edit.html" ? "admin-pages-active-link" : "admin-pages-none-active-link"}`);

  adminPage.setAttribute("href", "admin.html");
  adminPage.appendChild(document.createTextNode(`User: ${loginUserName}`));
  adminPage.classList.add(`${pathname === "/admin.html" ? "admin-pages-active-link" : "admin-pages-none-active-link"}`);

  loginPage.setAttribute("href", "login.html");
  loginPage.appendChild(document.createTextNode("login"));
  loginPage.classList.add(`${pathname === "/login.html" ? "admin-pages-active-link" : "admin-pages-none-active-link"}`);

  let authenticatorLink;
  authenticatorLink = dynamicMenuContainer.append(loginPage);
  if (loginUserName) {
    //return authenticatorLink;
  }

  return dynamicMenuContainer.append(adminPage, addPage, editPage, loginPage);
  /*
  loginPage.setAttribute("href", "login.html");
  let ifUserLogedIn = loginPage; 

  if (loginUserName) {
    ifUserLogedIn.setAttribute("href", "/admin.html");
    ifUserLogedIn.appendChild(document.createTextNode(`User: ${loginUserName}`));
    loginPage.classList.add(`${pathname === "/admin.html" ? "admin-pages-active-link" : "admin-pages-none-active-link"}`);
  }

  editPage.setAttribute("href", "edit.html");
  editPage.appendChild(document.createTextNode("edit"));
  editPage.classList.add(`${pathname === "/edit.html" ? "admin-pages-active-link" : "admin-pages-none-active-link"}`);

  addPage.setAttribute("href", "add.html");
  addPage.appendChild(document.createTextNode("add"));
  addPage.classList.add(`${pathname === "/add.html" ? "admin-pages-active-link" : "admin-pages-none-active-link"}`);
  */

  //return dynamicMenuContainer.append(loginPage, logoutButton, adminPage, editPage, addPage);
}
