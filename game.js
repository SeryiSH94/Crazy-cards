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
        this.element.src = cards[i].backImg;
        startTimer();
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

let flippedCards = 0;
let firstCard = null;
let firstCardId;
function flipCards() {
    /**
     * Flips the card that was clicked.
     */
    if (flippedCards === 2){
        return;
    }

    const value = this.dataset.value;
    this.dataset.flipped= true;
    this.firstChild.src = "./img/front-" + value + ".jpeg";
    flippedCards++;
    if (flippedCards === 1) {
        firstCard = this.dataset.value;
        firstCardId = this.id
        console.log(firstCard);
        console.log(firstCardId);
    } else if (flippedCards === 2){
        let secondCard = this.dataset.value;
        console.log(secondCard);
        if(firstCard === secondCard){
            flippedCards = 0;
            firstCard = 0;
            hitEnemy();
        } else {
            setTimeout(() => {
                let element = document.getElementById(firstCardId);
                element.dataset.flipped = false;
                element.firstChild.src = "./img/back.jpeg";
                this.dataset.flipped = false;
                this.firstChild.src = "./img/back.jpeg";
                flippedCards = 0;
                firstCard = 0;
                hitCharacter();
            }, 1000);
        }
    }
}


cards2.forEach(function (card) {
    /**
     * Identifies the card that was clicked.
     */
    card.addEventListener("click", flipCards);
});

let characterLife = 5;
let enemyLife = 9;

function hitCharacter(){
    characterLife--;
    document.getElementById('character_life').textContent = characterLife;
    if(characterLife <= 0){
        alert("Has sido derrotado");
        setTimeout(() => {
        window.location.reload();   
        }, 300);
    }
}

function hitEnemy(){
    enemyLife--;
    document.getElementById('enemy_life').textContent = enemyLife;
}
function startTimer(){
    let seconds = 59;
    let minutes = 0;
    let timer = document.getElementById("timer");

    function updateTimer(){
        seconds--;
        if(seconds < 0){
            seconds = 59;
            minutes--
        }
        if(minutes === 0 && seconds === 0){
            window.location.reload();
        }
        let formatTimer = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        timer.textContent = formatTimer;
    }
    setInterval(updateTimer, 1000);
}