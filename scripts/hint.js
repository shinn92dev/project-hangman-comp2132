const disableProvidedKey = function (key) {
    lis.forEach(function (li) {
        if (li.textContent === key) {
            li.classList.add("is-disabled");
        }
    });
    hangman.isUsed[key] = true;
};
const getAvailableIdx = function (answerArr, wordArr) {
    const availebleIdxArr = [];
    const arrLength = wordArr.length;
    for (let i = 0; i < arrLength; i++) {
        if (answerArr[i] === undefined) {
            availebleIdxArr.push(i);
        }
    }
    return availebleIdxArr;
};
const shuffle = function (arr) {
    arr.sort(() => Math.random() - 0.5);
    return arr;
};
const markSelectedLetterToAnswerArr = function (
    answerArr,
    wordArr,
    selectedLetter
) {
    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i] === selectedLetter) {
            answerArr[i] = selectedLetter;
        }
    }
};
const writeProvidedKey = function (answerArr, wordArr) {
    const availableIdxArr = getAvailableIdx(answerArr, wordArr);
    const selectedIdx = shuffle(availableIdxArr)[0];
    const selectedLetter = wordArr[selectedIdx];
    markSelectedLetterToAnswerArr(answerArr, wordArr, selectedLetter);
    disableProvidedKey(selectedLetter);
    console.log(selectedLetter);
    console.log(answerArr);
    console.log(wordArr);
    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i] === selectedLetter) {
            spans[i].textContent = selectedLetter;
        }
    }
};

let hintUsed = 0;
const handleHintEvent = function () {
    document.querySelector("#hint-btn").addEventListener("click", function () {
        if (hintUsed === 0 && hangman.chanceleft > 1) {
            playEffectSound("click");
            writeProvidedKey(hangman.answerArr, hangman.wordArr);
            hangman.countDownChance();
            reduceLife(hangman.chanceleft);
        }
        hintUsed++;
        document.querySelector("#hint-btn").classList.add("is-disabled");
    });
};
