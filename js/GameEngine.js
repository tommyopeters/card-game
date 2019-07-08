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

//REMOVE .STARTGAME TO START GAME
fadeOut('.startgame', 1, '.yes');

//SHAKE .STARTGAME TO REFUSE NO OPTION
shakeIt('.startgame', 1, '.no');


//MAKE CHIPS TABLE VISIBLE AFTER MAIN GAME TAB HAS BEEN LOADED
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

//RESET AMOUNT BET
document.querySelector('.reset').addEventListener('click', ()=>{
    document.querySelector('#amount').innerHTML = "--";
    amountbet = 0;
})


//INCREMENT AMOUNT BET VALUE BY POKERCHIP SELECTED

for(let i=0; i<pokerchips.length; i++){
    pokerchips[i].addEventListener('click', ()=>{
        
        if(pokerchips[i].classList.contains('white')){
            amountbet+=1;
            if(amountbet>500){amountbet=500};
            document.getElementById('amount').innerHTML = amountbet;
        }
        if(pokerchips[i].classList.contains('red')){
            amountbet+=5;
            if(amountbet>500){amountbet=500};
            document.getElementById('amount').innerHTML = amountbet;
        }
        if(pokerchips[i].classList.contains('blue')){
            amountbet+=10;
            if(amountbet>500){amountbet=500};
            document.getElementById('amount').innerHTML = amountbet;
        }
        if(pokerchips[i].classList.contains('green')){
            amountbet+=25;
            if(amountbet>500){amountbet=500};
            document.getElementById('amount').innerHTML = amountbet;
        }
        if(pokerchips[i].classList.contains('black')){
            amountbet+=100;
            if(amountbet>500){amountbet=500};
            document.getElementById('amount').innerHTML = amountbet;
        }

    })
}

//REMOVE CHIPS TABLE AND REPLACE PREBET WITH POSTBET WHEN BET HAS BEEN MADE
document.querySelector('.bet').addEventListener('click', ()=>{
    if(amountbet==0){
        document.querySelector('.bet').classList.add('apply-shake');
        document.querySelector('.bet').addEventListener("animationend", (e) => {
            document.querySelector('.bet').classList.remove("apply-shake");
            return;
        })
    }else{
        document.querySelector('.prebet').style.display= "none";
        document.querySelector('.postbet').classList.remove('hidden');
        document.querySelector('.chipstable').style.display = "none";
    }
})

