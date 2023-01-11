import { tokenKey, userKey } from '../constant/constants.js';

function saveValueInLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function saveUserLoginToken(token) {
  saveValueInLocalStorage(tokenKey, token);
}

export function getTokenFromStorage() {
  return getValueFromLocalStorage(tokenKey);
}

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

export function getEmailLoginFromLocalStorage() {
  const userLoginValue = getValueFromLocalStorage(userKey);

  if (userLoginValue) {
    return userLoginValue.email;
  }
  return null;
}

export function clearLocalStorage() {
  localStorage.clear()
}
