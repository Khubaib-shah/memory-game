class Elements {
  constructor(cardsNumber) {
    this.cardsNumber = cardsNumber;
    this.playground = document.querySelector(".playground");
    this.cardsIndex = [];
    this.doubleindex();
    this.createCard();

    this.cards = document.querySelectorAll(".card");

    this.attempts = {
      correct: 0,
      wrong: 0,
      click: 0,
    };
    this.modal = document.querySelector(".modal");
    this.modalBtn = document.querySelector(".modal-btn");
    this.restartBtn = document.querySelector(".restart-btn");
    this.wrong = document.querySelector(".wrong");
    this.timer = document.querySelector(".timer");
    this.modalTime = document.querySelector(".modal-time");

    this.restartGame();
  }

  doubleindex() {
    for (let i = 1; i <= this.cardsNumber; i++) {
      this.cardsIndex.push(
        i <= this.cardsNumber / 2 ? i : i - this.cardsNumber / 2
      );
    }
  }

  shuffleIndex(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  createCard() {
    this.playground.style.gridTemplateRows = `repeat(${Math.sqrt(
      this.cardsNumber
    )}, 1fr)`;
    this.playground.style.gridTemplateColumns = `repeat(${Math.sqrt(
      this.cardsNumber
    )}, 1fr)`;

    const fragment = document.createDocumentFragment();
    this.shuffleIndex(this.cardsIndex);

    this.cardsIndex.forEach((index) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("data-index", index);

      const img = document.createElement("img");
      img.src = `images/icon-${index}.png`;
      img.alt = `Card ${index}`;
      card.appendChild(img);

      fragment.appendChild(card);
    });

    this.playground.appendChild(fragment);
  }

  restartGame() {
    this.restartBtn.onclick = () => {
      this.modal.style.cssText =
        "visibility: visible; opacity:1; transition: opacity .5s";
      const modalContent = this.modal.firstElementChild;

      modalContent.innerHTML = `
        <h2 class="modal-text">Do you want to quit the game?</h2>
        <div>
          <button class="btn yes-btn" style="background:red; margin-inline:.5rem">Yes</button>
          <button class="btn cancel-btn">Cancel</button>
        </div>`;

      modalContent.querySelector(".cancel-btn").onclick = () => {
        this.modal.style.cssText =
          "visibility: hidden; opacity:0; transition: opacity .5s";
      };
      modalContent.querySelector(".yes-btn").onclick = () => {
        location.reload();
      };
    };
  }
}

export default Elements;
