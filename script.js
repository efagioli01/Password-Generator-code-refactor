// Assignment Code
var generateBtn = document.querySelector("#generate");

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@,#$%&*{}[]/\\+=";
var chosenCharacters = "";


// Write password to the #password input

function enterPassword() {
  var password = generatePassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)



function generatePassword() {
return getOptions();
//var result = "";
}

function getOptions() {
  var length = parseInt(prompt('how many characters would you like to use?'));

if (isNaN(length) === true) {
  alert('Please enter a number')
  return
}

if (length < 8 || length > 128) {
  alert('please enter 8 to 128 characters')
  return
}

var ifHasSpecialCharacters = confirm('are you using special characters?');
var ifHasNumbers = confirm('are you using numbers?');
var ifHasLowerCase = confirm('are you using lower case letters?');
var ifHasUpperCase = confirm('are you using upper case letters?');


if (
  ifHasSpecialCharacters === false &&
  ifHasNumbers === false &&
  ifHasLowerCase === false &&
  ifHasUpperCase === false
) {
  alert('You must select at least one of the character types');
  return 
};


if(ifHasSpecialCharacters){
  chosenCharacters += special
}
if(ifHasLowerCase){
  chosenCharacters += lower
}

if(ifHasNumbers) {
  chosenCharacters += numbers
}

if(ifHasUpperCase) {
  chosenCharacters += upper
}
let result = ""

for (var i = 0; i < length; i++) {
  result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
}
return result;

}


