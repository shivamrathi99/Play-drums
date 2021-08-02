// total buttons to add listener to
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//detecting clicks
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    //'this' will refer to the onwer(whichever button is clicked)
    //check working by --- console.log(this);
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//detecting button press
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//so we have passed event (can name it anything) happening as anonymous function parameter to make it accessible
// through the outer function of makeSound -- switch function
//now this event will show various parameters like --
// KeyboardEvent {isTrusted: true, key: "f", code: "KeyF", location: 0, ctrlKey: false, …}
//but we only need the key value that is pressent.. so we select the key property of the event object
//for that we use 'event.key'

// we can use switch statements to play different sounds from different keys by putting cases

//function to detect event

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

//adding animation to the keys

function buttonAnimation(keyvalue) {
  var activeButton = document.querySelector("." + keyvalue);

  //add the class pressed to the activebutton to give it styling
  activeButton.classList.add("pressed");
  //set timeout to remove the styling so that the button comes back in original state in 100ms or 1s;
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
