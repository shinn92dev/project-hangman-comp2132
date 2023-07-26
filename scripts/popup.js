const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");
const btn = popup.querySelector("button");
const setDefault = function () {
    overlay.classList.toggle("hidden");
    overlay.classList.toggle("show");
    popup.classList.toggle("hidden");
    popup.classList.toggle("show");
};
const deletePopup = function () {
    overlay.classList.remove("show");
    popup.classList.remove("show");
    overlay.classList.add("hidden");
    popup.classList.add("hidden");
};

const handlePopUP = function () {
    setDefault();

    btn.addEventListener("click", function () {
        console.log("ASD");
        deletePopup();
    });

    window.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === "Escape") {
            console.log("asd");
            deletePopup();
        }
    });
};
