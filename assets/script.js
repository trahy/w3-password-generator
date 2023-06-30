// Assignment code here

// Query Selectors
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// var pwdLength = 0;
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


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// creating random function
function getRandomLower() {
  return Math.floor(Math.random() * pwdLowercase.length);
}

function getRandomUpper() {
  return Math.floor(Math.random() * pwdUppercase.length);
}

function getRandomNumber() {
  return Math.floor(Math.random() * pwdNumbers.length);
}

function getRandomSpecial() {
  return Math.floor(Math.random() * pwdSpecial.length);
}


// generate password function
function generatePassword() {

  // choosing password criteria
  var lowerLet = window.confirm("Do you want your password to contain lowercase letters?");
  var upperLet = window.confirm("Do you want your password to contain uppercase letters?");
  var numLet = window.confirm("Do you want your password to contain numbers?");
  var specialLet = window.confirm("Do you want your password to contain special characters?");
  var pwdLength = prompt("Enter a password length of at least 8 characters and no more than 128 characters.");

  // creating rule to only accept 8-128 characters
  if (pwdLength < 8 || pwdLength > 128) {
    window.alert("Your password length is not between 8 and 128 characters. Please try again.");
    pwdLength;
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();


  passwordText.value = password;

}