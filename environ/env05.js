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

function changeBackgroundImage() {
    let userChoice = prompt("Type: circus, stage, or carnival (type original to reset)");

    if (userChoice == "circus") {
        $("body").css("background-image", "url(images/circus.jpg)");
        $("#output").html("welcome to the circus!");
    }

    else if (userChoice == "stage") {
        $("body").css("background-image", "url('images/stage.jpg')");
        $("#output").html("all the world is a stage");
    }

    else if (userChoice == "carnival") {
        $("body").css("background-image", "url('images/lunaluna.png')");
        $("#output").html("Carnival background selected!");
    }

     else if (userChoice == "original") {
        $("body").css("background-image", "url('images/circus2.jpg')");
        $("#output").html("back home!");
    }

    else {
        $("#output").html("Unknown background choice.");
    }
}

$("#good-button").click(function () {
    changeBackgroundImage();
});