const bombDropAudio = new Audio("../audio/drop.mp3");
const backgroundAudio = new Audio("../audio/background.mp3");
const fireworkAudio = new Audio("../audio/firework.mp3");
const explosionAudio = new Audio("../audio/explosion.mp3");
const celebrationAudio = new Audio("../audio/celebration.mp3");
const wrongAudio = new Audio("../audio/wrong.mp3");
const clickAudio = new Audio("../audio/click.mp3");
const successAudio = new Audio("../audio/success.mp3");
const icon = document.querySelector(".icon-box i");

const isAudioCurrentlyOn = function () {
    if (icon.classList.contains("fa-volume-xmark")) {
        return false;
    } else if (icon.classList.contains("fa-volume-high")) {
        return true;
    }
};

const playEffectSound = function (status) {
    console.log("EFFECT SOUND FUNCTION");
    if (isAudioCurrentlyOn()) {
        console.log("PLAYABLE");
        if (status === "click") {
            console.log("CLICK PLAY");
            clickAudio.play();
        } else if (status === "wrong") {
            console.log("WRONG PLAY");
            wrongAudio.play();
        } else if (status === "success") {
            successAudio.play();
        }
    }
};
const playWinAudio = function () {
    if (isAudioCurrentlyOn()) {
        fadeSound(backgroundAudio, 100, 1);
        celebrationAudio.volume = 0.5;
        fireworkAudio.play();
        celebrationAudio.play();
        setTimeout(function () {
            fadeSound(fireworkAudio, 100, 1);
            fadeSound(celebrationAudio, 100, 0.5);
        }, 3000);
    }
};

const playDropAudio = function () {
    if (isAudioCurrentlyOn()) {
        fadeSound(backgroundAudio, 100, 1);
        bombDropAudio.play();
    }
};
const playExplosionAudio = function () {
    if (isAudioCurrentlyOn()) {
        bombDropAudio.pause();
        explosionAudio.play();
    }
};

// const init = function () {
//     const status = window.localStorage.getItem("letMusicOn");
//     icon.classList.remove("fa-volume-xmark");
//     icon.classList.remove("fa-volume-high");
//     if (status === "true") {
//         icon.classList.add("fa-volume-high");
//         backgroundAudio.load();
//         backgroundAudio.play();
//         backgroundAudio.muted = true;
//         backgroundAudio.loop = true;
//     } else {
//         icon.classList.add("fa-volume-xmark");
//     }
// };

// init();
const initAudio = function () {
    icon.addEventListener("click", function () {
        if (!isAudioCurrentlyOn()) {
            icon.classList.remove("fa-volume-xmark");
            icon.classList.add("fa-volume-high");
            backgroundAudio.load();
            backgroundAudio.play();
            backgroundAudio.loop = true;
        } else {
            icon.classList.add("fa-volume-xmark");
            icon.classList.remove("fa-volume-high");
            backgroundAudio.pause();
        }
    });
};
const fadeSound = function (audio, interval, initialVol) {
    let handler;
    let volume = initialVol;
    handler = setInterval(function () {
        if (volume >= 0) {
            audio.volume = volume;
            volume = volume - 0.1;
        } else {
            clearInterval(handler);
        }
    }, interval);
};
initAudio();
