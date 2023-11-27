/* 
let mySessionObject = JSON.parse(window.sessionStorage.getItem("sessionObjectInSS"));
 */


var currentWeapon = 0;
var currentWeaponName = "";
var computerWeapon = "";
var roundWinner = '';
var images = [];
const WEAPONS = ["rock", "paper", "scissors"];
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

function setWeaponImage() {
    let character = mySessionObject.player.currentCharacterName;
    /* alert("In setWeaponImage - currentCharacterName: "+character); */
    if (character === "skellington") {
        images = characterData.skellington;
    } else if (character === "mysteryHuman") {
        images = characterData.mysteryHuman;
    } else {
        images = characterData.smellyCat;
    }

    let weaponImage = document.getElementById("weaponImage");
    weaponImage.src = images[0];
};

document.getElementById("buttonRight").addEventListener("click", function (e) {
    currentWeapon = (((currentWeapon + 1) % 3) + 3) % 3;

    let weaponImage = document.getElementById("weaponImage");
    weaponImage.src = images[currentWeapon];

    let weaponName = document.getElementById("weaponName");
    weaponName.innerText = WEAPONS[currentWeapon];
});

let weaponName="";
document.getElementById("buttonLeft").addEventListener("click", function (e) {
    currentWeapon = (((currentWeapon - 1) % 3) + 3) % 3;

    let weaponImage = document.getElementById("weaponImage");
    weaponImage.src = images[currentWeapon];

    let weaponName = document.getElementById("weaponName");
    weaponName.innerText = WEAPONS[currentWeapon];
});

document.getElementById("playBtn").addEventListener("click", async function (e) {
    
    playerWeapon = WEAPONS[currentWeapon];
    computerWeapon = chooseComputerWeapon(WEAPONS);
    mySessionObject.player.currentWeapon = playerWeapon;
    mySessionObject.computer.currentWeapon = computerWeapon;
    window.sessionStorage.setItem("sessionObjectInSS", JSON.stringify(mySessionObject));
    
    hideWeaponContainer();
    roundWinner = whoIsTheRoundWinner(computerWeapon, playerWeapon);
    let informationPlace = document.querySelector("#informationPlace");
    informationPlace.textContent = "";
    await playARound();
    
    
});


function chooseComputerWeapon(weapons) {
    let computerWeaponIndex = Math.floor(Math.random() * weapons.length);
    return WEAPONS[computerWeaponIndex];
};

function hideWeaponContainer() {
    document.getElementById("weaponContainer").style.display = "none";
    document.getElementById("playBtnContainer").style.display = "none";
    document.getElementById("scoreBoardContainer").style.display = "grid";
    document.getElementById("animationContainer").style.display = "flex";
}

function showWeaponContainer() {
    document.getElementById("weaponContainer").style.display = "unset";
    document.getElementById("playBtnContainer").style.display = "unset";
    if (screen.width < 601)
        document.getElementById("scoreBoardContainer").style.display = "grid";
    document.getElementById("animationContainer").style.display = "none";
}


function showWeaponContainerDelayed() {
    return new Promise(resolve => {
        setTimeout(() => {
            document.getElementById("weaponContainer").style.display = "unset";
            document.getElementById("playBtnContainer").style.display = "unset";
            if (screen.width < 601)
                document.getElementById("scoreBoardContainer").style.display = "none";
            document.getElementById("animationContainer").style.display = "none";
            resolve('showing weapon container delayed');
        }, 10);
    });    
}


document.querySelector(".textBattle").addEventListener("animationend", function () {
    showWeaponContainer();
});



document.querySelector("#battling-hand-right").addEventListener("animationend", async function (e) {
    let result1 = await showBattlingHands();
    console.log(result1);
    await writesWhoIsRoundWinner(roundWinner);
    await changeScore(roundWinner);
    await whatIsMatchStatus(howManyRounds(), mySessionObject.score.computerPoints, mySessionObject.score.playerPoints);
    await showRockHandsDelayed();
    await showWeaponContainerDelayed();
});


//---------------------------------
//-----------WINDOW.ONLOAD---------
//---------------------------------


window.onload = async function () {
    hideWeaponContainer();
    const mySessionObject = JSON.parse(window.sessionStorage.getItem("sessionObjectInSS"));
    mySessionObject.score.numberOfRounds = 0;
    mySessionObject.score.playerPoints = 0;
    mySessionObject.score.computerPoints = 0;
    document.querySelector("#characterNamePlace").innerHTML = mySessionObject.player.currentCharacterName;
    document.querySelector("#nickNamePlace").innerHTML = mySessionObject.player.nickName;
    document.querySelector("#computerCharacterNamePlace").innerHTML = mySessionObject.computer.currentCharacterName;
    setWeaponImage();
    await setBattlingHands(); 
    /* await changeToRockHandsDirectly(); */
    await afterLifeOnLoad();
    
};


function setBattlingHands(){
    return new Promise(resolve => {
        setTimeout(() => {
           
           
            if(mySessionObject.player.currentCharacterName === "smellyCat"){
                document.querySelector("#battling-hand-left").src = "/images/rock-cat-LtoR.png";
            }
            if(mySessionObject.player.currentCharacterName === "skellington"){
                document.querySelector("#battling-hand-left").src = "/images/rock-skeleton-LtoR.png";
            }
            if(mySessionObject.player.currentCharacterName === "mysteryHuman"){
                document.querySelector("#battling-hand-left").src = "/images/rock-human-LtoR.png";
            }
            if(mySessionObject.computer.currentCharacterName === "smellyCat"){
                document.querySelector("#battling-hand-right").src = "/images/rock-cat-RtoL.png";
            }
            if(mySessionObject.computer.currentCharacterName === "skellington"){
                document.querySelector("#battling-hand-right").src = "/images/rock-skeleton-RtoL.png";
            }
            if(mySessionObject.computer.currentCharacterName === "mysteryHuman"){
                document.querySelector("#battling-hand-right").src = "/images/rock-human-RtoL.png";
            } 


            resolve('showing rock hands first time');
        }, 0);
    });
}


function changeToRockHandsDirectly() {
    return new Promise(resolve => {
        setTimeout(() => {
            if(mySessionObject.player.currentCharacterName === "smellyCat"){
                document.querySelector("#battling-hand-left").src = "/images/rock-cat-LtoR.png";
            }
            if(mySessionObject.player.currentCharacterName === "skellington"){
                document.querySelector("#battling-hand-left").src = "/images/rock-skeleton-LtoR.png";
            }
            if(mySessionObject.player.currentCharacterName === "mysteryHuman"){
                document.querySelector("#battling-hand-left").src = "/images/rock-human-LtoR.png";
            }
            if(mySessionObject.computer.currentCharacterName === "smellyCat"){
                document.querySelector("#battling-hand-right").src = "/images/rock-cat-RtoL.png";
            }
            if(mySessionObject.computer.currentCharacterName === "skellington"){
                document.querySelector("#battling-hand-right").src = "/images/rock-skeleton-RtoL.png";
            }
            if(mySessionObject.computer.currentCharacterName === "mysteryHuman"){
                document.querySelector("#battling-hand-right").src = "/images/rock-human-RtoL.png";
            }
            resolve('showing rock hands first time');
        }, 0);
    });    
}


function showRockHandsDelayed() {
    return new Promise(resolve => {
        setTimeout(() => {
            if(mySessionObject.player.currentCharacterName === "smellyCat"){
                document.querySelector("#battling-hand-left").src = "/images/rock-cat-LtoR.png";
            }
            if(mySessionObject.player.currentCharacterName === "skellington"){
                document.querySelector("#battling-hand-left").src = "/images/rock-skeleton-LtoR.png";
            }
            if(mySessionObject.player.currentCharacterName === "mysteryHuman"){
                document.querySelector("#battling-hand-left").src = "/images/rock-human-LtoR.png";
            }
            if(mySessionObject.computer.currentCharacterName === "smellyCat"){
                document.querySelector("#battling-hand-right").src = "/images/rock-cat-RtoL.png";
            }
            if(mySessionObject.computer.currentCharacterName === "skellington"){
                document.querySelector("#battling-hand-right").src = "/images/rock-skeleton-RtoL.png";
            }
            if(mySessionObject.computer.currentCharacterName === "mysteryHuman"){
                document.querySelector("#battling-hand-right").src = "/images/rock-human-RtoL.png";
            }
            resolve('showing rock hands again');
        }, 2000);
    });    
}

function showBattlingHands(){

    return new Promise(resolve => {
        setTimeout(() => {
           
            const mySessionObject = JSON.parse(window.sessionStorage.getItem("sessionObjectInSS"));
            let playerCurrentWeapon =  WEAPONS[currentWeapon];   
            // alert("playercurrentweapon: "+playerCurrentWeapon);
        
            let computerCurrentWeapon = mySessionObject.computer.currentWeapon;
            // alert("computerCurrentWeapon: "+computerCurrentWeapon);
        
            if(mySessionObject.player.currentCharacterName === "smellyCat"){
                if(playerCurrentWeapon === "rock"){
                    document.querySelector("#battling-hand-left").src = "/images/rock-cat-LtoR.png";
                }
                if(playerCurrentWeapon === "paper"){
                    document.querySelector("#battling-hand-left").src = "/images/paper-cat-LtoR.png";
                }
                if(playerCurrentWeapon === "scissors"){
                    document.querySelector("#battling-hand-left").src = "/images/scissors-cat-LtoR.png";
                } 
            }
            if(mySessionObject.player.currentCharacterName === "skellington"){
                if(playerCurrentWeapon === "rock"){
                    document.querySelector("#battling-hand-left").src = "/images/rock-skeleton-LtoR.png";
                }
                if(playerCurrentWeapon === "paper"){
                    document.querySelector("#battling-hand-left").src = "/images/paper-skeleton-LtoR.png";
                }
                if(playerCurrentWeapon === "scissors"){
                    document.querySelector("#battling-hand-left").src = "/images/scissors-skeleton-LtoR.png";
                } 
            }
            if(mySessionObject.player.currentCharacterName === "mysteryHuman"){
                if(playerCurrentWeapon === "rock"){
                    document.querySelector("#battling-hand-left").src = "/images/rock-human-LtoR.png";
                }
                if(playerCurrentWeapon === "paper"){
                    document.querySelector("#battling-hand-left").src = "/images/paper-human-LtoR.png";
                }
                if(playerCurrentWeapon === "scissors"){
                    document.querySelector("#battling-hand-left").src = "/images/scissors-human-LtoR.png";
                } 
            }
        
            if(mySessionObject.computer.currentCharacterName === "smellyCat"){
                if(computerCurrentWeapon === "rock"){
                    document.querySelector("#battling-hand-right").src = "/images/rock-cat-RtoL.png";
                }
                if(computerCurrentWeapon === "paper"){
                    document.querySelector("#battling-hand-right").src = "/images/paper-cat-RtoL.png";
                }
                if(computerCurrentWeapon === "scissors"){
                    document.querySelector("#battling-hand-right").src =  "/images/scissors-cat-RtoL.png";
                } 
            }
            if(mySessionObject.computer.currentCharacterName === "skellington"){
                if(computerCurrentWeapon === "rock"){
                    document.querySelector("#battling-hand-right").src =  "/images/rock-skeleton-RtoL.png";
                }
                if(computerCurrentWeapon === "paper"){
                    document.querySelector("#battling-hand-right").src = "/images/paper-skeleton-RtoL.png";
                }
                if(computerCurrentWeapon === "scissors"){
                    document.querySelector("#battling-hand-right").src = "/images/scissors-skeleton-RtoL.png";
                } 
            }
            if(mySessionObject.computer.currentCharacterName === "mysteryHuman"){
                if(computerCurrentWeapon === "rock"){
                    document.querySelector("#battling-hand-right").src = "/images/rock-human-RtoL.png";
                }
                if(computerCurrentWeapon === "paper"){
                    document.querySelector("#battling-hand-right").src = "/images/paper-human-RtoL.png";
                }
                if(computerCurrentWeapon === "scissors"){
                    document.querySelector("#battling-hand-right").src = "/images/scissors-human-RtoL.png";
                } 
            } 
            resolve('showing rock hands again');
        }, 10); 
    });    
};