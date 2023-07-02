// Query Selectors
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// var pwdLength = 0;
var caseLower = 'abcdefghijklmnopqrstuvwxyz';
var caseUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var special = '!@#$%^&*()_+-=,./<>?[]{}`~';
var charSet = "";
var password = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generate password function
function generatePassword() {


  // choosing password criteria
  var pwdLength = prompt("Enter a password length of at least 8 characters and no more than 128 characters.");

  // creating rule to only accept 8-128 characters
  if (pwdLength < 8 || pwdLength > 128) {
    alert("Your password length is not between 8 and 128 characters. Please try again.");
    return;
  }
  var lowerSet = confirm("Do you want your password to contain lowercase letters?");
  var upperSet = confirm("Do you want your password to contain uppercase letters?");
  var numSet = confirm("Do you want your password to contain numbers?");
  var specialSet = confirm("Do you want your password to contain special characters?");

  if (lowerSet === false && upperSet === false && numSet === false && specialSet === false) {
    alert("You must choose at least one password criteria.");
    return;
  }

  // using criteria to generate password
  if (lowerSet) {
    charSet += caseLower;
  }
  if (upperSet) {
    charSet += caseUpper;
  }
  if (numSet) {
    charSet += numbers;
  }
  if (specialSet) {
    charSet += special;
  }

  for (i = 0; i < pwdLength; i++) {
    password += charSet[Math.floor(Math.random() * charSet.length)]
  } return password;
  
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;
}