"use strict";

const calcFisrtNum = document.querySelector('#calculator__num1');
const calcSecondNum = document.querySelector('#calculator__num2');
const calcPlus = document.querySelector('#calculator__plus');
const calcMinus = document.querySelector('#calculator__minus');
const calcMultiply = document.querySelector('#calculator__multiply');
const calcDivide = document.querySelector('#calculator__divide');
const calcEqual = document.querySelector('#calculator__equal');
const calcResult = document.querySelector('#calculator__result');
let calcExecute = undefined;

const plusBut = () => {
    calcExecute = '+';
}
const minusBut = () => {
    calcExecute = '-';
}
const multiplyBut = () => {
    calcExecute = '*';
}
const divideBut = () => {
    calcExecute = '/';
}

calcPlus.addEventListener('click', plusBut);
calcMinus.addEventListener('click', minusBut);
calcMultiply.addEventListener('click', multiplyBut);
calcDivide.addEventListener('click', divideBut);

const calcAnswer = () => {
    let calcExecution = calcExecute;
    if (calcExecution === '+') {
        calcResult.value = calcFisrtNum + calcSecondNum;
    } else if (calcExecution === '-') {
        calcResult.value = calcFisrtNum - calcSecondNum;
    } else if (calcExecution === '*') {
        calcResult.value = calcFisrtNum * calcSecondNum;
    } else if (calcExecution === '/') {
        calcResult.value = calcFisrtNum / calcSecondNum;
    }
}

calcEqual.addEventListener('submit', calcAnswer);