// // ------------------- hamburger

// document.getElementById("hamburguerId").addEventListener('click', () => {
//     showHamburguerBar()
// });

// function showHamburguerBar() {
//     const hamburgerBar = document.getElementById('hamburgerBar');
//     const navElement = document.createElement('nav');

//     navElement.innerHTML = `
//             <a href="#">Home</a>
//             <a href="#">Subscribe</a>
//             <a href="#">Choose Player</a>
//             <a href="#">About us</a>
//     `;

//     hamburgerBar.appendChild(navElement);

// }

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


