

//let nickName = "Edda";
const mySessionObject = JSON.parse(sessionStorage.getItem("commonSessionObjectInSS"));
let nickName = mySessionObject.player.nickName;



async function loadData() {
    const response = await fetch("/data/charactersData.json");
    return await response.json();

}

function assignComputerCharacter(characters) {
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
    let randomWeapon = Math.floor(Math.random() * weapons.length);
    let computerWeaponIndex = randomWeapon;
    return weapons[computerWeaponIndex];
};


function howManyRounds() {
    rounds = mySessionObject.score.numberOfRounds;
    //console.log(rounds);
};




window.onload = async function () {



    const WEAPONS = ["rock", "paper", "scissors"];

    let rounds = howManyRounds();
    let characters = await loadData();
    let computerCharacter = assignComputerCharacter(characters);

    //let gamerCharacterId = mySessionObject.player.characterChoiceId;
    let gamerCharacterId = "skellington";


    //let gamerWeapon = sessionStorage.getItem("weapon"); 
    let gamerWeapon = "paper";
    let computerWeapon = chooseComputerWeapon(WEAPONS);
    let gamerCharacter = getCharacterById(gamerCharacterId, characters);
    let roundWinner = whoIsTheRoundWinner(computerWeapon, gamerWeapon);




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
    // change to choose right animation *****************ATENTION***************
    //--------------------------------------------------

    let textBattle = document.querySelector(".textBattle");
    textBattle.addEventListener("animationend", function () {
        showRoundWinner(roundWinner);
        changeScore(roundWinner);
    });



};

// after the animation comes the container with the weapons 


function whoIsTheRoundWinner(computerWeapon, gamerWeapon) {
    if ((computerWeapon === 'paper' && gamerWeapon === 'rock') ||
        (computerWeapon === 'scissors' && gamerWeapon === 'paper') ||
        (computerWeapon === 'rock' && gamerWeapon === 'scissors')) {
        return "computer";
    } else if (computerWeapon === gamerWeapon) {
        return "tie";
    } else {
        return "gamer";
    }
};

function showRoundWinner(roundWinner) {
    let informationPlace = document.querySelector("#informationPlace");
    if (roundWinner === "computer") {
        informationText = "Computer wins the Round";
    } else if (roundWinner === "tie") {
        informationText = "Tie, try again.";
    } else {
        informationText = "You win the round";
    };
    informationPlace.textContent = informationText;
};


function changeScore(roundWinner) {

    gamerScore = mySessionObject.score.playerPoints;
    computerScore = mySessionObject.score.computerPoints;

    if (roundWinner === "computer") {
        computerScore = computerScore + 1;
    } else if (roundWinner === "gamer") {
        gamerScore = gamerScore + 1;

    }

    let computerScorePlace = document.querySelector("#computerScore");
    computerScorePlace.textContent = computerScore;
    let gamerScorePlace = document.querySelector("#gamerScore");
    gamerScorePlace.textContent = gamerScore;
    mySessionObject.score.computerPoints = computerScore;
    mySessionObject.score.playerPoints = gamerScore;

};

function backToWeaponsPage(rounds) {
    if (rounds > 1) {

    } else {
        // matchWinner();
    }
}



/* ==================================== */
/* Counting Hands Animation */
/* ==================================== */


const triggerAnimationBtn = document.querySelector("#playBtn");

triggerAnimationBtn.addEventListener("click", () => {
    playARound();
});



async function playARound() {
    console.log("started to play a point");
    /* let playerWeapon = isGamerWeapon();  // >>>>>>>>>>   ToDo    <<<<<<<<<<<
    let computerWeapon = iscomputerWeapon(commonSessionObject.computer.character);
 */
    const result1 = await removeCountingHandClass();
    console.log(result1);
    const result2 = await addCountingHandClass();
    console.log(result2);
    /* const result3 = await createTimeDelay();
    console.log(result3);
    const result4 = await showBattlingHands();
    console.log(result4);
    const result5 = await decideWinnerAndUpdateScore();
    console.log(result5); 
    const result6 = await switchBothHandsToRock();
    console.log(result6); */
}


function removeCountingHandClass() {
    return new Promise(resolve => {
        let countingHandClassHasBeenRemoved = false;
        while (countingHandClassHasBeenRemoved === false) {
            countingHandClassHasBeenRemoved = setTimeout(hasCountingHandClassBeenRemoved(), 500);
            let battlingHandLeft = document.querySelector("#battling-hand-left");
            battlingHandLeft.classList.remove("counting-hand");
            let battlingHandRight = document.querySelector("#battling-hand-right");
            battlingHandRight.classList.remove("counting-hand");
        }
        resolve("removal of counting-hand class has been completed");
    });
};


function hasCountingHandClassBeenRemoved() {
    let countingHands = document.querySelectorAll(".counting-hand");
    console.log(countingHands);
    if (countingHands === null) {
        return true;
    } else {
        return false;
    }
};


function addCountingHandClass() {
    return new Promise(resolve => {
        setTimeout(() => {
            let battlingHandLeft = document.querySelector("#battling-hand-left");
            let battlingHandRight = document.querySelector("#battling-hand-right");
            battlingHandLeft.classList.add("counting-hand");
            battlingHandRight.classList.add("counting-hand");
            resolve('addition of counting-hand class has been initiated');
        }, 0);
    });
};


function createTimeDelay() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('enough time has lapsed for hands to count 1-2-3');
        }, 2000);
    });
}


function switchBothHandsToRock() {
    return new Promise(resolve => {
        setTimeout(() => {
            document.querySelector("#battling-hand-left").src = commonSessionObject.player.currentRockWeapon;
            document.querySelector("#battling-hand-right").src = commonSessionObject.computer.currentRockWeapon;
            resolve('both hands have switch back to rock-weapon');
        }, 0);
    });
}

/* ==================================== */


