const input = document.querySelector('input[type="text"]');
const submit = document.querySelector('input[type="submit"]');

submit.addEventListener("click", function () {
    const name = input.value;
    window.localStorage.setItem("name", name);
});
