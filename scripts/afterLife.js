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
            return "computer";
        }else if (computerWeapon === gamerWeapon) {
            return "tie";
        } else {
            return "gamer";
        }
};


function howManyRounds() {
//let nickName = sessionStorage.getItem("nickName");
    let rounds = sessionStorage.getItem("rounds");
};





window.onload = async function() {
    howManyRounds(); 

    const WEAPONS = ["rock", "paper", "scissors"];

    let characters = await loadData();
    let computerCharacter = assignComputerCharacter(characters);

    //let gamerCharacter = sessionStorage.getItem("characterChoice");
    let gamerCharacterId = "mysteryHuman";
    
    //let gamerWeapon = sessionStorage.getItem("weapon"); 
    let gamerWeapon = "paper"; 
    let computerWeapon = chooseComputerWeapon(WEAPONS);
    let gamerCharacter = getCharacterById(gamerCharacterId, characters);
    let winner = whoIsTheWinner(computerWeapon, gamerWeapon);




    
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
    
    //--------------------------------------------------
    // change to choose rigth animation *****************ATENTION***************
    //--------------------------------------------------

    let textBattle = document.querySelector(".textBattle");
    textBattle.addEventListener("animationend", function() {
        showRoundWinner(winner);
    });

    
    
};


function showRoundWinner(winner){
    let informationPlace = document.querySelector("#informationPlace");
    if (winner === "computer") {
        informationText = "Computer wins the Round";
    } else if (winner === "tie"){
        informationText = "Tie";
    } else {
        informationText = "You win";
    };
    informationPlace.textContent =  informationText;
};