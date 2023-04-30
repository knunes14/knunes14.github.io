const gameContainer = document.getElementById("game");
let firstCard = null;
let secondCard = null;
let cardsFlipped = 0;
let noClicking = false;


const COLORS = [
 "#C4E2E2", //light blue
 "#F8A54A", //light orange
 "#797E5C", //green
 "#FA9584", //dark orange
 "#53B9AE", //aqua
 "#C4E2E2",
 "#F8A54A",
 "#797E5C",
 "#FA9584",
 "#53B9AE"
];


function shuffle(array) {
 let counter = array.length;


 // While there are elements in the array
 while (counter > 0) {


   // Pick a random index
   let index = Math.floor(Math.random() * counter);


   // Decrease counter by 1
   counter--;


   // And swap the last element with it
   let temp = array[counter];
   array[counter] = array[index];
   array[index] = temp;
 }


 return array;
}


let shuffledColors = shuffle(COLORS);


// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
 for (let color of colorArray) {
   const newDiv = document.createElement("div");
   newDiv.classList.add(color);
   newDiv.addEventListener("click", handleCardClick);
   gameContainer.append(newDiv);
 }
}


function handleCardClick(event) {
 if (noClicking) return;
 if (event.target.classList.contains("flipped")) return;


 let card = event.target;
 let color = card.classList[0];
 card.style.backgroundColor = color;
 card.classList.add("flipped");


 if (!firstCard) {
   firstCard = card;
 } else if (!secondCard) {
   secondCard = card;
 }


 if (firstCard && secondCard) {
   noClicking = true;
   let match = firstCard.className === secondCard.className;
   if (match) {
     cardsFlipped += 2;
     firstCard.removeEventListener("click", handleCardClick);
     secondCard.removeEventListener("click", handleCardClick);
     firstCard = null;
     secondCard = null;
     noClicking = false;
   } else {
     setTimeout(function () {
       firstCard.style.backgroundColor = "";
       secondCard.style.backgroundColor = "";
       firstCard.classList.remove("flipped");
       secondCard.classList.remove("flipped");
       firstCard = null;
       secondCard = null;
       noClicking = false;
     }, 1000);
   }
 }
 if (cardsFlipped === shuffledColors.length) {
   setTimeout(function () {
     alert("Game over!");
   }, 500);
 }
}


createDivsForColors(shuffledColors);