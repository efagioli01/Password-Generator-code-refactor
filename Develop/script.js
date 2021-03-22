// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var options = getOptions();
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
  alert('You must select at least one character type');
  return
};

var options = {
  length: length,
  ifHasSpecialCharacters: ifHasSpecialCharacters,
  ifHasNumbers: ifHasNumbers,
  ifHasLowerCase: ifHasLowerCase,
  ifHasUpperCase: ifHasUpperCase
}
  
return options;
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


