import { clearLocalStorage } from '../components/localStorageComponents.js';
import { tokenKey, userKey } from '../constant/constants.js';

function logoutUser(button) {
  button.addEventListener("click", function() {
    const logoutUser = confirm("Please confirm logout");

    if (logoutUser) {
      const userLoginCredentials = [tokenKey, userKey];
      userLoginCredentials.forEach((userCredential) => {
        localStorage.removeItem(userCredential);
      });
      location.href = "login.html";
    }
  });
}
export default logoutUser;
