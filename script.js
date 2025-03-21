const gridContainer = document.querySelector(".grid-container");
const displayGridSize = document.querySelector(".display");
let selection = "black";

window.addEventListener("load", createGrid(16));

const selectionDropdown = document.querySelector("#selection-dropdown");
console.log(selectionDropdown.value);

gridContainer.addEventListener("mouseover", (event) =>
  changeGridItem(event.target, selectionDropdown.value)
);

function changeGridItem(target, selection) {
  if (target.matches(".grid-item")) {
    if (selection === "black") {
      target.style.backgroundColor = "black";
    } else if (selection === "RGB") {
      target.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
    } else {
      target.style.backgroundColor = "white";
    }
  }
}

const range = document.querySelector("#range");

range.addEventListener("input", () => createGrid(range.value));

function createGrid(gridSize) {
  const gridDivs = document.querySelectorAll(".grid-item");

  gridDivs.forEach((grid) => {
    grid.remove();
  });

  const containerSize = 960;
  let cellSize = containerSize / gridSize;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement("div");
    gridItem.style.width = `${cellSize}px`;
    gridItem.style.height = `${cellSize}px`;
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);
  }

  displayGridSize.textContent = `${gridSize} x ${gridSize}`;
}

const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => {
  const gridDivs = document.querySelectorAll(".grid-item");

  gridDivs.forEach((grid) => {
    grid.style.backgroundColor = "white";
  });
});
