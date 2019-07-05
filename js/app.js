
//Unnecessary code to randomize between 0 and 'flo' and to repeat process if the random number == index
function createRandomNumber(flo, index){
    let random = Math.floor(Math.random() * flo);

    if(random == index){
        return createRandomNumber(flo, index);
    }else{
        return random;
    }
}
//Better version of upper code
function createRandom(flo,index){
    let
}




let container = document.querySelectorAll('.card-container');

for(let i=0; i<container.length; i++){
    let content = container[i];
    content.addEventListener('click', ()=>{
        content.classList.toggle('flipped');
    })
}

//Create Deck function to hold 
class Deck{
    constructor(){
        this.deck = [],
        this.dealt_cards = []
    }

    generateDeck(){
        let values = [1,2,3,4,5,6,7,8,9,10,11,12,13];
        let suits = ['spades', 'hearts', 'diamonds', 'clubs'] 
        
        let card = (suit, value) => {
            this.name = value + ' of ' + suit;
            this.suit = suit;
            this.value = value;

            return {name: this.name, suit: this.suit, value:this.value}
        }
        
        for (let s = 0; s < suits.length; s++){
            for(let v = 0; v< values.length; v++){
                this.deck.push(card(suits[s], values[v]))
            } 
        }
    }

    printDeck(){
        if (this.deck.length == 0){
            console.log('no deck has been generated')
        }
        else{
            for (let c = 0; c < this.deck.length; c++){
                console.log(this.deck[c].name);
            }
        }
    }

    shuffle(){
        for( let c = this.deck.length -1; c >= 0; c--){
            let tempval = this.deck[c];
            let randomindex = Math.floor(Math.random() * this.deck.length);
            while(randomindex == c){ randomindex = Math.floor(Math.random() * this.deck.length)}

            this.deck[c] = this.deck[randomindex];
            this.deck[randomindex] = tempval;
        }
        
    }

    deal(){
        let dealt_card = this.deck.shift();
        this.dealt_cards.push(dealt_card);
        return dealt_card;
    }

    replace(){
        this.deck.unshift(this.dealt_cards.shift())
    }

    clearDeck(){
        this.deck = [];
    }
}


let PlayerDeck = new Deck();
PlayerDeck.generateDeck();
PlayerDeck.shuffle();


let DealerDeck = new Deck();
DealerDeck.generateDeck();
DealerDeck.shuffle();


