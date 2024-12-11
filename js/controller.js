import Elements from "./element.js";

class Controller {
  constructor(cardsNumber) {
    this.elements = new Elements(cardsNumber);
    this.prevCard = null;
    this.clickCard();
  }

  clickCard() {
    const { attempts, cards } = this.elements;

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        if (
          card.classList.contains("change") ||
          card.classList.contains("pause")
        ) {
          return;
        }

        attempts.click++;
        card.classList.add("change");

        if (attempts.click == 2) {
          cards.forEach((c) => c.classList.add("pause"));

          setTimeout(() => {
            cards.forEach((c) => c.classList.remove("pause"));

            if (
              this.prevCard &&
              this.prevCard.dataset.index === card.dataset.index
            ) {
              attempts.correct++;
              card.classList.add("stop");
              this.prevCard.classList.add("stop");
            } else {
              attempts.wrong++;
              card.classList.remove("change");
              this.prevCard.classList.remove("change");
            }
            attempts.click = 0;
            console.log(attempts.correct, attempts.wrong);
          }, 1000);
        } else {
          this.prevCard = card;
        }
      });
    });
  }
  endGame({ correct }) {
    const { cardsNumber, modal, modalBtn, wrong, attempts } = this.elements;
    if (correct === cardsNumber / 2) {
      console.log("");
    }
  }
}

export default Controller;
