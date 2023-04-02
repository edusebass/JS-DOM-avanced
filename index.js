//logic js for the website

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//selecting the buttons witch boocle for and calling function for click events
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //Add sounds on a website
        if (numberOfDrumButtons === 2) {
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        }
    });
}


