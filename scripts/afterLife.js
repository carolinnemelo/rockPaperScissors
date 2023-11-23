//let gamerCharacter = sessionStorage.getItem("characterChoice");
let gamerCharacter = "mysteryHuman";
let computerCharacter = "";
let computerWeapon = "";
//let nickName = sessionStorage.getItem("nickName");
let nickName = "Edda";

const cardsData = {
    smellyCat: {
        name: "Smelly Cat",
        powerDescription: "Scent Conjurer",
        image: "/images/player-cat.png"
    },
    skellington: {
        name: "Skellington",
        powerDescription: "Bone Control",
        image: "/images/player-skeleton.png"
    },
    mysteryHuman: {
        name: "Mystery Human",
        powerDescription: "Speedy Fingers",
        image: "/images/player-mysteryman.png"
    }
};

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

function assignComputerCharacter () {
    let randomNumber = Math.floor(Math.random()* 3);
    if (randomNumber === 0) {
        computerCharacter = "smellyCat"
    } else if (randomNumber === 1) {
        computerCharacter = "skellington"
    } else {
        computerCharacter = "mysteryHuman"
    }
};

function iscomputerWeapon(computerCharacter) {
    let randomWeapon = Math.floor(Math.random()* 3);
    computerWeapon = characterData.computerCharacter[randomWeapon];

};

window.onload = function() {
    
    assignComputerCharacter();
    iscomputerWeapon();

    let characterImagePlace = document.querySelector("#characterChoice");
    let characterNamePlace = document.querySelector("#characterNamePlace");
    let nickNamePlace = document.querySelector("#nickNamePlace");
    let computerCharacterNamePlace = document.querySelector("#computerCharacterNamePlace");
    let computerCharacterImagePlace = document.querySelector("#computerChoice");



    characterImagePlace.src = cardsData[gamerCharacter].image;
    characterNamePlace.textContent = cardsData[gamerCharacter].name;
    nickNamePlace.textContent = nickName;
    computerCharacterNamePlace.textContent = cardsData[computerCharacter].name;
    computerCharacterImagePlace.src = cardsData[computerCharacter].image;

};

