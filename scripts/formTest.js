import validateUserLoginInformation from './functions-tes-dir/formTestFile.js';

const userLoginInformation = document.querySelector("#user-login-form");
console.log(userLoginInformation);

userLoginInformation.addEventListener('submit', validateUserLoginInformation);
