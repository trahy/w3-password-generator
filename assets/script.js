// Assignment code here

var pwdLength = 0;
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var special = '!@#$%^&*()_+-=,./<>?[]{}`~';

// converting strings into array
pwdLowercase = lowercase.split('')
pwdUppercase = uppercase.split('')
pwdNumbers = numbers.split('')
pwdSpecial = special.split('')

// see array length
console.log(pwdLowercase)
console.log(pwdUppercase)
console.log(pwdNumbers)
console.log(pwdSpecial)

// creating random function
function getRandomLower(){
  return Math.floor(Math.random()*pwdLowercase.length);
}

function getRandomUpper(){
  return Math.floor(Math.random()*pwdUppercase.length);
}

function getRandomNumber(){
  return Math.floor(Math.random()*pwdNumbers.length);
}

function getRandomSpecial(){
  return Math.floor(Math.random()*pwdSpecial.length);
}





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
