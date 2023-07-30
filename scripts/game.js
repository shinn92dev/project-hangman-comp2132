const word = wordSet;
const hangman = {
    isUsed: {
        A: false,
        B: false,
        C: false,
        D: false,
        E: false,
        F: false,
        G: false,
        H: false,
        I: false,
        J: false,
        K: false,
        L: false,
        M: false,
        N: false,
        O: false,
        P: false,
        Q: false,
        R: false,
        S: false,
        T: false,
        U: false,
        V: false,
        W: false,
        X: false,
        Y: false,
        Z: false,
    },
    wordArr: word.word.toUpperCase().split(""),
    wordCategory: word.category,
    answerArr: [],
    chanceleft: 7,
    isCorrectGuess: false,
    setUsed: function (k) {},
    setAnswerArr: function () {},
    countDownChance: function () {
        this.chanceleft--;
    },
    checkWin: function () {
        for (let i = 0; i < this.wordArr.length; i++) {
            if (this.wordArr[i] !== this.answerArr[i]) {
                return (this.win = false);
            }
        }
        return (this.win = true);
    },
};

// ELEMENT Variable
const lis = document.querySelectorAll(".keyboard-ul li");
const spans = answerContainer.querySelectorAll("span");
const categorySpan = document.querySelector(".category-span");
const lifeIcons = document.querySelectorAll(".icon-list i");
// const chanceSpan = document.querySelector(".chance-span");

// Function: Life
// TODO: REDUCE ICON
const reduceLife = function (currentLife) {
    const fullLife = 7;
    if (currentLife < 7) {
        let i = 7 - currentLife;

        for (i; i > 0; i--) {
            lifeIcons[fullLife - i].classList.add("is-empty");
        }
    }
};

// reduceLife(5);
// Function: block all li element
const blockAllLis = function () {
    lis.forEach(function (li) {
        li.classList.add("is-disabled");
    });
};
// Funtion: will be executed when player wins
const winGame = function () {
    blockAllLis();
    handleWinEvent();
    playWinAudio();
};
// Funtion: will be executed when player loses
const loseGame = function () {
    blockAllLis();
    handleLoseEvent();
    // playLoseAudio();
};

// Function: handle event when player clicks li elements
function handleClickEvent() {
    lis.forEach(function (li) {
        li.addEventListener("click", function (e) {
            // Before game is done
            if (!hangman.win && hangman.chanceleft > 0) {
                hangman.isCorrectGuess = false;
                const keyPressed = e.target.textContent;
                if (hangman.isUsed[keyPressed]) {
                    hangman.isCorrectGuess = true;
                    playEffectSound("wrong");
                    handlePopUP();
                } else {
                    hangman.isUsed[keyPressed] = true;
                    e.target.classList.add("is-disabled");

                    for (let i = 0; i < hangman.wordArr.length; i++) {
                        if (hangman.wordArr[i] === keyPressed) {
                            spans[i].textContent = keyPressed;
                            hangman.answerArr[i] = keyPressed;
                            hangman.isCorrectGuess = true;
                            playEffectSound("success");
                        }
                    }

                    if (!hangman.isCorrectGuess) {
                        hangman.countDownChance();
                        reduceLife(hangman.chanceleft);
                        playEffectSound("wrong");
                    }

                    hangman.checkWin();
                    if (hangman.win && hangman.chanceleft >= 1) {
                        winGame();
                    }
                    if (hangman.chanceleft <= 0) {
                        loseGame();
                    }
                }
            }
        });
    });
}

function handleKeyDownEvent() {
    window.addEventListener("keydown", function (e) {
        const keyPressed = e.key.toUpperCase();
        if (hangman.isUsed[keyPressed] === undefined) {
            return;
        }
        if (!popup.classList.contains("show")) {
            if (!hangman.win && hangman.chanceleft > 0) {
                hangman.isCorrectGuess = false;
                if (hangman.isUsed[keyPressed]) {
                    hangman.isCorrectGuess = true;
                    playEffectSound("wrong");
                    handlePopUP();
                } else {
                    hangman.isUsed[keyPressed] = true;
                    lis.forEach(function (li) {
                        if (li.textContent === keyPressed) {
                            li.classList.add("is-disabled");
                        }
                    });

                    for (let i = 0; i < hangman.wordArr.length; i++) {
                        if (hangman.wordArr[i] === keyPressed) {
                            spans[i].textContent = keyPressed;
                            hangman.answerArr[i] = keyPressed;
                            playEffectSound("success");
                            hangman.isCorrectGuess = true;
                        }
                    }
                    if (!hangman.isCorrectGuess) {
                        hangman.countDownChance();
                        reduceLife(hangman.chanceleft);
                        playEffectSound("wrong");
                    }

                    hangman.checkWin();
                    if (hangman.win && hangman.chanceleft >= 1) {
                        winGame();
                    }
                    if (hangman.chanceleft <= 0) {
                        loseGame();
                    }
                }
            }
        }
    });
}

categorySpan.textContent = hangman.wordCategory;
handleClickEvent();
handleKeyDownEvent();
handleHintEvent();
