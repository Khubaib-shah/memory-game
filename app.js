import Controller from "./js/controller.js";

const selectCellsNumber = document.querySelector(".select-cells-number");

const game = new Controller(selectCellsNumber.value);

selectCellsNumber.addEventListener("change", (evnt) => {
  document.querySelector(".playground").innerHTML = "";
  const newGame = new Controller(evnt.target.value);
});
