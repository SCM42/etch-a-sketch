const redBorder = document.createElement("div");
redBorder.style = "height: 800px; width: 800px; border: 45px solid red; border-radius: 25px";
redBorder.classList.add("redBody");
document.body.appendChild(redBorder);

const parentContainer = document.querySelector("#container");
redBorder.appendChild(parentContainer);

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
  return 800 / input;
}

function createNewGrid(input, size) {
  const totalSquares = input * input;

  for (let i = 0; i < totalSquares; i++) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("grid-square");
    newSquare.setAttribute(
      "style",
      `width: ${size}px`
    ); 

    parentContainer.appendChild(newSquare);
  }

  const squares = document.querySelectorAll(".grid-square");

  squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      square.style.background = getRandomRGBColor();
      square.style.border = "1px solid black";
    });
  }); 
}

// Extra credit functions
function getRandomRGBColor() {  
  let red = getRndInteger(0,256);
  let green = getRndInteger(0,256);
  let blue = getRndInteger(0,256);

  let rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
//#endregion
