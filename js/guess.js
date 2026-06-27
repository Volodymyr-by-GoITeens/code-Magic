"use strict";

const guessAnswer = document.querySelector('#guess__answer');
const guessSubmit = document.querySelector('#guess__submit');
const guessInput = document.querySelector('#guess__input');
const guessNumber = Math.round(Math.random() * (5 - 1) + 1);

const guessCheck = () => {
    if (Number(guessInput.textContent) === guessNumber) {
        guessAnswer.textContent = "Ви народилися у високосний рік!";
        guessAnswer.classList.add('right');
    } else {
        guessAnswer.textContent = "Ви народилися не у високосний рік!";
        guessAnswer.classList.add('wrong');
    }
};

guessSubmit.addEventListener('click', guessCheck);