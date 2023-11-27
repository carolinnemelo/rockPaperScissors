/* IMPORTANT - for this to work, the page needs to  have following as the first script-connection in your html-file*/
/* <script src="/scripts/main.js" defer></script> */

/* Get the sessionObject and parse it to a javascript-object */
/* let mySessionObject = JSON.parse(window.sessionStorage.getItem("sessionObjectInSS"));
 */

let mySessionObject = JSON.parse(sessionStorage.getItem("sessionObjectInSS"));

alert("nickname i början av chooseplayerbackup: "+mySessionObject.player.nickName);

// ------------------- cards

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

document.getElementById("number1").addEventListener("click", () => {
    showPlayerCard("smellyCat");
});

document.getElementById("number2").addEventListener("click", () => {
    showPlayerCard("skellington");
});


document.getElementById("number3").addEventListener("click", () => {
    showPlayerCard("mysteryHuman");
});


function showPlayerCard(player) {
    const cardContainer = document.getElementById("cardPlayerId");

    cardContainer.innerHTML = "";

    const card = document.createElement("div");
    card.className = "playerIndividualCard";
    card.dataset.player = player;

    const playerData = cardsData[player];

    card.innerHTML = `
    <div class="imgPlayerContainer">
        <img id="playerCat" src="${playerData.image}" alt="${playerData.name}">
    <div class="circleBehindPlayer"></div>
    </div>
    <div class="textPlayer">
        <h3>${playerData.name}</h3>
        <h4>${playerData.powerDescription}</h4>
    <div class="spookometer">
        <p>spookometer</p>
        <div class="barSpookometer">
            <img src="/images/ghost.png" alt="">
        </div>
    </div>
    </div>
    `;

    cardContainer.appendChild(card);

}


document.querySelector("#smellyCat").addEventListener("click", () => {
    mySessionObject.player.currentCharacterName = "smellyCat";
    assignComputerCharacter();
    window.sessionStorage.setItem("sessionObjectInSS", JSON.stringify(mySessionObject));
    window.location.href = "/htmls/afterLife.html";
});

document.querySelector("#skellington").addEventListener("click", () => {
    mySessionObject.player.currentCharacterName = "skellington";
    assignComputerCharacter();
    window.sessionStorage.setItem("sessionObjectInSS", JSON.stringify(mySessionObject));
    window.location.href = "/htmls/afterLife.html";
});

document.querySelector("#mysteryHuman").addEventListener("click", () => {
    mySessionObject.player.currentCharacterName = "mysteryHuman";
    assignComputerCharacter();
    window.sessionStorage.setItem("sessionObjectInSS", JSON.stringify(mySessionObject));
    window.location.href = "/htmls/afterLife.html";
});


function assignComputerCharacter() {
    characters = ["smellyCat", "skellington", "mysteryHuman"];
    let computerCharacterIndex = Math.floor(Math.random() * 3);
    mySessionObject.computer.currentCharacterName = characters[computerCharacterIndex];
    window.sessionStorage.setItem("sessionObjectInSS", JSON.stringify(mySessionObject));
};


