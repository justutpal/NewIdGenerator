let phoneStart = document.querySelector(".phoneStart");
let phoneSecond = document.querySelector(".phoneSecond");
let startName = document.querySelector(".startName");
let userIdName = document.querySelector(".userIdName");
let button = document.querySelector(".button");
let copyWhole = document.querySelector(".copyWhole");
let alphabet = "abcdefghijklmnopqrstuvwxyz"
let startnum = "9876"
let str = "1234567890";
let number = " "
let another = " "
let newNameEmail = " "

button.addEventListener('click', () => {
    another = ""
    number = ""
    newNameEmail = ""
    firstNum= ""
    lastNum=""

    for (let i = 0; i < 2; i++) {
        another += startnum[Math.floor(Math.random() * 4)]
    }
    for (let i = 0; i < 8; i++) {
        number += str[Math.floor(Math.random() * 10)]
    }
    for (let i = 0; i < 3; i++) {
        firstNum += str[Math.floor(Math.random() * 10)]
    }
    for (let i = 0; i < 8; i++) {
        newNameEmail += alphabet[Math.floor(Math.random() * 26)]
    }

    phoneStart.innerHTML = another;
    phoneSecond.innerHTML = number;
    startName.innerHTML = newNameEmail + firstNum;
    userIdName.innerHTML = newNameEmail + firstNum;
});

copyWhole.addEventListener('click', () => {
    navigator.clipboard.writeText(newpara.innerText)
});