//Detecting Button press
let numberOfDrumButtons = document.querySelectorAll(".drum");
for(let i = 0; i < numberOfDrumButtons.length; i++)
{
    numberOfDrumButtons[i].addEventListener("click", function() {

        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//Detecting Keyboard press
document.addEventListener("keydown", function(event){
    const keyname = event.key;
    makeSound(keyname);
    buttonAnimation(keyname);

});


function makeSound(key){
    let audio = null;
    switch (key)
    {
     case "w":
         audio = new Audio("./sounds/tom-1.mp3");
         audio.play();
         break;
     case "a":
         audio = new Audio("./sounds/tom-2.mp3");
         audio.play();
         break;
     
     case "s":
         audio = new Audio("./sounds/tom-3.mp3");
         audio.play();
         break;
     case "d":
         audio = new Audio("./sounds/tom-3.mp3");
         audio.play();
         break;
     case "j":
         audio = new Audio("./sounds/crash.mp3");
         audio.play();
         break;

     case "k":
         audio = new Audio("./sounds/snare.mp3");
         audio.play();
         break;

     case "l":
         audio = new Audio("./sounds/kick-bass.mp3");
         audio.play();
         break;
     
     default: console.log(buttonInnerHTML);
    } 
}

function buttonAnimation(currentKey)
{
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
         activeButton.classList.remove("pressed");
    },100);
}