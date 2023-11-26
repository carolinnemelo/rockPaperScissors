// na hora que a pagina carrega 

const testSessionObject = JSON.parse(sessionStorage.getItem("commonSessionObjectInSS"));
if(testSessionObject === null){
    sessionStorage.setItem("commonSessionObjectInSS", JSON.stringify(testSessionObject));
}
/* Get the commonSessionObject and parse it to a javascript-object */
const mySessionObject = JSON.parse(sessionStorage.getItem("commonSessionObjectInSS"));


    //pega o nickname do objeto que foi pego do sesssion

    // pega o arquivo json com os avatares
    async function loadData() {
        const response = await fetch("/data/charactersData.json");
        return await response.json();
    
    }

    // COLOCAR VARIAVEL QUE PEGA O AVATAR DO GAMER NO OBJTO
    //coloca a foto do avatar 
    //coloca o nome do avatar
    //PEGA O NOME DO GAMer
    // coloca o nome do gamer

    // o computador escolhe o avatar dele
    function assignComputerCharacter(characters) {
        let computerCharacterIndex = Math.floor(Math.random() * characters.length);
        return characters[computerCharacterIndex];
    
    };

    //coloca a foto do avatar do computer
    //coloca o nome do avatar do computer

    
    //pega a quantidade de rounds que vai ter na partida do objeto que foi pego do session 
    function howManyRounds() {
    rounds = mySessionObject.score.numberOfRounds;
    };
    
    
    
    //animacao battle for your life

// AGORANO EVENT LISTENER QUE VEM DEPOIS DA ANIMACAO DO BATTLE
    // Match Start
    //open container with weapons


// o gamer escolhe a arma e aperta play
// no play o computador escolhe sua arma
function getCharacterByName(name, characters) {
    for (let character of characters) {
        if (character.name === name) {
            return character;
        }
    }
}

function chooseComputerWeapon(weapons) {
    let randomWeapon = Math.floor(Math.random() * weapons.length);
    let computerWeaponIndex = randomWeapon;
    return weapons[computerWeaponIndex];
};

// quem vai ganhar o round

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

// writes in the screen who is the round winner 
function writesWhoIsRoundWinner(roundWinner) {
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


//checks if the match is done
function whatIsMatchStatus(rounds, computerScore, gamerScore) {
    if(computerScore > (rounds / 2)) {
        matchStatus = "computer wins the match";
    } else if (gamerScore > (rounds / 2)) {
        matchStatus = "You win the match";
    } else {
        matchStatus = "Match is not finished";
    }
};


window.onload = async function() {
    
    
    
    const WEAPONS = ["rock", "paper", "scissors"];
    let characters = await loadData();
    let rounds = howManyRounds(); 

    
    //gamer scoreboard
    
    let nickNamePlace = document.querySelector("#nickNamePlace");
    nickNamePlace.textContent = mySessionObject.player.nickName;

    let gamerCharacter = getCharacterByName(mySessionObject.player.currentCharacterName, characters);
    
    let gamerCharacterImagePlace = document.querySelector("#characterChoice");
    gamerCharacterImagePlace.src = gamerCharacter.image;

    let gamerCharacterNamePlace = document.querySelector("#characterNamePlace");
    gamerCharacterNamePlace.textContent = gamerCharacter.name;

    
    
    //computer scoreboard 
    
    let computerCharacter = assignComputerCharacter(characters);
    
    let computerCharacterNamePlace = document.querySelector("#computerCharacterNamePlace");
    computerCharacterNamePlace.textContent = computerCharacter.name;
    

    let computerCharacterImagePlace = document.querySelector("#computerChoice");
    computerCharacterImagePlace.src = computerCharacter.image;
    
    let gamerWeapon = mySessionObject.player.currentWeapon; 
    
    
    
    let playBtn = document.querySelector("#playBtn");
    
    let computerWeapon = "";
    playBtn.addEventListener("click", function() {
        whatIsMatchStatus(rounds, computerScore, gamerScore);
        computerWeapon = chooseComputerWeapon(WEAPONS);
    });

// after hands animation should display who is the round winner and change the score.

    let handsAnimationContainer = document.querySelector("#battling-hand-right");

    handsAnimationContainer.addEventListener("animationend", function (params) {
        let roundWinner = whoIsTheRoundWinner(computerWeapon, currentWeaponName.toLowerCase());
        writesWhoIsRoundWinner(roundWinner);
        changeScore(roundWinner);
        console.log('chamado iiii');
    });

};

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


