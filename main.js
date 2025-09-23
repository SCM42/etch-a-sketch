const parentContainer = document.querySelector("#container");
parentContainer.style = "border: 2px solid black";
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  let userInput = parseInt(prompt("Input squares per side for new grid:"));

  deleteGrid();
  createNewGrid(userInput, calculateSquareSize(userInput));
})

//#region
function deleteGrid () {
    while (parentContainer.firstChild) {
        parentContainer.removeChild(parentContainer.lastChild);
    }
}

function calculateSquareSize(input) {
  return 788 / input - 2;
}

function createNewGrid(input, size) {
  const totalSquares = input * input;

  for (let i = 0; i < totalSquares; i++) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("grid-square");
    newSquare.setAttribute(
      "style",
      `width: ${size}px; height: ${size}px; border: 1px solid black`
    );

    parentContainer.appendChild(newSquare);
  }

  const squares = document.querySelectorAll(".grid-square");

  squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      square.style.background = "grey";
    });
  }); 
}
//#endregion
