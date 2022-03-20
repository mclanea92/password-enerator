// Assignment Code
var generateBtn = document.querySelector("#generate");
var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var symbols = "!@#$%^&*_-+="
var upperLimit = 128;
var lowerLimit = 8;

// var passwordLength = {
//   from: 8, 
//   to: 128 
// }
//var writePassword = '';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var event = prompt("How many characters are required in your password?");
  if (event >= 8 && event < 129){
    console.log("This password is the right length")}
  passwordText.value = password;
    
}



function generatePassword() {



  return
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
