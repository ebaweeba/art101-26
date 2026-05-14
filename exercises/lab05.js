function askNumber(whatNumber) {
    let userNumber = prompt("Guess 1-10?");

    if (userNumber == whatNumber) {
        $("#output").html("You got it!");
    }
    else {
        $("#output").html("Nope, try again!");
    }
}

$("#good-button").click(function () {
    askNumber(2);
});