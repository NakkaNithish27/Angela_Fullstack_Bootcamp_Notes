var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function wrong() {
    var wrong = new Audio("sounds/wrong.mp3");
    $("body").addClass("game-over");
    wrong.play();
}

function check() {
    if (userClickedPattern.length !== 0) {
        if (userClickedPattern.toString() !== gamePattern.toString()) {
            wrong();
        }
    }
}

function addToGamePatternArray(color) {
    gamePattern.push(color);
    console.log(gamePattern);
}

function addToUserClickedPatternArray(buttonId) {
    userClickedPattern.push(buttonId);
}

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    $(document).keydown(function(event) { //to start the game
        if (event.key === "A" || "a") {
            clickButtonByComputer(randomChosenColour);
        }
        clickButtonByComputer(randomChosenColour);
        addToGamePatternArray(randomChosenColour);
        if (gamePattern.length > 1) {
            userClickedPattern.splice(0, userClickedPattern.length);
        }
    });
}

nextSequence();
var numberOfDrumButtons = document.querySelectorAll('.btn').length
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll('.btn')[i].addEventListener("click", function() {
        var buttonId = this.getAttribute("id");
        clickButtonByPlayer(buttonId);
    });
}

//button sound and animation
function flash(buttonId) {
    $("#" + buttonId).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

function clickButtonByComputer(buttonId) {
    switch (buttonId) {
        case "green":
            var green = new Audio("sounds/green.mp3")
            green.play();
            flash(buttonId);
            break;
        case "red":
            var red = new Audio("sounds/red.mp3")
            red.play();
            flash(buttonId);
            break;
        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3")
            yellow.play();
            flash(buttonId);
            break;
        case "blue":
            var blue = new Audio("sounds/blue.mp3")
            blue.play();
            flash(buttonId);
            break;
        default:

    }
}

function clickButtonByPlayer(buttonId) {
    switch (buttonId) {
        case "green":
            var green = new Audio("sounds/green.mp3")
            green.play();
            flash(buttonId);
            addToUserClickedPatternArray(buttonId);
            check();
            nextSequence();
            break;
        case "red":
            var red = new Audio("sounds/red.mp3")
            red.play();
            flash(buttonId);
            addToUserClickedPatternArray(buttonId);
            check();
            nextSequence();
            break;
        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3")
            yellow.play();
            flash(buttonId);
            addToUserClickedPatternArray(buttonId);
            check();
            nextSequence();
            break;
        case "blue":
            var blue = new Audio("sounds/blue.mp3")
            blue.play();
            flash(buttonId);
            addToUserClickedPatternArray(buttonId);
            check();
            nextSequence();
            break;
        default:
            console.log(buttonId);

    }


}