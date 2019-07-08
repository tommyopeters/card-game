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


fadeOut('.startgame', 1, '.yes');
shakeIt('.startgame', 1, '.no');



document.querySelector('.yes').addEventListener('click', (e)=>{
    setTimeout(() => {
        document.querySelector('.people').style.removeProperty('display');
        document.querySelector('.people').classList.add('zoomin');

        document.querySelector('.people').addEventListener("animationend", (e) => {
            document.querySelector('.people').classList.remove("zoomin");
            document.querySelector('.chipstable').style.removeProperty('display');
        })
    }, 500);
})

document.querySelector('.prebet').addEventListener('click', ()=>{
    document.querySelector('.prebet').style.display= "none";
    document.querySelector('.postbet').classList.remove('hidden');
    document.querySelector('.chipstable').style.display = "none";
})


document.querySelector('.yes').click();
