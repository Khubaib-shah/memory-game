import Elements from "./element.js";
class Controller {
  constructor(cardsNumber) {
    this.elements = new Elements(cardsNumber);
  }
}

export default Controller;
