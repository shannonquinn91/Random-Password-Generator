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
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


function generatePassword() {
  var length = prompt('How many characters do you want in your password?');
    if (isNaN(length)){
      alert('Your password length must be a number between 8 and 129')
      return; 
    }
    if (length < 8){
      alert('Your password must be at least 8 characters.')
      return;
    }
    if (length < 128){
      alert('Your password must be less than 128 characters.')
      return;
    }
  var includeLowerCase = confirm('Click OK to include lower case characters in your password.');
  var includeUpperCase = confirm('Click OK to include upper case characters in your password.');
  var includeSpecCharacters = confirm('Click OK to include special characters in your password.');
  var includeNums = confirm('Click OK to include numeric characters in your password.');
  
  if (includeLowerCase === false && 
    includeUpperCase === false && 
    includeSpecCharacters === false && 
    includeNums === false) {
    alert('Please click OK on at least one character type to generate password.')
    return;
    }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
