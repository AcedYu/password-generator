// My Global Arrays
var lowerAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't' ,'u', 'v', 'w', 'x', 'y', 'z'];
var upperAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialChar = [" ", "!", `"`, "#", "$", "%", "&", `'`, "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var formData = document.querySelector("form");
  var quantity = formData.quantity.value;
  var includeLow = formData.lower.checked;
  var includeUp = formData.upper.checked;
  var includeNum = formData.nums.checked;
  var includeSpec = formData.specials.checked;

  var password = generatePassword(quantity, includeLow, includeUp, includeNum, includeSpec);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // alert(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password Generation functions
var generatePassword = (length, lowercase, uppercase, numeric, special) => {
  var result = [];
  var validChars = [];
  // Return error message if length doesn't meet criteria
  if (length < 8 || length > 128) {
    return "Invalid password length selection. Please try again.";
  }
  // Return error message if all values are false
  if (!lowercase && !uppercase && !numeric && !special) {
    return "Password failed to compile. Please check the boxes for password character criteria.";
  }
  // Adds a lowercase character if lowercase option is checked
  if (lowercase) {
    result.push(lowerAlpha[Math.floor(Math.random() * lowerAlpha.length)]);
    validChars = validChars.concat(lowerAlpha);
  }
  // Adds an uppercase character if uppercase option is checked
  if (uppercase) {
    result.push(upperAlpha[Math.floor(Math.random() * upperAlpha.length)]);
    validChars = validChars.concat(upperAlpha);
  }
  // Adds a number if the number option is checked
  if (numeric) {
    result.push(nums[Math.floor(Math.random() * nums.length)]);
    validChars = validChars.concat(nums);
  }
  // Adds a special character if the special character option is checked
  if (special) {
    result.push(specialChar[Math.floor(Math.random() * specialChar.length)]);
    validChars = validChars.concat(specialChar);
  }
  // Populate the array with random characters from all available characters within the remaining length
  for (var i = result.length; i < length; i++) {
    result.push(validChars[Math.floor(Math.random() * validChars.length)]);
  }
  // Shuffle the Array
  result.sort(() => Math.random() - 0.5);

  // Turn the array into a string
  var password = result.join('');
  var message = `Your password is: \n ${password}`;
  // Return the generated password
  return message;
}