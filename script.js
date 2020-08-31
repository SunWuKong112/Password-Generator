// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var specialCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+-./:;<=>?@[\]^_~";
var passwordText = document.querySelector("#password");
var sp;
var randomLength;



// Add event listener to generate button
generateBtn.addEventListener("click", function()
{
  var max = document.querySelector("#max").value;
  var min = document.querySelector("#min").value;
  if (isNaN(max) || isNaN(min))
  {
    if(isNaN(max))
    {
      passwordText.textContent = "Invalid maximum number";
    }
    else if(isNaN(min))
    {
      passwordText.textContent = "Invalid minumum number";
    }
  }
  else
  {
    var hasSpecialCharacters = confirm("Would you like to use special characters?")
    if(!hasSpecialCharacters)
    {
      sp = false;
      writePassword(max, min, sp);
    }
    else
    {
      sp = true;
      writePassword(max, min, sp);
    }
  }
});

// Write password to the #password input
function writePassword(max, min, sp)
{
  console.log(max);
  console.log(min);
  randomLength = (Math.round(Math.random() * (parseInt(max) - parseInt(min)))+parseInt(min));
  console.log(randomLength);

  passwordText.textContent = generateCharacters(randomLength, sp);
}

//Creates the string which will be output as the password
function generateCharacters(randomLength, sp)
{
  var passwordArray = new Array;
  if(sp)
  {
    //Loop which calls starting with the minimum number of characters until it reaches the maximum
    for (let i = 0; i < randomLength; i++)
    {  
      //Adds a special character to the string
      var letterNum = Math.round(Math.random() * specialCharacters.length)+1;
      passwordArray.push(specialCharacters.charAt(letterNum));
    }
    password = passwordArray.toString();
    for (let i = -4; i < randomLength; i++)
    {
      password = password.replace(',', '');
    }
    console.log(password);
    return password;
  }
  else
  {
    //Loop which calls starting with the minimum number of characters until it reaches the maximum
    for (let i = 0; i < randomLength; i++)
    {
      var letterNum = Math.round(Math.random() * alphabet.length)+1;
      password.push(alphabet.charAt(letterNum));
    }
    password = passwordArray.toString();
    for (let i = 0; i < randomLength; i++)
    {
      password = password.replace(',', '');
    }
    console.log(password);
    return password;
  }
}