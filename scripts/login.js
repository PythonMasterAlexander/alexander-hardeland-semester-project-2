import validateUserLoginInformation from './utilities/validateUserLoginInformation.js';

const userLoginInformation = document.querySelector("#user-login-form");
userLoginInformation.addEventListener('submit', validateUserLoginInformation);
