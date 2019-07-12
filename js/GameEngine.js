class GameEngine{
    constructor(){
        this.Person = [];
        this.Session = [];
        this.sessionnumber = 0
        this.score = 0;
        this.cardinhand = 0;
        this.doule = false;
        this.acedouble = false;
        this.wallet = 1000;
        this.amount = 0;
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
        this.Session[this.sessionnumber] = [];
        this.Session[this.sessionnumber][0] = new Deck();
        this.Session[this.sessionnumber][0].generate();
        this.Session[this.sessionnumber][0].shuffle();
        
        this.Session[this.sessionnumber][1] = new Deck();
        this.Session[this.sessionnumber][1].generate();
        this.Session[this.sessionnumber][1].shuffle();

        this.firstTwoCards();
        
        this.sessionnumber++
       
    }
    firstTwoCards(){
        this.dealCard();
        this.printCard();
        this.dealCard();
        this.printCard();
        let playerstwo = []
        playerstwo.push(this.playerCards[0]);
        playerstwo.push(this.playerCards[1]);
        let dealerstwo = []
        dealerstwo.push(this.dealerCards[0]);
        dealerstwo.push(this.dealerCards[1]);

        this.firstTwo.push(dealerstwo);
        this.firstTwo.push(playerstwo);



        this.revealCard(1, this.playerCards.length);
        this.revealCard(0, (this.dealerCards.length-1));
        this.checkValues();
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
                <h1>${this.dealerCards[this.dealnumber].facevalue}</h1>
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
                <h1 class="cardvalue">${this.playerCards[this.dealnumber].facevalue}</h1>
                <div class="bottom">
                    <span class="upside-down"> &${this.playerCards[this.dealnumber].suit}; </span>
                </div>
            </div>
            <div class="back"><div class="back-inner"></div></div>
        `;
         this.playeremptyCards[0].parentNode.replaceChild(HTMLcardPlayer, this.playeremptyCards[0]);

         this.cardinhand++;
    }
    revealCard(person, number){
        let playerreveals = document.querySelectorAll('.player-bar .cardcontainer');
        let dealerreveals = document.querySelectorAll('.dealer-bar .cardcontainer');
        let i = 0;
        if(person==1){
            while (i < number){
                playerreveals[i].classList.remove('flipped');
                    i++;
            }
        }else if(person == 0){
            while (i < number){
                dealerreveals[i].classList.remove('flipped');
                i++;
            }
        }
    }


    checkValues(){
        
        this.checkSum();
        this.checkForBlackjack();
        this.checkForDouble();
        this.checkSum();
        this.checkForAce();
    }

    checkForBlackjack(){

        if(this.firstTwo[1][0].value == 1){
            this.firstTwo[1][0].value = 11;
        }else if(this.firstTwo[1][1].value == 1){
            this.firstTwo[1][1].value = 11;
        }
        if(this.firstTwo[0][0].value == 1){
            this.firstTwo[0][0].value = 11;
        }else if(this.firstTwo[0][1].value == 1){
            this.firstTwo[0][1].value = 11;
        }
        

        let Psum = this.firstTwo[1][0].value + this.firstTwo[1][1].value;
        let Dsum = this.firstTwo[0][0].value + this.firstTwo[0][1].value;

        console.log(Psum);

        if(Psum == 21 && Dsum == 21){
            setTimeout(() => {
                document.querySelector('.people').classList.add('apply-shake');
                document.querySelector('.people').addEventListener("animationend", (e) => {
                    document.querySelector('.people').classList.remove("apply-shake");
            })
                this.endgame('draw');
            }, 100);
        }else if(Psum == 21){
            setTimeout(() => {
                document.querySelector('.people').classList.add('apply-shake');
                document.querySelector('.people').addEventListener("animationend", (e) => {
                    document.querySelector('.people').classList.remove("apply-shake");
                })
                this.endgame('blackjack');
            }, 100);
        }else if(Dsum == 21){
            setTimeout(() => {
                document.querySelector('.people').classList.add('apply-shake');
                document.querySelector('.people').addEventListener("animationend", (e) => {
                    document.querySelector('.people').classList.remove("apply-shake");
                })
                this.endgame('lose');
            }, 100);
        }

    }
    checkForDouble(){

    }
    checkSum(){

    }
    checkForAce(){

    }
    endgame(message){
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

        if(message == 'draw'){
            setTimeout(() => {
                document.querySelector('.gameaftermath').classList.remove('hidden');
                setTimeout(() => {
                    document.querySelector('.draw').classList.remove('hidden');
                    document.querySelector('.draw').addEventListener('animationend',()=>{
                        document.querySelector('.draw').classList.remove('animatein');
                        document.querySelector('.draw').classList.add('text-pulse');

                        document.querySelector('html').addEventListener('click',()=>{
                            document.querySelector('.draw').classList.remove('text-pulse');
                            document.querySelector('.draw').classList.add('animateout');
                            document.querySelector('.gameaftermath').classList.add('animateout');

                            document.querySelector('.draw').addEventListener('animationend', ()=>{
                                document.querySelector('.draw').classList.add('hidden');
                                document.querySelector('.draw').classList.remove('animateout');
                            })
                            document.querySelector('.gameaftermath').addEventListener('animationend', ()=>{
                                document.querySelector('.gameaftermath').classList.add('hidden');
                                document.querySelector('.gameaftermath').classList.remove('animateout');
                                this.resetTable();
                                this.resetBet();
                            })
                        })
                    })
                }, 500);                
            }, 500);

            
            this.wallet += this.amount;
            this.amount = 0;

        }else if(message == 'blackjack'){
            setTimeout(() => {
                document.querySelector('.gameaftermath').classList.remove('hidden');
                setTimeout(() => {
                    document.querySelector('.blackjack').classList.remove('hidden');
                    document.querySelector('.blackjack').addEventListener('animationend',()=>{
                        document.querySelector('.blackjack').classList.remove('animatein');
                        document.querySelector('.blackjack').classList.add('text-pulse');

                        document.querySelector('html').addEventListener('click',()=>{
                            document.querySelector('.blackjack').classList.remove('text-pulse');
                            document.querySelector('.blackjack').classList.add('animateout');
                            document.querySelector('.gameaftermath').classList.add('animateout');

                            document.querySelector('.blackjack').addEventListener('animationend', ()=>{
                                document.querySelector('.blackjack').classList.add('hidden');
                                document.querySelector('.blackjack').classList.remove('animateout');
                            })
                            document.querySelector('.gameaftermath').addEventListener('animationend', ()=>{
                                document.querySelector('.gameaftermath').classList.add('hidden');
                                document.querySelector('.gameaftermath').classList.remove('animateout');
                                this.resetTable();
                                this.resetBet();
                            })
                        })
                    })
                }, 500);
            }, 500);
            
            this.wallet += (1.5 * this.amount);
            this.amount = 0;

        }else if(message == 'lose'){
            setTimeout(() => {
                document.querySelector('.gameaftermath').classList.remove('hidden');
                setTimeout(() => {
                    document.querySelector('.lose').classList.remove('hidden');
                    document.querySelector('.lose').addEventListener('animationend',()=>{
                        document.querySelector('.lose').classList.remove('animatein');
                        document.querySelector('.lose').classList.add('text-pulse');

                        document.querySelector('.lose').addEventListener('animationend',()=>{
                            document.querySelector('.lose').classList.remove('text-pulse');
                            document.querySelector('.lose').classList.add('animateout');

                            document.querySelector('.lose').addEventListener('animationend', ()=>{
                                console.log(message);
                                document.querySelector('.lose').classList.add('animatein');
                                document.querySelector('.lose').classList.add('hidden');
                                document.querySelector('.lose').classList.remove('animateout');
                                
                                
                                if(this.wallet > 0){
                                    document.querySelector('.newhand').classList.remove('hidden');
                                    document.querySelector('.newhand').addEventListener('animationend',()=>{
                                        document.querySelector('.newhand').classList.remove('animatein');
                                        document.querySelector('.newhand').classList.add('text-pulse');

                                        document.querySelector('.newhand').addEventListener('animationend',()=>{
                                            document.querySelector('.newhand').classList.remove('text-pulse');
                                            document.querySelector('.newhand').classList.add('animateout');
                                            document.querySelector('.gameaftermath').classList.add('animateout');

                                            document.querySelector('.newhand').addEventListener('animationend', ()=>{
                                                document.querySelector('.newhand').classList.add('hidden');
                                                document.querySelector('.newhand').classList.remove('animateout');
                                                document.querySelector('.gameaftermath').classList.add('animateout');
                                                document.querySelector('.gameaftermath').addEventListener('animationend', ()=>{
                                                    document.querySelector('.gameaftermath').classList.add('hidden');
                                                    document.querySelector('.gameaftermath').classList.remove('animateout');
                                                    this.resetTable();
                                                    this.resetBet();
                                                })
                                            })
                                        })
                                    })
                                }
                                
                            })
                        })
                    })
                }, 500);
            }, 500);

            this.amount = 0;
        }
    }

    resetTable(){
        let cardcontainers = document.querySelectorAll('.cardcontainer');
        cardcontainers.forEach(card => {
            console.log(card.innerHTML);
            let newemptycard = document.createElement('div');
            newemptycard.classList.add('empty');
            card.parentNode.replaceChild(newemptycard, card);
            
        });
    }
    resetBet(){
        
        document.querySelector('.prebet').style.removeProperty('display');
        document.querySelector('.postbet').classList.add('hidden');
        document.querySelector('.chipstable').style.removeProperty('display');
        document.getElementById('amount').innerHTML = this.amount;
        

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
            if(amountbet>Game.wallet){amountbet=Game.wallet};
            if(amountbet>500){amountbet=500};
            document.getElementById('amount').innerHTML = amountbet;
        }
        if(pokerchips[i].classList.contains('red')){
            amountbet+=5;
            if(amountbet>Game.wallet){amountbet=Game.wallet};
            if(amountbet>500){amountbet=500};
            document.getElementById('amount').innerHTML = amountbet;
        }
        if(pokerchips[i].classList.contains('blue')){
            amountbet+=10;
            if(amountbet>Game.wallet){amountbet=Game.wallet};
            if(amountbet>500){amountbet=500};
            document.getElementById('amount').innerHTML = amountbet;
        }
        if(pokerchips[i].classList.contains('green')){
            amountbet+=25;
            if(amountbet>Game.wallet){amountbet=Game.wallet};
            if(amountbet>500){amountbet=500};
            document.getElementById('amount').innerHTML = amountbet;
        }
        if(pokerchips[i].classList.contains('black')){
            amountbet+=100;
            if(amountbet>Game.wallet){amountbet=Game.wallet};
            if(amountbet>500){amountbet=500};
            document.getElementById('amount').innerHTML = amountbet;
        }
        console.log(amountbet)
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
// amountbet = 200;
document.querySelector('.bet').click();