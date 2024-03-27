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

cards = document.querySelectorAll(".card");

function flipCard() {
/**
 * Flips the card that was clicked.
 */  

    this.dataset.flipped = true;

    switch (this.dataset.value) {
        case "1":
            document.getElementById(this.id).querySelector("img").src = "./img/front-1.jpeg";
            break;
        case "2":
            document.getElementById(this.id).querySelector("img").src = "./img/front-2.jpeg";
            break;
        case "3":
            document.getElementById(this.id).querySelector("img").src = "./img/front-3.jpeg";
            break;
        case "4":
            document.getElementById(this.id).querySelector("img").src = "./img/front-4.jpeg";
            break;  
        case "5":
            document.getElementById(this.id).querySelector("img").src = "./img/front-5.jpeg";
            break;    
        case "6":
            document.getElementById(this.id).querySelector("img").src = "./img/front-6.jpeg";
            break;  
        case "7":
            document.getElementById(this.id).querySelector("img").src = "./img/front-7.jpeg";
            break;
        case "8":
            document.getElementById(this.id).querySelector("img").src = "./img/front-8.jpeg";
            break;
        case "9":
            document.getElementById(this.id).querySelector("img").src = "./img/front-9.jpeg";
            break;    
        default:
            break;                                    
    }  
}

cards.forEach(function(card) {
/**
 * Identifies the card that was clicked.
 */  

    card.addEventListener("click", flipCard);
});