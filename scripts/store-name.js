const input = document.querySelector('input[type="text"]');
const submit = document.querySelector('input[type="submit"]');

submit.addEventListener("click", function () {
    const name = input.value;
    const letMusicOn =
        document.querySelector("fieldset input:checked").value === "no"
            ? "false"
            : "true";
    window.localStorage.setItem("name", name);
    window.localStorage.setItem("letMusicOn", letMusicOn);
});
