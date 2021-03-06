// set up main variables

let deck = [
    { name: "Bulbasaur", damage: 60 },
    { name: "Caterpie", damage: 40 },
    { name: "Charmander", damage: 60 },
    { name: "Clefairy", damage: 50 },
    { name: "Jigglypuff", damage: 60 },
    { name: "Mankey", damage: 30 },
    { name: "Meowth", damage: 60 },
    { name: "Nidoran - female", damage: 60 },
    { name: "Nidoran - male", damage: 50 },
    { name: "Oddish", damage: 40 },
    { name: "Pidgey", damage: 50 },
    { name: "Pikachu", damage: 50 },
    { name: "Poliwag", damage: 50 },
    { name: "Psyduck", damage: 60 },
    { name: "Rattata", damage: 30 },
    { name: "Squirtle", damage: 60 },
    { name: "Vulpix", damage: 50 },
    { name: "Weedle", damage: 40 }
]

//create objects for each player

class Contestant {
    constructor(name, ) {
        this.name = name;
        this.hand = [];
        this.turnPoints = 0;
        this.roundsWon = 0;
    }
}

let playerOne = new Contestant("Ash");

let playerTwo = new Contestant("Gary");

// create stadium to hold two players' card being played against each other
let stadium = [];


// create for loop to loop through roundsWon
for (let i = 0; i <= 2; i++) {
    // code for one round
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(`          Round ${i+1} Start!`);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

    // Remove random card from deck array and push it into playerOne.hand array
    for (let i = 0; i <= 2; i++) {
        playerOne.hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);
    }
    console.log(`Player One drew ${playerOne.hand[0].name}, ${playerOne.hand[1].name}, and ${playerOne.hand[2].name}.`);

    // Remove random card from deck array and push it into playerTwo.hand array
    for (let i = 0; i <= 2; i++) {
        playerTwo.hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);
    }
    console.log(`Player Two drew ${playerTwo.hand[0].name}, ${playerTwo.hand[1].name}, and ${playerTwo.hand[2].name}.`);

    // code for one turn
    for (let i = 0; i < 3; i++) {
        console.log(`~~~~~~~~~~~~~~Turn ${i+1}~~~~~~~~~~~~~~`);
        // playerOne picks card
        // create empty array to hold the Pokemon card with the highest damage
        let highestCard = [];

        // sort playerOne's deck from card with highest damage to lowest damage
        playerOne.hand.sort((a, b) => b.damage - a.damage);
        // console.log(playerOne.hand.sort((a, b) => b.damage - a.damage));

        //assign the card with the highest damage (first in sorted array) to the empty 'highestCard' variable
        highestCard = playerOne.hand.splice(0, 1)[0];
        // console.log(highestCard)

        // move playerOne's highest card into the battle stadium
        stadium.push(highestCard);

        // playerTwo picks card
        let randomCard = playerTwo.hand.splice(Math.floor(Math.random() * playerTwo.hand.length), 1)[0];

        // move playerTwo's randomly picked card into the battle stadium
        stadium.push(randomCard);

        // console.log(stadium);
        console.log(`Player One plays ${stadium[0].name}. Player Two plays ${stadium[1].name}.`);
        console.log(`...`);

        //determine winner of turn
        if (stadium[0].damage > stadium[1].damage) {
            console.log(`${stadium[0].name} beat ${stadium[1].name}. Player One wins!`);
            playerOne.turnPoints++;
        } else if (stadium[1].damage > stadium[0].damage) {
            console.log(`${stadium[1].name} beat ${stadium[0].name}. Player Two wins!`);
            playerTwo.turnPoints++;
        } else {
            console.log(`It's a...DRAW!`);
        }
        stadium.pop();
        stadium.pop();

    }

    // console.log who won the round
    if (playerOne.turnPoints > playerTwo.turnPoints) {
        console.log(`Round ${i+1} Winner: Player 1`);
        console.log(".");
        console.log(".");
        console.log(".");
        playerOne.roundsWon++;
    } else if (playerTwo.turnPoints > playerOne.turnPoints) {
        console.log(`Round ${i+1} Winner: Player 2`);
        console.log(".");
        console.log(".");
        console.log(".");
        playerTwo.roundsWon++;
    } else {
        console.log(`Round ${i+1} Winner: It's a draw!`);
        console.log(".");
        console.log(".");
        console.log(".");
    }
    playerOne.turnPoints = 0;
    playerTwo.turnPoints = 0;
}

// console.log who won the game
let winnerOne = `Player ONE IS THE CHAMPION!`;
let winnerTwo = `PLAYER TWO IS THE CHAMPION!`;
let noWinner = `********IT'S A DRAW********`;
let champion = ``;

if (playerOne.roundsWon > playerTwo.roundsWon) {
    champion = winnerOne;
    console.log(".");
    console.log(".");
    console.log(".");
} else if (playerTwo.roundsWon > playerOne.roundsWon) {
    champion = winnerTwo;
    console.log(".");
    console.log(".");
    console.log(".");
} else {
    champion = noWinner;
    console.log(".");
    console.log(".");
    console.log(".");
}
console.log("***************************************************");
console.log(`************${champion}************`);
console.log("***************************************************");