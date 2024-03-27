function CreateCard(value,img) {
/**
 * Creates a card.
 * @param  {number}
 */     

    this.value = value;
    this.flipped = false;
    this.frontImg = img;
    this.backImg = "./img/back.jpeg";
}