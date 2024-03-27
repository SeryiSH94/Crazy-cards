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
        this.element.className = "card";
        this.element.dataset.value = cards[i].value;   
        this.element.dataset.flipped = cards[i].flipped;
        
        const board = document.getElementById("board");
        board.appendChild(this.element);

        this.element = document.createElement("img");
        this.element.src = "./img/back.jpeg";
    
        const card = document.getElementById(i + 1);
        card.appendChild(this.element);
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
        card = new CreateCard(i + 1);
        cards[i] = card;
    }

    cards = cards.concat(cards); 
    cards = shuffle(cards);
    injectCards(cards);

    return cards;
}

initialiseGame(9);