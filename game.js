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
        // cards[i].id = (i + 1);
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
        // card = new CreateCard (i + 1, i + 1, `./img/front-${i + 1}.jpeg`);
        card = { id: i + 1, value: (i + 1), flipped: false, backImg: `./img/back.jpeg` };
        cards[i] = card;
    }

    cards = cards.concat(cards.map(card => ({ ...card, id: card.id + numPairs })));
    cards = shuffle(cards);
    injectCards(cards);
   
    console.log(cards);
    return cards;
}

initialiseGame(9);

cards2 = document.querySelectorAll(".card");

function flipCards() {
    /**
     * Flips the card that was clicked.
     */
    // console.log(flippedCards)
    if (flippedCards < 2) {
        /* let idDom = parseInt(document.getElementById(this.id).id);
        let cardFilter = cards.filter(function(card){
            
            return parseInt(card.id) === idDom;
        }) */
        this.dataset.flipped = true;
        cards[this.id - 1].flipped = true;

        document.getElementById(this.id).querySelector("img").src = "./img/front-" + this.dataset.value + ".jpeg";
        
        // setTimeout(() => {
            
        // },2000);
        flippedCards++;
       if (flippedCards  == 2){
            matchPair();
            flippedCards = 0;
            /* console.log(flippedCards) */
        }
    } 
    /* else {
        flippedCards = 0;
        selectedCards = [];
    } */
}
let flippedCards = 0;

cards2.forEach(function (card) {
    /**
     * Identifies the card that was clicked.
     */
    card.addEventListener("click", flipCards);
});

/* var timer1;
var timer2; */
function matchPair() {
    let selectedCards = Array.from(document.querySelectorAll("div[data-flipped='true']"));
    console.log(selectedCards[0])
    console.log(selectedCards[1])
    console.log(selectedCards);
    if (selectedCards[0].getAttribute("data-value") != selectedCards[1].getAttribute("data-value")){
        console.log("distintos");
     } else {
        console.log("Iguales");
     }
     selectedCards = [];
     
        /* cards[selectedCards[0].getAttribute("id")].flipped = false; */
       /*  document.getElementById(selectedCards[0].id).setAttribute("data-flipped", "false"); */
        // document.getElementById(selectedCards[0].id).querySelector("img").src = cards[selectedCards[0].getAttribute("id")].backImg;
        /* let timer1 = setTimeout(() => {
            document.getElementById(selectedCards[0].id).querySelector("img").src = cards[selectedCards[0].id].backImg;
        }, 1000); */

        /* cards[selectedCards[1].getAttribute("id")].flipped = false;
        document.getElementById(selectedCards[1].id).setAttribute("data-flipped", "false"); */
        // document.getElementById(selectedCards[1].id).querySelector("img").src = cards[selectedCards[1].getAttribute("id")].backImg;
       /* let timer2 = setTimeout(() => {
            document.getElementById(selectedCards[1].id).querySelector("img").src = cards[selectedCards[1].id].backImg;
        }, 1000); */
   



















       /*  if (selectedCards[0].getAttribute("data-value") == selectedCards[1].getAttribute("data-value")){
            selectedCards = [];
            flippedCards = 0;
        } else {
            setTimeout(() => {
            cards[selectedCards[0].getAttribute("id")].flipped = false;
            document.getElementById(selectedCards[0].id).setAttribute("data-flipped", "false");
            document.getElementById(selectedCards[0].id).querySelector("img").src = cards[selectedCards[0].getAttribute("id")].backImg;
            cards[selectedCards[1].getAttribute("id")].flipped = false;
            document.getElementById(selectedCards[1].id).setAttribute("data-flipped", "false");
            document.getElementById(selectedCards[1].id).querySelector("img").src = cards[selectedCards[1].getAttribute("id")].backImg;
            }, 600);   
        }   */
}
/* function clearTime(){
    clearTimeout(timer1);
    clearTimeout(timer2);
}
 */
//  function flipCard(flipped) {
    
//     this.dataset.flipped = flipped;
//     cards[this.id - 1].flipped = flipped;

//     document.getElementById(this.id).querySelector("img").src = "./img/front-" + this.dataset.value + ".jpeg";
//     console.log(flippedCards);
//  }