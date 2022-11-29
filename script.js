
// This is where I declared all of my global variables and arrays with the possible characters.
var choiceArr = [];
var password = [];
var passwordString = "";
var passwordLength = "";
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Assignment Code
var generateBtn = document.querySelector("#generate");







// This function takes the array with the chosen characters and randomizes them and puts them into a random password at the chozen length by the user.
function generatePassword () {

  for(i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length)
    password.push(choiceArr[randomIndex]);
    
  }
  passwordString = password.toString().replaceAll(',', '');
return passwordString;

  
}


// This is the prompts section that asks the user how many characters they would like they're password to be and also asks which characters 
//or numbers they would like to include in the password.
function prompts () {
  passwordLength = parseInt(window.prompt("How many characters would you like your password to be?"));
  

  if (isNaN(passwordLength)) {
      window.alert("Please enter a number.")
     return
  } 

  if (passwordLength < 8 || passwordLength > 128) {
      window.alert("please enter a value between 8-128 characters.")
     return
  }

  if (window.confirm("Would you to like include numbers?") === true){
      choiceArr = choiceArr.concat(numbers);
  }

  if (window.confirm("Would you like to include symboles?") === true) {
      choiceArr = choiceArr.concat(symbols);
  }

      if (window.confirm("Would you like to include lowercase letters?") === true) {
      choiceArr = choiceArr.concat(lowercase);
      }

 if (window.confirm("Would you like to include uppercase letters?") === true) {
     choiceArr = choiceArr.concat(uppercase);
  }

  
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correct = prompts();
  var passwordText = document.querySelector("#password");

  
    var updatedPassword = generatePassword();
    passwordText.value = updatedPassword;
    
    
   

}