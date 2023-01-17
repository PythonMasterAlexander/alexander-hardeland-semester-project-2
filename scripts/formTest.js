import validateUserLoginInformation from './functions-tes-dir/formTestFile.js';

const userLoginInformation = document.querySelector("#user-login-form");
userLoginInformation.addEventListener('submit', validateUserLoginInformation);
