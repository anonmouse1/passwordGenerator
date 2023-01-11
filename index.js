const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let currentPwd = document.getElementById("pwd");
let currentChar = "";
let hasPwdContent = false;
let pwdLength = document.getElementById("pwd-length");
let dispPwdLength = document.getElementById("disp-length");
dispPwdLength.textContent = "Password Length: " + pwdLength.value;

//update the displayed password length anytime the input range value is adjusted
pwdLength.addEventListener("click", (event) => {
  event.preventDefault();
  dispPwdLength.textContent = "Password Length: " + pwdLength.value;
});

//generate a password of length specified by the user
function generatePwd() {
  currentPwd.textContent = "";
  let currentPwdLength = pwdLength.value;
  for (let i = 0; i < currentPwdLength; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    currentChar = characters[randomNumber];
    currentPwd.textContent += currentChar;
  }
  hasPwdContent = true;
}
