import { tokenKey, userKey } from '../constant/constants.js';

//Save value to local storage
function saveValueInLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

//Then call this function and save user token in local storage
export function saveUserLoginToken(token) {
  saveValueInLocalStorage(tokenKey, token);
}

export function getTokenFromStorage() {
  return getValueFromLocalStorage(tokenKey);
}

//Save user
export function saveUserLogin(user) {
  saveValueInLocalStorage(userKey, user);
}

function getValueFromLocalStorage(key) {
  const localStorageValue = localStorage.getItem(key);

  if (!localStorageValue) {
    return [];
  } 
  return JSON.parse(localStorageValue);
}

//Get the username from local storage
export function getEmailLoginFromLocalStorage() {
  const userLoginValue = getValueFromLocalStorage(userKey);

  if (userLoginValue) {
    return userLoginValue.email;
  }
  return null;
}
