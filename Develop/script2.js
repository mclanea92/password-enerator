// Assignment Code

// Created each character in multiple arrays based on what letter, symbol or case it is in
function makePassword() {
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialchar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
const lowerletter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperletter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passwordarray = [];

var passwordLength = getPWLength();

var charTypeSelected = true;
if (charTypeSelected == true) {
    var low = getpass("LowerCase");
    var up = getpass("UpperCase");
    var number = getpass("Number");
    var special = getpass("Special");
    if ((low) || (up) || (number) || (special)) {
        charTypeSelected = false;
    }
    else {
        window.alert("Please select at lease one type.")
   return generatePassword()
    }
}
 if (low) {
     passwordarray = passwordarray.concat(lowerletter);
 }
 if (up) {
     passwordarray = passwordarray.concat(upperletter);
 }
 if (number) {
     passwordarray = passwordarray.concat(numbers);
 }
 if (special) {
     passwordarray = passwordarray.concat(specialchar);
 }

 var PWString ="";
 for (var i = 0; i < passwordLength; i++) {
     PWString += passwordarray[Math.floor(Math.random() * (passwordarray.length))];
 }


return PWString;
}

function getPWLength() {
    var passlength = 0;
    while ((passlength < 7) || (passlength > 129)) {
        passlength = parseInt(window.prompt("How many characters do you want from (8 - 128)?: "));
        
        if (isNaN(passlength)) {
            passlength = 0;
        }
    }
    return passlength;
}


function getpass(currentOption) {
    var passlength = "string",
      messagePrompt = "";
    var messagePrompt = ('Would you like '.concat(currentOption));
    messagePrompt = messagePrompt.concat(' characters (y/n)?');
    // This loop ensures the user enters a valid response.
    while (passlength = "a") {
      passlength = (window.prompt(messagePrompt));
      if (passlength == "y", "yes") {
        return true;
      } else if (passlength == "n", "no") {
        return false;
      }
    }
  }




var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = makePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
