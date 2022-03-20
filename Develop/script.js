// Assignment Code
var generateBtn = document.querySelector("#generate");
var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var symbols = "!@#$%^&*_-+="
var confirm = ["yes" , "YES" , "Yes" , "Y" , "yup" , "Yup" , "y"]
var upperLimit = 128;
var lowerLimit = 8;
var hasSymbol = true;

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
    alert("this password is the right length")}
    else {
      alert("Please select a value between 8 and 128") //NEEDS TO RE-PROMPT USER TO SELECT CORRECT NUMBER
    }
  //NEED TO DO SOMETHING WITH THE VALUE THE USER GIVES US
  var event = confirm("Press confirm if you would like special characters");
  if (confirm == true) {
    alert("You've selected special characters!")
  } else if (confirm == false) { 
    alert("You've selected not to have special characters :(")
  }
  var event = confirm("Press confirm if you would like uppercase letters.");
  if (confirm == true) {
    alert("You've selected uppercase letters!")
  } else if (confirm == false) {
    alert("You've selected not to have uppercase letters :(")
  }
  //NEED TO DO SOMETHING WITH THE INPUT
  
  // var event = prompt("How many characters are required in your password?");
  // if (event >= 8 && event < 129){
  //   alert("This password is the right length")}
  // else {
  //   alert("Please choose chararter value between 8 & 128.") // need to run something to reprompt user to select correct number if not in criteria
  // }

  
  // var event = confirm("Are special characters required?");
  // if (confirm == true){
  //   alert("You have selected special characters")}
  //   else if (confirm = false) {
  //   alert("You have selected to not have special characters")
  // }


  // var event = confirm ("Press confirm if you would like uppercase letters");
  // if (confirm = true){
  //   alert("You have selected uppercase letters")}
  //   else if (confirm = false) {
  //     alert("You have selected to not have uppercase letters")
  //   }

    passwordText.value = password;
}



function generatePassword() {



  return
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
