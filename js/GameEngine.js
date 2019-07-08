class GameEngine{
    constructor(){
        this.score = 0;
        this.cardinhand = 0;
    }
    printcard(index){
        let emptycards = document.getElementsByClassName('empty');
        let dealerempty = emptycards[index];
        let playerempty = emptycards[index+6];
        let playercard = this.Player.deal();
        let dealercard = this.Dealer.deal();
        
        let HTMLcardDealer = document.createElement('div');
        HTMLcardDealer.classList.add('cardcontainer');
        if(dealercard.suit == 'spadesuit' || dealercard.suit == 'clubsuit'){
            HTMLcardDealer.classList.add('cardgreen');
        }else{
            HTMLcardDealer.classList.add('cardred');
        }
        HTMLcardDealer.classList.add('flipped');
        HTMLcardDealer.innerHTML = `
            <div class="front">
                <div class="top">
                    <span> &${dealercard.suit}; </span>
                </div>
                <h1>${dealercard.value}</h1>
                <div class="bottom">
                    <span class="upside-down"> &${dealercard.suit}; </span>
                </div>
            </div>
            <div class="back"><div class="back-inner"></div></div>
        `;
        dealerempty.parentNode.replaceChild(HTMLcardDealer, dealerempty);
            


        let HTMLcardPlayer = document.createElement('div');
        HTMLcardPlayer.classList.add('cardcontainer');
        if(playercard.suit == 'spadesuit' || playercard.suit == 'clubsuit'){
            HTMLcardPlayer.classList.add('cardgreen');
        }else{
            HTMLcardPlayer.classList.add('cardred');
        }
        HTMLcardPlayer.classList.add('flipped');
        HTMLcardPlayer.innerHTML = `
            <div class="front">
                <div class="top">
                    <span class="upside-up"> &${playercard.suit}; </span>
                </div>
                <h1 class="cardvalue">${playercard.value}</h1>
                <div class="bottom">
                    <span class="upside-down"> &${playercard.suit}; </span>
                </div>
            </div>
            <div class="back"><div class="back-inner"></div></div>
        `;
        playerempty.parentNode.replaceChild(HTMLcardPlayer, playerempty);

        HTMLcardPlayer.addEventListener('click', (e)=>{
            let clicked = e.target;
            console.log(e.target);
            if(clicked.classList.contains('cardcontainer')){
                clicked.classList.toggle('flipped');
            }else if(clicked.parentNode.classList.contains('cardcontainer')){
                clicked.parentNode.classList.toggle('flipped');
            }else if(clicked.parentNode.parentNode.classList.contains('cardcontainer')){
                clicked.parentNode.parentNode.classList.toggle('flipped');
            }else if(clicked.parentNode.parentNode.parentNode.classList.contains('cardcontainer')){
                clicked.parentNode.parentNode.parentNode.classList.toggle('flipped');
            }
            
        })

        this.cardinhand++;
    }

    start(){
        this.Player = new Deck();
        this.Player.generateDeck();
        this.Player.shuffle();


        this.Dealer = new Deck();
        this.Dealer.generateDeck();
        this.Dealer.shuffle();

        this.printcard(this.cardinhand);
    }
}



let Game = new GameEngine;

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
//START GAME
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

        Game.start();

    }
})

//FLIPCARDS WHEN SELECTED
// document.querySelector('.people').addEventListener('click', (e)=>{
//     clicked = e.target;
//     //Check for 
//     if(clicked.classList.contains('cardcontainer')){
//         clicked.classList.add('flipped');
//     }else if(clicked.parentNode.classList.contains('cardcontainer')){
//         clicked.parentNode.classList.add('flipped');
//     }else if(clicked.parentNode.parentNode.classList.contains('cardcontainer')){
//         clicked.parentNode.parentNode.classList.add('flipped');
//     }else if(clicked.parentNode.parentNode.parentNode.classList.contains('cardcontainer')){
//         clicked.parentNode.parentNode.parentNode.classList.add('flipped');
//     }
    
// })



document.querySelector('.yes').click();