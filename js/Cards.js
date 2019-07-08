
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




//Create Deck function to hold 
class Deck{
    constructor(){
        this.deck = [],
        this.dealt_cards = []
    }

    generateDeck(){
        let values = [1,2,3,4,5,6,7,8,9,10,11,12,13];
        let suits = ['spadesuit', 'heartsuit', 'diamondsuit', 'clubsuit'] 
        
        let card = (suit, value) => {
            let name = value + ' of ' + suit;

            return {'name': name, 'suit': suit, 'value':value}
        }
        
        for (let s = 0; s < suits.length; s++){
            for(let v = 0; v< values.length; v++){
                this.deck.push(card(suits[s], values[v]))
            } 
        }
    }

    printDeck(){
        
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
    // deal (num_cards) {
    //     let cards = []
    //     for ( let c = 0; c < num_cards; c++ ) {
    //             let dealt_card = this.deck.shift();;
    //             cards.push(dealt_card);
    //             this.dealt_cards.push(dealt_card);
    //     };
    //     return cards;
    // }   

    replace(){
        this.deck.unshift(this.dealt_cards.shift())
    }

    clearDeck(){
        this.deck = [];
    }
}



