const h2 = document.querySelector("#welcome-section h2");
let userName = window.localStorage.getItem("name").trim();
if (userName.length <= 0 || userName === undefined) {
    userName = "Player";
}

h2.textContent = `Hello ${userName}!`;
