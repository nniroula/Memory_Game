
const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
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

let firstCard = '';
let secondCard = '';
let notClickedCard = '';

function handleCardClick(event) {
  if (notClickedCard){
    return '';
  }
  if (event.target.classList.contains("colors")){
    return '';
  }
  event.target.style.backgroundColor = event.target.classList; //colors are in the classList

  if ((firstCard !== true) || (secondCard !== true) ){  
    event.target.classList.add("colors");
    // one of two things has to happen-either first clicked card should be firstCard or firstCard shoulb be event
    firstCard = firstCard || event.target;
    if(event.target === firstCard){
      secondCard =  null;
    }else{
      secondCard = event.target;
    }
  }

    if((firstCard === firstCard) && (secondCard === event.target)){
      notClickedCard;
    if(firstCard.className === secondCard.className) {
      firstCard.removeEventListener("click", handleCardClick);
      secondCard.removeEventListener("click", handleCardClick);
      firstCard =  secondCard = notClickedCard = '';
    } else {
      setTimeout(function() {
        firstCard.style.backgroundColor = secondCard.style.backgroundColor = null;
        firstCard.classList.remove("colors");
        secondCard.classList.remove("colors");
        firstCard =  secondCard = notClickedCard = '';
      }, 500);
    }
  }
}
createDivsForColors(shuffledColors);


