const testClass = document.querySelector("#if-username-wrong--show");
console.log(testClass);

export default function validateUserLogin() {
  event.preventDefault();
  const formElementEventTarget = event.target;
  const userNameValue = formElementEventTarget.username.value;
  console.log(userNameValue);

  if(userNameValue.length < 3) {
    testClass.style.display = "block";
  }
}
