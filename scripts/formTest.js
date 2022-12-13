import validateUserLogin from './functions-tes-dir/formTestFile.js';

const userLoginWithForm = document.querySelector("#user-login-form");
console.log(userLoginWithForm);

userLoginWithForm.addEventListener('submit', validateUserLogin);
