class Elements {
  constructor(cardsNumber) {
    this.cardsNumber = cardsNumber;
    this.playground = document.querySelector(".playground");
    this.cardsIndex = [];
    this.doubleindex();
    this.createCard();
  }
  doubleindex() {
    for (var i = 1; i <= this.cardsNumber; i++) {
      i <= this.cardsNumber / 2
        ? this.cardsIndex.push(i)
        : this.cardsIndex.push(i - this.cardsNumber / 2);
    }
    console.log(this.cardsIndex);
  }
  createCard() {
    this.playground.style.gridTemplateRows = `repeat(${Math.sqrt(
      this.cardsNumber
    )}, 1fr)`;
    this.playground.style.gridTemplateColumns = `repeat(${Math.sqrt(
      this.cardsNumber
    )}, 1fr)`;
    this.cardsIndex.forEach((index) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("data-index", index);

      const img = document.createElement("img");
      img.src = `images/icon-${index}.png`;
      card.append(img);
      this.playground.append(card);
    });
  }
}
export default Elements;
