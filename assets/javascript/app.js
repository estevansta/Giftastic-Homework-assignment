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
    // for loop to loop through the character array
    for (var i=0; i < characters.length; i++); {
        //using the for loop we can dynamically generate the buttons that loop through the character array
        //using jquery to generate the <button> tag in the character-button class
        var character = $("<button>");

    }
}

// calling the renderButtons function to display buttons
renderButtons();