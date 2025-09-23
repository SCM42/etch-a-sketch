const parentContainer = document.querySelector("#container");
parentContainer.style = "border: 2px solid black";
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    let userInput = parseInt(prompt("Input squares per side for new grid:"));

    createGrid(userInput, calculateSquareSize(userInput));
});

function calculateSquareSize (input) {
    return newSize = (800 / input) - 2;
};

function createGrid(input, size) {
    const totalSquares = (input * input);
    
    for (let i = 0; i < totalSquares; i++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("grid-square");
        newSquare.setAttribute("style", `width: ${size}px; height: ${size}px; border: 1px solid black`);

        parentContainer.appendChild(newSquare);
    }

    const squares = document.querySelectorAll(".grid-square");

    squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        square.style.background = "grey"
    });
});
};