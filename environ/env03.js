let environmentTitle = "The Circus Tent";

let environmentElements = ["clown", "glitter", "poem", "paper heads"];

let mainEntity = {
    name: "the clown",
    type: "recognizable being",
    mood: "tired",
    isMoving: false,
    favoriteElement: environmentElements[2]
};

let comfortCount = 0;

$("#comfort-button").click(function () {

    comfortCount = comfortCount + 1;

    $("#comfort-button").html("You have comforted the clown " + comfortCount + " times");

    let arrayPosition = comfortCount - 1;

    console.log(comfortCount);
    console.log(arrayPosition);

});


let glitterCount = 0;

let glitterPhrases = [
    "you shine!",
    "you sparkle",
    "have some glitter!",
    "you're a star"
];

$("#glitter-button").click(function () {

    glitterCount = glitterCount + 1;

    let arrayPosition = glitterCount - 1;


    let currentPhrase = glitterPhrases[arrayPosition];

    let message = "<p>" + currentPhrase + "</p>";

    $("#glitter-output").html(message);

    console.log(glitterCount);
    console.log(currentPhrase);

});