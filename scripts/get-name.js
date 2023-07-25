const pEl = document.querySelector("header p");
const userName = window.localStorage.getItem("name");
console.log(userName);
pEl.innerHTML = `Hello ${userName}👋</br>Save the Dinosaur!!`;
