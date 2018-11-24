class Card{
	constructor(faceValue, suit){
		this.suit = suit;
		this.faceValue = faceValue;
	}
	getSuit(){
		return this.suit;
	}
	getFaceValue(){
		return this.faceValue;
	}
}

class Deck{
	constructor(){
		//takes in nothing
		//make storage for your card objects
		this.cards = [];
	}
	addCard( faceValue, suit){
		//adds a card to the deck
		//takes in a string suit and faceValue
		if(typeof suit !== 'string' || typeof faceValue !== 'string'){
			return;
		}
		//makes a new card Object from the Card template
		this.cards.push(new Card(faceValue, suit));
		//adds the card object to the storage in the constructor
		//returns the amount of cards currently stored
		return this.getCardCount();
	}
	shuffle(){
		//reorders the cards in the storage array in a random order
		//takes in nothing
		//returns nothing
		let shuffledDeck = [];
		while(this.getCardCount()){
			let randomCard = new RandomGenerator(0, this.getCardCount()-1);
			randomCard.generate();
			shuffledDeck.push(this.cards[randomCard.getNum()]);
			this.cards.splice(randomCard.getNum(), 1);
		}
		this.cards = shuffledDeck.slice();
	}
	getCardCount(){
		//gets the current amount of cards stored
		//takes in nothing
		//returns the amount of cards stored in the array in the constructor
		return this.cards.length;
	}
	dealCards( cards ){
		//deals out a number of cards
		let hand = [];
		//takes in the number of cards to deal
		if (isNaN(cards) || !this.getCardCount()){
			return;
		}
		this.shuffle();
		//removes that many cards from the deck
		//returns an array with that many cards in it
		//cannot return more cards than the deck has
		let cardsToRemove = (cards > this.getCardCount()) ? this.getCardCount() : cards;
		
		while(cardsToRemove){
			hand.push(this.cards.pop());
			--cardsToRemove;
		}
		return hand;
	}
}