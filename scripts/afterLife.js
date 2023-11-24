//let nickName = sessionStorage.getItem("nickName");
let nickName = "Edda";


async function loadData() {
    const response = await fetch("/data/charactersData.json");
    return await response.json();
}

function assignComputerCharacter (characters) {
    let computerCharacterIndex = Math.floor(Math.random() * characters.length);
    return characters[computerCharacterIndex];
    
};

function getCharacterById(id, characters) {
    for (let character of characters) {
        if (character.id === id) {
            return character;
        }
    }
}

function chooseComputerWeapon(weapons) {
    let randomWeapon = Math.floor(Math.random()* weapons.length);
    let computerWeaponIndex = randomWeapon;
    return weapons[computerWeaponIndex];
};

function whoIsTheWinner (computerWeapon, gamerWeapon) {
    if ((computerWeapon === 'paper' && gamerWeapon === 'rock') || 
        (computerWeapon === 'scissors' && gamerWeapon === 'paper') ||
        (computerWeapon === 'rock' && gamerWeapon === 'scissors')) {
            return "computer"
        }else if (computerWeapon === gamerWeapon) {
            return "tie";
        } else {
            return "gamer"
        }
};


window.onload = async function() {

    const WEAPONS = ["rock", "paper", "scissors"];

    let characters = await loadData();
    let computerCharacter = assignComputerCharacter(characters);

    //let gamerCharacter = sessionStorage.getItem("characterChoice");
    let gamerCharacterId = "mysteryHuman";
    //let gamerWeapon = sessionStorage.getItem("weapon"); 
    let gamerWeapon = "paper"; 

    let gamerCharacter = getCharacterById(gamerCharacterId, characters);
    let computerWeapon = chooseComputerWeapon(WEAPONS);

    let winner = whoIsTheWinner(computerWeapon, gamerWeapon);

    console.log(winner);

    
    let characterImagePlace = document.querySelector("#characterChoice");
    let characterNamePlace = document.querySelector("#characterNamePlace");

    
    let nickNamePlace = document.querySelector("#nickNamePlace");
    let computerCharacterNamePlace = document.querySelector("#computerCharacterNamePlace");
    let computerCharacterImagePlace = document.querySelector("#computerChoice");
    
    
    
    characterImagePlace.src = gamerCharacter.image;
    characterNamePlace.textContent = gamerCharacter.name;
    nickNamePlace.textContent = nickName;
    computerCharacterNamePlace.textContent = computerCharacter.name;
    computerCharacterImagePlace.src = computerCharacter.image;


    
};