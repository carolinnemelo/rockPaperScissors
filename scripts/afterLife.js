let gamerCharacter = sessionStorage.getItem("characterChoice");

let gamerWeaponChoice = sessionStorage.getItem("weapon", weapons[currentWeapon])
let computerCharacter = "";

const weapons = ["ROCK", "PAPER", "SCISSORS"];
const characterData = {
    smellyCat: [
        "/images/rock-cat.png",
        "/images/paper-cat.png",
        "/images/scissors-cat.png"
    ],
    skellington: [
        "/images/rock-skeleton.png",
        "/images/paper-skeleton.png",
        "/images/scissors-skeleton.png"
    ],
    mysteryHuman: [
        "/images/rock-human.png",
        "/images/paper-human.png",
        "/images/scissors-human.png"
    ]
};


function isComputerCharacter(computerCharacter) {
    if (computerCharacter ===  
}