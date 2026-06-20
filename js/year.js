"use strict";

const yearAnswer = document.querySelector('#year__answer');
const yearSubmit = document.querySelector('#year__submit');
const yearInput = document.querySelector('#year__input');

const yearCheck = () => {
    if (Number(yearInput.textContent) % 4 === 0) {
        yearAnswer.textContent = "Ви народилися у високосний рік!";
        yearAnswer.classList.add('right');
    } else {
        yearAnswer.textContent = "Ви народилися не у високосний рік!";
        yearInput.classList.add('wrong');
    }
};

yearSubmit.addEventListener('click', yearCheck);