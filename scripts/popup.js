const popupSection = document.getElementById("popup-section");
const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");
const btn = popup.querySelector("button");

// const handleSection = function () {
//     const currentDisplay = window.getComputedStyle(popupSection).display;
//     console.log(currentDisplay);
//     if (currentDisplay == "none") {
//         popupSection.style.display = "block";
//     } else {
//         popupSection.style.display = "none";
//     }
// };
const setDefault = function () {
    overlay.classList.toggle("hidden");
    overlay.classList.toggle("show");
    popup.classList.toggle("hidden");
    popup.classList.toggle("show");
    // handleSection();
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
        playEffectSound("click");
        deletePopup();
    });

    window.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === "Escape") {
            playEffectSound("click");
            deletePopup();
        }
    });
};
