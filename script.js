
// Assignment Code
var generateBtn = document.querySelector("#generate");

//characters to be used by the password generator
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let special = "!@,#$%&*{}[]/\\+=";
let chosenCharacters = "";


// Write password to the #password input
function enterPassword() {
  let password = generatePassword;
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function writePassword(){
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button //prompt questions when button is clicked
generateBtn.addEventListener("click", writePassword)


//generate password
function generatePassword() {
//return password options to user when generate password button is clicked  
return getOptions();

}

function getOptions() {
  //prompt the user to enter a number for how many characters they want to use
  var length = parseInt(prompt('How many characters would you like to use?')); 
  //if length entered is not a number
if (isNaN(length) === true) {  
   //alert the user to enter a number
  alert('Please enter a number') 

  return
}

//if length entered is less than 8 or more than 128 characteers 
if (length < 8 || length > 128) { 
  //alert user to enter between 8 and 128 
  alert('Please enter 8 to 128 characters') 
  return
}

//ask user if using special characters
let ifHasSpecialCharacters = confirm('Click Ok if using special characters'); 
//ask user if using numbers
let ifHasNumbers = confirm('Click Ok if using numbers'); 
//ask user if using lower case
let ifHasLowerCase = confirm('Click Ok if using lower case letters'); 
//ask user if using upper case
let ifHasUpperCase = confirm('Click Ok if using upper case letters'); 


//if all statements are retured false 
if (
  ifHasSpecialCharacters === false &&
  ifHasNumbers === false &&
  ifHasLowerCase === false &&
  ifHasUpperCase === false
) {
  //alert user to pick at least one character type
  alert('You must select at least one of the character types');
  return 
};

//generate random password
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

//random selection for all variables
for (let i = 0; i < length; i++) {
  result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
}
return result;

}
