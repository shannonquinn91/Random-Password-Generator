# Random-Password-Generator
This project was to create a random password generator using different types of characters. 

My TA Paul Laird helped me with this during office hours! 

Using the starter code, I started by creating a function called generatePassword. I could tell that I would need a function with this name based on the variable inside the writePassword function. 

All of the code I wrote falls inside the generatePassword function. 

When the user clicks on the "Generate a Password" button, the brower will issue prompts and confirms for the user. The prompt asks the user how many characters they would like in their password. 

I added some if statements to the prompt to ensure that the generator will work properly. The first if statement takes into account that the user may enter something other than a number in the prompt. So if the user anything that is not a number (NaN), the browser will alert the user to enter a valid number between 8 and 128 for the length of their password. After the user clicks ok on the alert, the user will have to click the "Generate a Password" button again to restart the prompts and confirms. Next, I entered an if statement for if the user enters a number less than 8. If the user enters 0-7, the browser will alert the user that their password must contain at least 8 characters. Again, once the user clicks ok on the alert, they will have to click "Generate a Password" again to restart the process. I added a simliar if statement for if the user enters a number larger than 128. 

I set this prompt equal to the variable length to use in the for loop later in the code. 

The next four alerts are confirms, asking the user to select (by clicking ok for yes, or cancel for no) the types of characters that will appear in their password. I included four options: lower case letters, upper case letters, a few special characters, and numbers 0-9. 

Next, I added an if statement so that if the user clicks cancel on all four types of characters, the browser will alert the user to click ok on at least one type of character. Once the user clicks ok on the alert, they will have to click on the "Generate a Password" button to start the process over. 

Next, I created an empty array called allCharacters followed by if statements that will fill the array with elements based on which characters the user confirmed they want in their password. 

**I tried using arrays of all the characters and using .concat to combine them, but they were entering into allCharacters as separate arrays rather than separate elements. I came to this solution by adding the characters using .push, rather than arrays.

The next variable is password with an empty string so that the password will appear in the box as a string. 

Next, I chose to use a for loop using the length of the new array allCharacters. In order for the loop to choose a random element in the array, I used the Math.random and Math.floor functions and multiplied them by the length of the array allCharacters. 

Then I used password to make sure the loop puts a random character in the string called password, which will appear in the box on the page. This for loop will run continuosly for the number of characters the user specified in the prompt using the variable length. 

![Open Page]("./Assets/shannonquinn91.github.io_Random-Password-Generator_.png"); 

![With Password]("./Assets/shannonquinn91.github.io_Random-Password-Generator_.png"); 

