
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Assigned variables for password criteria
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@,#$%&*{}[]/\\+=";
var criteria = "";
//created function to generate password
function generatePassword(){
  //set result variable for output
  var results ="";
//set prompt for length and return function for inputs outside of parameter
  var length = prompt("What is the length of your desired password? Please select between 8 and 128 characters.");
  if (isNaN(length)){
    alert("you must input a number!");
    return generatePassword()
  }
  if (length <8 || length > 128){
    alert("please choose a number between 8 and 128.")
    return generatePassword()
  }
//set confirmation boxes for password criteria options
  var includesLower = confirm("Would you like to include lower case letters?")
  var includesUpper = confirm("Would you like to include upper case letters?")
  var includesNumbers = confirm("Would you like to include numbers?")
  var includesSpec = confirm("Would you like to include special characters?")

//set return function if none of the criteria is selected 
  if(!includesLower && !includesUpper && !includesNumbers && !includesSpec){
    alert("Please select at least one criteria for your password")
    return generatePassword()
  }
  //if statements for inclusion of characters into password criteria
  if (includesLower){
    criteria += lower
  }
  if (includesUpper){
    criteria += upper
  }
  if (includesNumbers){
    criteria += numbers
  }
  if (includesSpec){
    criteria += special
  }
//for statement creating randomly generated password using length,criteria of included characters and math random
  for(var i = 0; i < length; i++){
    results += criteria.charAt(Math.floor(Math.random() * criteria.length));
  }
return results;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);