// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var specialCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+-./:;<=>?@[\]^_~";
var passwordText = document.querySelector("#password");
var password = '';
var sp;



// Add event listener to generate button
generateBtn.addEventListener("click", function()
{
  var max = document.querySelector("#max");
  var min = document.querySelector("#min");
  if (!isNaN(max) || !isNaN(min))
  {
    if(!isNaN(max))
    {
      passwordText.textContent = "Invalid maximum number";
    }
    else if(!isNaN(min))
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
  var randomLength = Math.random() * (max - min + 1) + min;
      

  passwordText.textContent = generateCharacters(randomLength, sp);
}

//Creates the string which will be output as the password
function generateCharacters(randomLength, sp)
{
  var i;
  if(sp)
  {
    //Loop which calls starting with the minimum number of characters until it reaches the maximum
    while (i = 0, i < randomLength, i++)
    {  
        //Adds a special character to the string
        var letterNum = Math.floor(Math.random() * specialCharacters.length)+1;
        password += specialCharacters.charAt(letterNum);
    }
    console.log(password);
    return password;
  }
  else
  {
    //Loop which calls starting with the minimum number of characters until it reaches the maximum
    while (i - 0, i < randomLength, i++)
    {
      var letterNum = Math.floor(Math.random() * alphabet.length)+1;
      password += alphabet.charAt(letterNum);
    }
    console.log(password);
    return password;
  }
}

