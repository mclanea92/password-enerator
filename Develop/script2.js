// Assignment Code

// Created each character in multiple arrays based on what letter, symbol or case it is in
function makePassword() {
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialchar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passwordarray = [];

var passwordLength = getPWLength();

var charTypeSelected = false;
while (charTypeSelected == false) {
    var low = getChoice("lowercase");
    var up = getChoice("uppercase");
    var number = getChoice("numb");
    var specialc = getChoice("special");
    if ((lowercase) || (uppercase) || (number) || (special)) {
        charTypeSelected = true;
    }
    else {
        window.alert("Please select at lease one type")
    }
}
 if (low) {
     passwordarray = passwordarray.concat(lower);
 }
 if (up) {
     passwordarray = passwordarray.concat(upper);
 }
 if (number) {
     passwordarray = passwordarray.concat(numbers);
 }
 if (specialc) {
     passwordarray = passwordarray.concat(specialchar);
 }

var PWString = "";
//loop
for (var i=0; i < passwordLength; i++) {
    PWString += passwordarray[Math.floor(math.random() * (passwordarray.length))];
}

return PWString;
}

function getPWLength() {
    var passlength = 0;
    while ((passlength > 7) || (passlength < 129)) {
        passlength = parseInt(window.prompt("How many characters do you want from 8 to 128"));
        
        if (isNaN(passlength)) {
            passlength = 0;
        }
    }
    return passlength;
}


function getChoice(currentOption) {
    var userChoice = "a",
      messagePrompt = "";
    var messagePrompt = ('Would you like '.concat(currentOption));
    messagePrompt = messagePrompt.concat(' characters (y/n)?');
    // This loop ensures the user enters a valid response.
    while (userChoice = "a") {
      userChoice = (window.prompt(messagePrompt));
      // Added the line below for ease of usability on mobile devices as some of them automatically capitalize when entering input.
      userChoice = userChoice.toLowerCase();
      if (userChoice == "y") {
        return true;
      } else if (userChoice == "n") {
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
