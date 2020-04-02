const wordBtn = document.getElementById("btn");
const word = document.querySelector(".word");

const wordArr = [
    "greetings",
    "adventure",
    "awesome",
    "helping",
    "sick",
    "dope",
    "cheese",
    "weird",
    "chase",
    "movies",
    "music"
];

wordBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * wordArr.length);
    word.textContent = wordArr[random];
});