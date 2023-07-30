const dinasaurImg = document.querySelector(".dinosaur-img");
const backgroundImg = document.querySelector(".background-img");
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
backgroundFrameHandler = requestAnimationFrame(animateBackground);
dinosaurFrameHandler = requestAnimationFrame(animateDinosaur);

const handleWinEvent = function () {
    const winImgs = document.querySelectorAll(".win-img");

    winImgs.forEach(function (img) {
        img.classList.remove("hide");
        img.classList.add("show");
    });
    initGameOverBackground("win");
};
const handleLoseEvent = function () {
    clearTimeout(backgroundTimeOutHandler);
    clearTimeout(dinosaurTimeOutHandler);
    cancelAnimationFrame(backgroundFrameHandler);
    cancelAnimationFrame(dinosaurFrameHandler);
    backgroundImg.classList.add("lose");
    dinasaurImg.classList.add("lose");
    initAsteroidAnimation();
};

const initAsteroidAnimation = function () {
    const img = document.querySelector(".asteroid-img");
    let handler;
    // let rightMove = 0.7;
    // let topMove = 0.6333333;
    playDropAudio();
    let move = 1;
    handler = setInterval(function () {
        const currentRight = parseInt(window.getComputedStyle(img).right);
        const currentTop = parseInt(window.getComputedStyle(img).top);
        const right = `${currentRight + move}px`;
        const top = `${currentTop + move}px`;
        if (currentTop <= 10) {
            img.style.right = right;
            img.style.top = top;
        } else {
            clearInterval(handler);
            initExplosion();
        }
    }, 10);
};

const initExplosion = function () {
    const asteroidImg = document.querySelector(".asteroid-img");
    const bombImg = document.querySelector(".explosion-img");
    let asteroidHandler;
    playExplosionAudio();
    asteroidHandler = setInterval(function () {
        const currentOpacity = window.getComputedStyle(asteroidImg).opacity;
        asteroidImg.style.opacity = currentOpacity - 0.2;
        if (window.getComputedStyle(asteroidImg).opacity === "0") {
            clearInterval(asteroidHandler);
        } else {
            bombImg.classList.add("show");
            initGameOverBackground("lose");
        }
    }, 100);
};

const initGameOverBackground = function (status) {
    const background = document.querySelector(".game-over-background");
    const msg = background.querySelector("p");
    if (status === "lose") {
        msg.innerHTML = "You Killed</br>Dinosaur😰";
    } else {
        msg.innerHTML = "You Saved</br>Dinosaur🎉";
    }
    setTimeout(function () {
        background.classList.add("show");
    }, 1500);
};
