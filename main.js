const parentContainer = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");

    parentContainer.appendChild(square);
}