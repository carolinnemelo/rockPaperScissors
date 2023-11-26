const testSessionObject = JSON.parse(sessionStorage.getItem("commonSessionObjectInSS"));
if(testSessionObject === null){
    sessionStorage.setItem("commonSessionObjectInSS", JSON.stringify(testSessionObject));
}
/* Get the commonSessionObject and parse it to a javascript-object */
const mySessionObject = JSON.parse(sessionStorage.getItem("commonSessionObjectInSS"));



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

    if (character == "skellington") {
        images = characterData.skellington;
    } else if (character == "mysteryHuman") {
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

document.getElementById("buttonLeft").addEventListener("click", function (e) {
    currentWeapon = (((currentWeapon - 1) % 3) + 3) % 3;

    let weaponImage = document.getElementById("weaponImage");
    weaponImage.src = images[currentWeapon];

    let weaponName = document.getElementById("weaponName");
    weaponName.innerText = WEAPONS[currentWeapon];
});

document.getElementById("playBtn").addEventListener("click", async function (e) {
    currentWeaponName = WEAPONS[currentWeapon];
    computerWeapon = chooseComputerWeapon(WEAPONS);

    mySessionObject.player.currentWeapon = currentWeaponName;
    sessionStorage.setItem("commonSessionObjectInSS", JSON.stringify(mySessionObject));
    hideWeaponContainer();
    
    roundWinner = whoIsTheRoundWinner(computerWeapon, currentWeaponName.toLowerCase());
    writesWhoIsRoundWinner(roundWinner);

    await playARound();
});


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
        document.getElementById("scoreBoardContainer").style.display = "none";
    document.getElementById("animationContainer").style.display = "none";
}

document.querySelector(".textBattle").addEventListener("animationend", function () {
    showWeaponContainer();
});

document.querySelector("#battling-hand-right").addEventListener("animationend", function () {
    showWeaponContainer();
});


//---------------------------------
//-----------WINDOW.ONLOAD---------
//---------------------------------


window.onload = async function () {
    hideWeaponContainer();
    await afterLifeOnLoad();
    setWeaponImage();
};