// create a webpage that has a theme of buttons that when clicked:
// loads 10 gifs
// when gifs are clicked they move; and stop when clicked again.
// option to add button to the already populated array (looping)  DONE


// my array of initial characters
var characters = ["Spongebob Squarepants", "Patrick Star", "Squidward Tentacles", "Sandy Cheeks"];
console.log(characters);

// Using API from Giphy to "GET" method information and display gifs (10 gifs) code source function from ajax 6.2 - 10

function displayCharacterGifs (){
    var character = $(this).attr("data-name");
    // inputting the API key within the giphy search + character input 
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=l9gkVHZUmGEHlRJIS6uWSknP6FhEXMnj&q=" + character + "&limit=10&offset=1&rating=G&lang=en";
                 //"https://api.giphy.com/v1/gifs/search?api_key=l9gkVHZUmGEHlRJIS6uWSknP6FhEXMnj&q=    spongebob   &limit=10&offset=0&rating=PG&lang=en";
                 //"https://api.giphy.com/v1/gifs/search?api_keyl9gkVHZUmGEHlRJIS6uWSknP6FhEXMnj=&q=   spongebob     &limit=10&offset=1&rating=G&lang=en"
    // AJAX call to "GET" the character button pressed
    $.ajax({
        url: queryURL,
        method: "GET"
        //function method that applies the API info into <div>
    })
    .then(function(response) {
        console.log(response);
        console.log(queryURL);
        //div that holds the gif
        var characterGif = $("<div class='characterGif'>");
        // grabb GIF img url from API 
        var imgURL = response.data[i].url; //***** this might be the problem im facing */
        // creating an element to hold the gif/img
        var image = $("<img>").attr("src", imgURL);
        // append that image to html
        characterGif.append(image);

        console.log(response.data[i].url);
        console.log(response.url);
        
    });
}

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
    
    $(document).on("click", ".character", displayCharacterGifs);

// calling the renderButtons function to display buttons
renderButtons();