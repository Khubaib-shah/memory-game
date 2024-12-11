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
              setTimeout(() => {
                card.classList.remove("change");
                this.prevCard.classList.remove("change");
              }, 1000);
            }
            attempts.click = 0;
            this.endGame(attempts);
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
    console.log(modal);

    if (correct === cardsNumber / 2) {
      console.log("You won");
      modal.style.cssText = "visibility: visible; opacity:1;";
      wrong.textContent = attempts.wrong;
      modalBtn.onclick = () => location.reload();
    } else {
      console.log("not yet");
    }
  }
}

export default Controller;
