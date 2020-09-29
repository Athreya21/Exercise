// Create a function for shuffling the elements in an array
Array.prototype.shuffle = function (repeat) {

    repeat = (repeat === undefined) ? 1 : repeat;

    for (let i = 0; i < repeat; i++) {
        let currentIndex = this.length, temporaryValue, randomIndex;

        // when shuffeling is possible
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            //  swapping the current element.
            temporaryValue = this[currentIndex];
            this[currentIndex] = this[randomIndex];
            this[randomIndex] = temporaryValue;
        }
    }
    return this;
};

// initiate deck
let ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let suits = ['♠', '♡', '♢', '♣'];

// Adds all 52 standard cards to a deck
let resetDeck = function (deck) {

    deck = [];

    suits.forEach(function (suit) {
        ranks.forEach(function (rank) {
            deck.push(rank + suit);
        });
    });
    return deck;
};

// to daeal with given no. of cards
let deal = function (limit) {
    return deck.splice(0, limit);
};

let draw = function () {
    if (draw.empty()) {
        reshuffle();
    }
    return draw.pop();
}
// for 2 players
let hand1 = hand2 = [];
let hands = {
    0: hand1,
    1: hand2,

};

// Reset and shuffle a deck of cards
let deck = resetDeck().shuffle(8);

// Deal five cards to each player
console.log(hand1 = deal(5));
console.log(hand2 = deal(5));

console.log(resetDeck);
console.log(deck);
console.log(draw);