// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q,', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specCharacters = ['!', '@', '#', '$', '?', '~']; 


function generatePassword() {
  var length = prompt('How many characters do you want in your password?');
    if (isNaN(length)){
      alert('Your password length must be a number between 8 and 129')
      return; 
    }
  var includeLowerCase = confirm('Do you want lower case letters in your password?');
  var includeUpperCase = confirm('Do you want upper case letters in your password?');
  var includeSpecCharacters = confirm('Do you want to include special characters in your password?');
  var includeNums = confirm('Do you want to include numbers in your password?');
  var text = Math.floor(Math.random() * lowerCase.length);
  var first = lowerCase[text];
  return first;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
