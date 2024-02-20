// Input variables: 

let enter;
let confirmNumber;
let confirmCharacter;
let confirmUppercase;
let confirmLowercase;

// Password variable values: 

// Special characters 

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Numbers characters

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// Alphabetical characters

letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Uppercase conversion

space = [];

// Choices declared outside the if statement so they can be concatenated upon condition
let choices;

// choice for uppercase

let toUpper = function (y) {

  return y.toUpperCase();

};

// makes variable for uppercase conversion

letter2 = letter.map(toUpper);

let get = document.querySelector("#generate");

get.addEventListener("click", function () {

  ps = generatePassword();

  document.getElementById("password").placeholder = ps;

});

// begin functions to start generating password

function generatePassword() {

  // Prompt for user input

  enter = parseInt(prompt("Choose between 8 and 128 characters"));

  //  If statement for user confirmation 

  if (!enter) {

    alert("This needs a value");

  } else if (enter < 8 || enter > 128) {

    // confirms user input

    // Starts prompts for user input

    enter = parseInt(prompt("Please choose between 8 and 128"));


    
  } else {
  
    // Continues once user input is validated
  
         confirmNumber = confirm("will this have numbers?");
        confirmCharacter = confirm("will this have special characters?");
        confirmUppercase = confirm("Will this have Uppercase letters?");
        confirmLowercase = confirm("Will this have Lowercase letters?");
    };

    // Else if for there are 4 negative options
    
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You have to choose something!!");

    }
    
    // 1st if statement that uses user input prompts to determine choices
    // Else if for 4 positive options
    
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, letter, letter2);
    }
    
    // Else if for 3 positive options
    
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, letter2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, letter);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(letter, letter2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(letter, letter2);
    }
    
    // Else if for 2 positive options 
    
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(letter);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(letter2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = letter.concat(letter2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(letter2);
    }
    
    // Else if for 1 positive option
    
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = letter;
    }
    // added space variable to fill uppercase conversion
    
    else if (confirmUppercase) {
        choices = space.concat(letter2);
    };

    // password variable is a placeholder for an array that is user generated for the length
    
    let password = [];

    
    // Random selection for all variables: 
    
    for (let i = 0; i < enter; i++) {
        let pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    
    // This joins the password array and converts it to a string
    
    let ps = password.join("");
    UserInput(ps);
    return ps;
}
// This puts the password value into the textbox
// Changed function input to use textcontent

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

// This copies the password to the clipboard

let copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});
