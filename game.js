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

        const card = document.getElementById(i + 1);
        card.appendChild(this.element);
        console.log(i);
        console.log(cards[i]);
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

        flippedCards++;
    }
    else {
        matchPair();
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

function matchPair() {
    let firstCard = 0;
    let secondCard = 0;
    let firstCardId = 0;
    let secondCardId = 0;
    for (i = 0; i < cards.length; i++) {
        if (cards[i].flipped) {
            if (firstCard === 0) {
                firstCard = cards[i].value;
            } else if (secondCard === 0) {
                secondCard = cards[i].value;
                break;
            }
        }
    } console.log(i);

    if (firstCard != secondCard) {
        console.log("distintos");
        console.log(cards.id);
        console.log(firstCardId);
        console.log(secondCardId);

        cards[firstCardId - 1].flipped = false;
        document.getElementById(firstCardId).flipped = false;
        document.getElementById(firstCardId).querySelector("img").src = cards[firstCardId - 1].backImg;

        

        cards[secondCardId - 1].flipped = false;
        document.getElementById(secondCardId).flipped = false;
        document.getElementById(secondCardId).querySelector("img").src = cards[secondCardId - 1].backImg;
    } 
}
    // if (cards[i].flipped == true) {
    //     firstCard = cards[i].value;
    //     firstCardId = cards[i].id;
    //     console.log(firstCard);
    // } if (cards[i].flipped == true) {
    //     secondCard = cards[i].value;
    //     secondCardId = cards[i].id;
    //     console.log(secondCard);
    // } 

    // for (i = 0; i < cards.length; i++)
    //  {
    //     console.log(cards[i]);
    //     // console.log(secondCard);
    //     if ((cards[i].flipped == true) && firstCard) {
    //         firstCard = cards[i].value;
    //         firstCardId = cards[i].id;
    //     } else if ((cards[i].flipped == true) && !firstCard) {
    //         secondCard = cards[i].value;
    //         secondCardId = cards[i].id;
    //         break;
    //     }
    // }

    



// function a () {
//     if (matchPair(a,b)) {
//         console.log("ok")
//     }
//     else (isthisflipped)
// }

// function flipCards (a,b) {

// }
// var primerCarta = null;
// var segundoCarta = null;

// // Manejar evento de clic en las cartas
// document.querySelectorAll('.card').forEach(item => {
//     item.addEventListener('click', event => {
//         var valueCartaClicada = event.target.; // Obtener el Value de la carta clicada

//         if (primerCarta === null) {
//             // Si es la primera carta clicada, almacenar su ID en la variable primerCarta
//             primerCarta = valueCartaClicada;
//             console.log('Primera carta seleccionada: ' + primerCarta);
//         } else {
//             // Si es la segunda carta clicada, almacenar su Value en la variable segundoCarta
//             segundoCarta = valueCartaClicada;
//             console.log('Segunda carta seleccionada: ' + segundoCarta);

//             // Aquí puedes realizar la comparación entre primerCarta y segundoCarta como lo necesites
//             // Por ejemplo:
//             if (primerCarta === segundoCarta) {
//                 console.log('Has seleccionado la misma carta dos veces.');
//             } else {
//                 console.log('Has seleccionado dos cartas diferentes.');
//             }

//             // Reiniciar las variables para la siguiente comparación
//             primerCarta = null;
//             segundoCarta = null;
//         }
//     });
// });
