let cards = [];

function shuffle(array) {
    /**
     * Rearranges the content by mixing together randomly.
     * @param  {array}
     * @return  {array}
     */

    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

function injectCards(cards) {
    /**
     * Adds all cards to the HTML DOM.
     * @param  {array}
     */

    for (i = 0; i < cards.length; i++) {
        this.element = document.createElement("div");
        this.element.id = (i + 1);
        cards[i].id = this.element.id;
        this.element.className = "card";
        this.element.dataset.value = cards[i].value;
        this.element.dataset.flipped = cards[i].flipped;

        const board = document.getElementById("board");
        board.appendChild(this.element);

        this.element = document.createElement("img");
        this.element.src = cards[i].backImg;

        const card = document.getElementById(i + 1);
        card.appendChild(this.element);
        // console.log(i);
        // console.log(cards[i]);
    }
}

function initialiseGame(numPairs) {
    /**
     * Places the shuffled cards on the board.
     * @param  {number}
     * @return  {array}
     */

    let card;

    for (i = 0; i < numPairs; i++) {
        card = new CreateCard(i + 1, "./img/front-" + (i + 1) + ".jpeg");
        cards[i] = card;
    }

    cards = cards.concat(cards);
    cards = shuffle(cards);
    injectCards(cards);

    return cards;
}

initialiseGame(9);

cards2 = document.querySelectorAll(".card");

function flipCard() {
    /**
     * Flips the card that was clicked.
     */
    if (flippedCards < 2) {
        this.dataset.flipped = true;
        cards[this.id - 1].flipped = true;

        document.getElementById(this.id).querySelector("img").src = "./img/front-" + this.dataset.value + ".jpeg";
        console.log(flippedCards);
        // setTimeout(() => {
            
        // },2000);
        flippedCards++;
        if (flippedCards  == 2){
            const cards = document.querySelectorAll("div[data-flipped='true']");
        console.log("dentro");   
            matchPair(cards);
        }
    }
    else {
        flippedCards = 0;
    }
}

let flippedCards = 0;

cards2.forEach(function (card) {
    /**
     * Identifies the card that was clicked.
     */
    card.addEventListener("click", flipCard);
});

function matchPair(selectedCards) {
    console.log(selectedCards[0].getAttribute("data-value"));
    console.log(selectedCards[1].getAttribute("data-value"));
    if (selectedCards[0].getAttribute("data-value") != selectedCards[1].getAttribute("data-value") ){
        cards[selectedCards[0].getAttribute("id")].flipped = false;
        document.getElementById(selectedCards[0].id).flipped = false;
        // document.getElementById(selectedCards[0].id).querySelector("img").src = cards[selectedCards[0].getAttribute("id")].backImg;
        setTimeout(() => {
            document.getElementById(selectedCards[0].id).querySelector("img").src = cards[selectedCards[0].getAttribute("id")].backImg;
        }, 1000);
        

        cards[selectedCards[1].getAttribute("id")].flipped = false;
        document.getElementById(selectedCards[1].id).flipped = false;
        // document.getElementById(selectedCards[1].id).querySelector("img").src = cards[selectedCards[1].getAttribute("id")].backImg;
        setTimeout(() => {
            document.getElementById(selectedCards[1].id).querySelector("img").src = cards[selectedCards[1].getAttribute("id")].backImg;
        }, 1000);
    }
}