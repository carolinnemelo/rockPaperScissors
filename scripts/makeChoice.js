const playerData = [
    {
        name: "Smelly Cat",
        powerDescription: "Scent Conjurer",
        image: "/images/player-cat.png",
        Spookometer: "margin-left: 35%;",
        rock: "/images/rock-cat.png",
        paper: "/images/paper-cat.png", 
        scissors: "/images/scissors-cat.png" 

    },
    {
        name: "Skellington",
        powerDescription: "Bone Control",
        image: "/images/player-skeleton.png",
        Spookometer: "margin-left: 40%;",
        rock: "/images/rock-skeleton.png",
        paper: "/images/paper-skeleton.png", 
        scissors: "/images/scissors-skeleton.png" 

    },
    {
        name: "Mystery Human",
        powerDescription: "Speedy Fingers",
        image: "/images/player-mysteryman.png",
        Spookometer: "margin-left: 70%;",
        rock: "/images/rock-human.png",
        paper: "/images/paper-human.png", 
        scissors: "/images/scissors-human.png" 

    }

]

const weaponElement = document.querySelector("#weapon");
let currentIndex = 0;
const rightBtn = document.querySelector("#buttonRight");
const leftBtn = document.querySelector("#buttonLeft");

function changePlayer(steps) {
    currentIndex = (currentIndex + steps + playerData.length) % playerData.length;
    weaponElement.src = playerData[currentIndex];
  }


rightBtn.addEventListener("click", function() {
    changePlayer(1)
  });
  
leftBtn.addEventListener("click", function() {
    changePlayer(-1)
  });
