class GameEngine{
    constructor(){
        this.score = 0;
        
    }

    start(){
        gameDiv.innerHTML = `
            <div class="dealer"></div>
            <div class="player"></div>
        `
    }
}

let PlayerDeck = new Deck();
PlayerDeck.generateDeck();
PlayerDeck.shuffle();


let DealerDeck = new Deck();
DealerDeck.generateDeck();
DealerDeck.shuffle();

let Game = new GameEngine;
// Game.start();
