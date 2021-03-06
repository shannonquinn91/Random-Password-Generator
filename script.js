// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  var length = prompt('How many characters do you want in your password?');
  //make sure user entered a number and if they didn't...  
  if (isNaN(length)){
      alert('Your password length must be a number between 8 and 129')
      return; 
    }
    //make sure user entered a number greater than 8 and if they didn't...
    if (length < 8){
      alert('Your password must be at least 8 characters.')
      return;
    }
    //make sure user entered a number less than 128 and if they didn't...
    if (length > 128){
      alert('Your password must be less than 128 characters.')
      return;
    }
  //Confirm for other types of characters
  var includeLowerCase = confirm('Click OK to include lower case characters in your password.');
  var includeUpperCase = confirm('Click OK to include upper case characters in your password.');
  var includeSpecCharacters = confirm('Click OK to include special characters in your password.');
  var includeNums = confirm('Click OK to include numeric characters in your password.');
  //Requires user to confirm at least one type of character
  if (includeLowerCase === false && 
    includeUpperCase === false && 
    includeSpecCharacters === false && 
    includeNums === false) {
    alert('Please click OK on at least one character type to generate password.')
    return;
    }
  
    //combines available characters to one large array including all characters
    var allCharacters = []
      if (includeLowerCase) {
        allCharacters.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')
      }
      if (includeUpperCase) {
        allCharacters.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q,', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')
      }
      if (includeSpecCharacters) {
        allCharacters.push('!', '@', '#', '$', '?', '~')
      }
      if (includeNums) {
        allCharacters.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
      }

      var password = "";

      //loop through array of all characters the number of times the user enters as length
    for (var i = 1; i <= length; i++) {
      var index = Math.floor(Math.random () * allCharacters.length);
      password += allCharacters[index];
    }
  return password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
