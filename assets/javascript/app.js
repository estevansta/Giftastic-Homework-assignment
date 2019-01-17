// create a webpage that has a theme of buttons that when clicked:
// loads 10 gifs
// when gifs are clicked they move; and stop when clicked again.
// option to add button to the already populated array (looping) 


// my array of initial characters
var characters = ["Spongebob Squarepants", "Patrick Star", "Squidward Tentacles", "Sandy Cheeks"];
console.log(characters);

// create a function to display character names from the global variable "characters"
// function renderButtons 
function renderButtons(){
    $(".character-buttons").empty();
    // for loop to loop through the character array
    for (var i = 0; i < characters.length; i++) {
        //using the for loop we can dynamically generate the buttons that loop through the character array
        //using jquery to generate the <button> tag in the character-button class
        var character = $("<button>");
        // add class to the button "character"
        character.addClass("character");
        // add data-attribute which is the name of each character "spongebob squarepants"
        character.attr("data-name", characters[i]);
        // text for the buttons "<button>spongebob squarepants</button>""
        character.text(characters[i]);
        // add the buttons to html by appending with $ .class to 
        $(".character-buttons").append(character);
    }
}

// now form button clicked needs to submit and add character to the class array
    //on click function to the add-character class
    $("#add-character").on("click", function(event) {
        //code from ajax 6.2 - 08 prevent defaulting when submitting a form
        event.preventDefault();
        // taking the input from user form textbox
        var input = $("#character-input").val().trim();
        // take input and add to array
        characters.push(input);
        renderButtons();
    });
    

// calling the renderButtons function to display buttons
renderButtons();