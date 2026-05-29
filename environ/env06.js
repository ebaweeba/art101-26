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
    "twinkle twinkle little star!"
    "you're so bright!"
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

$("#background-button").click(function () {
    changeBackgroundImage();
});






let following = false;

$("#creature1").click(function () {
  $(this).toggleClass("transformed");
  $("#thought1").text("(hint: click over and over and it looks like i'm dancing!)");
});

$("#creature1").hover(
  function () {
    $("#thought1").stop(true, true).slideDown(300);
    $("#thought1").text("hello, my name is mr. cat! i play the banjo. click on me to dance!");
  }
);

$(document).keydown(function (event) {
  if (event.key === " " || event.code === "Space") {
    event.preventDefault();

    following = !following;
    $("#creature1").toggleClass("following");

    if (following === true) {
      $("#thought1").text("where are you taking me?!");
    } else {
      $("#thought1").text("this spot has good acoustics.");
    }
  }
});

$(document).mousemove(function (event) {
  if (following === true) {
    $("#creature1").css({
      left: event.pageX - $("#scene").offset().left + 30,
      top: event.pageY - $("#scene").offset().top + 30
    });
  }
});