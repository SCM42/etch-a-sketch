const parentContainer = document.querySelector("#container");
parentContainer.style = "border: 2px solid black";
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  let userInput = getNumberOfSquares();

  deleteGrid();
  createNewGrid(userInput, calculateSquareSize(userInput));
})

//#region
function deleteGrid () {
    while (parentContainer.firstChild) {
        parentContainer.removeChild(parentContainer.lastChild);
    }
}

function getNumberOfSquares () {
  let userInput = parseInt(prompt("Input squares per side for new grid:"));

  if (userInput > 100) {
    alert("Can not have input over 100. Grid set to default size of 16 x 16.");
    userInput = 16;
  }  

  return userInput;
}

function calculateSquareSize(input) {
  return 800 / input - 2;
}

function createNewGrid(input, size) {
  const totalSquares = input * input;

  for (let i = 0; i < totalSquares; i++) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("grid-square");
    newSquare.setAttribute(
      "style",
      `min-width: ${size}px; min-height: ${size}px; border: 1px solid black`
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
