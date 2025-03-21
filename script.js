const gridContainer = document.querySelector(".grid-container");
const displayGridSize = document.querySelector(".display");

window.addEventListener("load", createGrid(16));

// Add an event delegation that changes the background color of the grid to black when mousedover
gridContainer.addEventListener("mouseover", (event) => {
  let gridTarget = event.target;
  // If the element moused over has a grid-item class then change the color
  if (gridTarget.matches(".grid-item")) {
    gridTarget.style.backgroundColor = "black";
  }
});

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
