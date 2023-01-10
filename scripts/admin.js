import { dynamicMenuContainer } from './constant/variables.js';

function adminNavigationMenu() {
  const adminPage = document.createElement("a");
  const editPage = adminPage.cloneNode(false);
  const deletePage = adminPage.cloneNode(false);

  adminPage.setAttribute("href", "admin.html");
  const adminText = document.createTextNode("admin");
  adminPage.append(adminText);

  editPage.setAttribute("href", "edit.html");
  const editText = document.createTextNode("edit");
  editPage.append(editText);

  deletePage.setAttribute("href", "delete.html");
  const deleteText = document.createTextNode("delete");
  deletePage.append(deleteText);

  dynamicMenuContainer.append(adminPage, editPage, deletePage);
}


function addProductsToApi() {
}

adminNavigationMenu();
