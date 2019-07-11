class GameEngine{
    constructor(){
        this.Person = [];
        this.Session = [];
        this.sessionnumber = 0
        this.score = 0;
        this.cardinhand = 0;
        this.doule = false;
        this.acedouble = false;
        this.wallet = 0;
        this.aamount = 0;
        this.split = false;
        this.firstTwo = [];
        this.blackjack = false;
        this.playersum = 0;
        this.dealersum = 0;
        this.dealeremptyCards = {}
        this.playeremptyCards = {}
        this.dealerCards = [];
        this.playerCards = [];
        this.dealnumber = -1;
    }
    
    start(){
        console.log(this.Session);
        this.Session[this.sessionnumber] = [];
        this.Session[this.sessionnumber][0] = new Deck();
        this.Session[this.sessionnumber][0].generate();
        this.Session[this.sessionnumber][0].shuffle();
        
        this.Session[this.sessionnumber][1] = new Deck();
        this.Session[this.sessionnumber][1].generate();
        this.Session[this.sessionnumber][1].shuffle();

        this.firstTwoCards();
        
        
       
    }
    firstTwoCards(){
        this.dealCard();
        this.printCard();
        this.dealCard();
        this.printCard();
        //         return this.firstTwo
    }
    dealCard(){
        this.dealerCards.push(this.Session[this.sessionnumber][0].deal());
        this.playerCards.push(this.Session[this.sessionnumber][1].deal());

        this.dealnumber++;
    }
    printCard(){
        this.dealeremptyCards = document.querySelectorAll('.dealer-bar .empty');
        this.playeremptyCards = document.querySelectorAll('.player-bar .empty');

        let HTMLcardDealer = document.createElement('div');
        HTMLcardDealer.classList.add('cardcontainer');
        if(this.dealerCards[this.dealnumber].suit == 'spadesuit' || this.dealerCards[this.dealnumber].suit == 'clubsuit'){
            HTMLcardDealer.classList.add('cardgreen');
        }else{
            HTMLcardDealer.classList.add('cardred');
        }
        HTMLcardDealer.classList.add('flipped');
        HTMLcardDealer.innerHTML = `
            <div class="front">
                <div class="top">
                    <span> &${this.dealerCards[this.dealnumber].suit}; </span>
                </div>
                <h1>${this.dealerCards[this.dealnumber].value}</h1>
                <div class="bottom">
                    <span class="upside-down"> &${this.dealerCards[this.dealnumber].suit}; </span>
                </div>
            </div>
            <div class="back"><div class="back-inner"></div></div>
        `;
        this.dealeremptyCards[0].parentNode.replaceChild(HTMLcardDealer, this.dealeremptyCards[0]);
            


        let HTMLcardPlayer = document.createElement('div');
        HTMLcardPlayer.classList.add('cardcontainer');
        if(this.playerCards[this.dealnumber].suit == 'spadesuit' || this.playerCards[this.dealnumber].suit == 'clubsuit'){
            HTMLcardPlayer.classList.add('cardgreen');
        }else{
            HTMLcardPlayer.classList.add('cardred');
        }
        HTMLcardPlayer.classList.add('flipped');
        HTMLcardPlayer.innerHTML = `
            <div class="front">
                <div class="top">
                    <span class="upside-up"> &${this.playerCards[this.dealnumber].suit}; </span>
                </div>
                <h1 class="cardvalue">${this.playerCards[this.dealnumber].value}</h1>
                <div class="bottom">
                    <span class="upside-down"> &${this.playerCards[this.dealnumber].suit}; </span>
                </div>
            </div>
            <div class="back"><div class="back-inner"></div></div>
        `;
         this.playeremptyCards[0].parentNode.replaceChild(HTMLcardPlayer, this.playeremptyCards[0]);

         this.cardinhand++;
    }
    checkValues(){

    }
    checkForBlackjack(){
        // return;
        // this.blackjack = true
        // endgame(){}
    }
    checkForDouble(){

    }
    checkSum(){

    }
    checkForAce(){

    }
    revealCard(){

    }
    revealDealerCard(){

    }
    endgame(){
        // if this.blackjack == true{
        //     BLACKJACK!
        //     this.blackjack = false
        // }
        // if (dealer>player){
        //     lose
        // }else if(player<dealer){
        //     win
        // }else if(player==dealer){
        //     Push
        // }
    }
}

 /*
        stand.addevebtlistener{
            revealDealerCard(){}
            stand(){
                endgame()
            }
        }
        hit.addeventlistener(){
            dealCard()
            printcard
            if this.acedouble == true{
                endgame()
            }
        }
        double.addeventlistener(){
            replace class nodouble
            wallet -= amount
            updatewallet()
            amount *= 2
            updateamount()


        }
        split.addeventlistener(){
            this.split =  true
        }
        ace.addeventlistener{
            replace class noace
            checkvalues()
        }
        */



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