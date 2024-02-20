// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword((length) = nums + lets + symbs);
  var passwordText = document.querySelector("#password");
  var nums = 123456789;
  var lets = abcdefghijklmnopqrstuvwxyz;
  var symbs = !@#$%^&*();
  var length = 12

  passwordText.value = password;
  
  console.log(generatePassword)



}

//  Add event listener to generate button
generateBtn.addEventListener("click", writePassword);