const parentContainer = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-container");

    parentContainer.appendChild(newDiv);
}