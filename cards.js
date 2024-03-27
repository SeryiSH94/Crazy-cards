function CreateCard(value,img) {
/**
 * Creates a card.
 * @param  {number}
 */     

    this.id = 0;
    this.value = value;
    this.flipped = false;
    this.frontImg = img;
    this.backImg = "./img/back.jpeg";
}