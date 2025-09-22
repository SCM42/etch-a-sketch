const parentContainer = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("grid-square");
    newSquare.setAttribute("style", "width: 48px; height: 48px; border: 1px solid black");

    parentContainer.appendChild(newSquare);
}

const squares = document.querySelectorAll(".grid-square");

squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        square.style.background = "grey"
    });
});
