var passwordLength = 128;
var choiceArr = [];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Assignment Code
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correct = prompts();
  var passwordText = document.querySelector("#password");

  if (correct) {
    var updatedPassword = generatePassword();
    passwordText.value = updatedPassword;
    } else {
      passwordText.value = "";
    }
   

}


function generatePassword() {
  var password = "";
  for(i = 0; i < passwordLength; i++ ) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length)
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function prompts () {
  choiceArr = [];
  var passwordLength = parseInt(window.prompt("How many characters would you like your password to be?"));
  

  if (isNaN(passwordLength)) {
      window.alert("Please enter a number.")
     return
  } 

  if (passwordLength < 8 || passwordLength > 128) {
      window.alert("please enter a value between 8-128 characters.")
     return
  }

  if (window.confirm("Would you to like include numbers?")){
      choiceArr = choiceArr.concat(numbers);
  }

  if (window.confirm("Would you like to include symboles?")) {
      choiceArr = choiceArr.concat(symbols);
  }

      if (window.confirm("Would you like to include lowercase letters?")) {
      choiceArr = choiceArr.concat(lowercase);
      }

 if (window.confirm("Would you like to include uppercase letters?"));{
     choiceArr = choiceArr.concat(uppercase);
  }

  return true;
}




