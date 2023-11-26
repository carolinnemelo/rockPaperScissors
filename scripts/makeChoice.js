var currentWeapon = 0;
var images = [];
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

window.onload = function () {
    let character = sessionStorage.getItem("characterChoice");

    if (character == "skellington") {
        images = characterData.skellington;
    } else if (character == "mysteryHuman") {
        images = characterData.mysteryHuman;
    } else {
        images = characterData.smellyCat;
    }


    let weaponImage = document.getElementById("weaponImage");
    weaponImage.src = images[0];
}

document.getElementById("buttonRight").addEventListener("click", function (e) {
    currentWeapon = (((currentWeapon + 1) % 3) + 3) % 3;

    let weaponImage = document.getElementById("weaponImage");
    weaponImage.src = images[currentWeapon];

    let weaponName = document.getElementById("weaponName");
    weaponName.innerText = weapons[currentWeapon];
});

document.getElementById("buttonLeft").addEventListener("click", function (e) {
    currentWeapon = (((currentWeapon - 1) % 3) + 3) % 3;

    let weaponImage = document.getElementById("weaponImage");
    weaponImage.src = images[currentWeapon];

    let weaponName = document.getElementById("weaponName");
    weaponName.innerText = weapons[currentWeapon];
});

document.getElementById("playBtn").addEventListener("click", function (e) {
    sessionStorage.setItem("weapon", weapons[currentWeapon]);
    document.getElementById("weaponContainer").style.display = "none";
    document.getElementById("playBtnContainer").style.display = "none";
    document.getElementById("scoreBoardContainer").style.display = "grid";
});