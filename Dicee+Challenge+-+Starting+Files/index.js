//randome and return a random number
function changeDice(ele)
{
    //random from 1 to 6
let randomNumber1 = Math.floor((Math.random() * 6)) + 1;

let randomDiceImgge = "./images/dice" + randomNumber1 + ".png";
ele.setAttribute("src", randomDiceImgge);//settrubute of src

return randomNumber1;
}

//get class name of object and return a array because in html having 2 object dice
let dice = document.getElementsByClassName("dice");
let ele1 = dice[0].lastElementChild;
let ele2 = dice[1].lastElementChild;

let ran1 = changeDice(ele1);
let ran2 = changeDice(ele2);

//getting tag h1 by querySelector
let title = document.querySelector("h1");

if(ran1 === ran2)
{
    //change text in h1
    title.innerHTML = "Draw!";
}
else
{
    if(ran1 > ran2)
    {
        title.innerHTML = "Player 1 Wins!";
    }
    else
    {
        title.innerHTML = "Player 2 Wins!";
    }
}