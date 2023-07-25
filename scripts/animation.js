const dinasaurImg = document.querySelector(".dinosaur-img");
console.log(dinasaurImg);
const backgroundImg = document.querySelector(".background-img");
console.log(backgroundImg);
// Dinosaur Img default width setup
const dinasaurImgWidth =
    window.innerWidth >= 510
        ? `340px`
        : `${window.innerWidth * 0.666666666666}px`;
dinasaurImg.style.width = dinasaurImgWidth;

// Dinosaur Img width setup depending on browser width
window.addEventListener("resize", function () {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 510) {
        const dinasaurImgWidth = windowWidth * 0.666666666666;
        dinasaurImg.style.width = `${dinasaurImgWidth}px`;
    }
});

let backgroundFrameHandler;
let dinosaurFrameHandler;
let backgroundTimeOutHandler;
let dinosaurTimeOutHandler;
let backgroundImgNum = 1;
let dinosaurImgNum = 1;
let backgroundImgEndNum = 100;
let dinosaurImgEndNum = 6;

// Background animation setup
const animateBackground = function () {
    const path = `../images/animation/background/background-${backgroundImgNum}.jpg`;
    backgroundImg.setAttribute("src", path);
    if (backgroundImgNum >= backgroundImgEndNum) {
        backgroundImgNum = 1;
    } else {
        backgroundImgNum++;
    }
    backgroundTimeOutHandler = setTimeout(function () {
        backgroundFrameHandler = requestAnimationFrame(animateBackground);
    }, 100);
};
backgroundFrameHandler = requestAnimationFrame(animateBackground);

// Dinosaur animation setup
const animateDinosaur = function () {
    const path = `../images/animation/dinosaur/dinosaur-${dinosaurImgNum}.gif`;
    dinasaurImg.setAttribute("src", path);
    if (dinosaurImgNum >= dinosaurImgEndNum) {
        dinosaurImgNum = 1;
    } else {
        dinosaurImgNum++;
    }
    dinosaurTimeOutHandler = setTimeout(function () {
        dinosaurFrameHandler = requestAnimationFrame(animateDinosaur);
    }, 150);
};
dinosaurFrameHandler = requestAnimationFrame(animateDinosaur);
