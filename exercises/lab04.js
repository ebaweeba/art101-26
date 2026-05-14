let count = 0;

let buttonCreature = {
    name: "button eyes",
    species: "interface creature",
    favoriteFood: "clicks",
    currentMood: ["lost", "excited", "brave", "dramatic",
        "hopeful", "adventurous"]
};

$("#needy-button").click(function () {

    count = count + 1;

    $("#needy-button").html("You clicked me " + count + " times");

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.currentMood[arrayPosition];

    let message = "<p>My name is " + buttonCreature.name + ".</p>";

    message = message + "<p>I am an " + buttonCreature.species + ".</p>";

    message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";

    message = message + "<p>My current mood is " + currentMood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});