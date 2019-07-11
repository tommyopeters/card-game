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
