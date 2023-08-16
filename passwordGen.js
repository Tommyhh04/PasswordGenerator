//Letters numbers and special signs to be used in the password generator
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
//Grabs the divs to place the generated strings inside
let genPass1 = document.querySelector(`.password1`);
let genPass2 = document.querySelector(`.password2`);
//Sets the allowed password length
let passwordLength = 8;

//Generates a random string of letters, numbers and special signs
function getCharacters() {
  let randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
}

//Loops to get enough characters to fill the passwordLenght wich is 8 letters
function generatePassword() {
  console.log("button is pressed");
  let randomPassword = "";
  for (let i = 0; i < passwordLength; ++i) {
    randomPassword += getCharacters();
  }
  return randomPassword;
}

const generatedPasswordOne = generatePassword();
const generatedPasswordTwo = generatePassword();

//Puts the generated password into the divs password1 and password2 displaying the generated string
function genPassButton() {
  const generatedPasswordOne = generatePassword();
  const generatedPasswordTwo = generatePassword();
  genPass1.textContent = generatedPasswordOne;
  genPass2.textContent = generatedPasswordTwo;
}
