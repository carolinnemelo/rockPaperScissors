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

const weapons = ["rock", "paper", "scissors"];

const weaponName = document.querySelector("#weaponName");
const weaponElement = document.querySelector("#weapon");
let currentWeaponIndex = 0;
const rightBtn = document.querySelector("#buttonRight");
const leftBtn = document.querySelector("#buttonLeft");

function changeWeapon(steps) {
    let selectedPlayer = playerData[1];
    
    currentWeaponIndex = (currentWeaponIndex + steps + weapons.length) % weapons.length;
    let currentWeapon = weapons[currentWeaponIndex]
    weaponElement.src = selectedPlayer[currentWeapon];
    weaponName.textContent =  currentWeapon;

  }




rightBtn.addEventListener("click", function() {
    changeWeapon(1)
  });
  
leftBtn.addEventListener("click", function() {
    changeWeapon(-1)
  });
