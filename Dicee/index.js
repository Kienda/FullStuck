const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");
const tittle = document.querySelector("h1");
let player1;
let player2;

function diceeChange() {
  //Generating the random numbers for the players
  player1 = Math.floor(Math.random() * 6 + 1);
  player2 = Math.floor(Math.random() * 6 + 1);

  //handling the displayed message
  if (player1 > player2) {
    tittle.innerHTML = "Player1 Wins";
  } else if (player1 < player2) {
    tittle.innerHTML = "Player2 Wins";
  } else {
    tittle.innerHTML = "Tie";
  }

  //setting the images based the gerated number
  image1.setAttribute("src", "images/dice" + player1 + ".png");
  image2.setAttribute("src", "images/dice" + player2 + ".png");


}

diceeChange();