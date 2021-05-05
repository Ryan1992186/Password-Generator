// Assignment Code
var generateBtn = document.querySelector("#generatePassword");
var passwordTxt = document.getElementById("password");
// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  console.log ( "Password Generator button was clicked")
  var passwordText = document.querySelector("#password");
  var passwordLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  if (passwordLength > 7 && passwordLength < 129) {
    // This is where the remainder of the password generator code will be
  var userResponseLowerCase = confirm ("do you want your password to be lower case?")
  var userResponseUpperCase = confirm ("do you want your password to be upper case?")
  var userResponseNumericValue = confirm ("do you want your password to contain numbers?")
  var userResponseSpecialCharacters = confirm ("do you want your password to contain special characters?")
  var userResponse = {
    userResponseLowerCase,
    userResponseUpperCase,
    userResponseNumericValue,
    userResponseSpecialCharacters
  }
    console.log (userResponse)
  // this is where my password array will be
  var resultArray = []
    if (userResponseLowerCase === true){
      resultArray.push(lowerCasedCharacters)}
  } else {alert ("lower case required")}

  var resultArray = []
    if (userResponseUpperCase === true){
      resultArray.push(upperCasedCharacters)
  } else {alert ("upper case required")}

  var resultArray = []
    if (userResponseNumericValue === true){
      resultArray.push(numericCharacters)
  } else {alert ("numeric value required")}

  var resultArray = []
    if (userResponseSpecialCharacters === true){
      resultArray.push(specialCharacters)
  } else {alert ("special characters required")}

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

