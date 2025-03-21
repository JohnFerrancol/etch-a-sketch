const gridContainer = document.querySelector(".grid-container");
const displayGridSize = document.querySelector(".display");
const selectionDropdown = document.querySelector("#selection-dropdown");
const range = document.querySelector("#range");
const clearButton = document.querySelector("#clear");
let selection = "black";

// Load the page with a 16x16 grid by default
window.addEventListener("load", createGrid(16));

// Run the createGrid function to change the grid size of the grid-container
range.addEventListener("input", () => createGrid(range.value));

// When a grid item in the grid container is hovered over, run the changeGridItem function to change the background color
gridContainer.addEventListener("mouseover", (event) =>
  changeGridItem(event.target, selectionDropdown.value)
);

// When the button is pressed to clear the grid container, set all of the square to white
clearButton.addEventListener("click", () => clearGrid());

function createGrid(gridSize) {
  // Select all of the divs with the class grid-item and remove them
  const gridDivs = document.querySelectorAll(".grid-item");
  gridDivs.forEach((grid) => {
    grid.remove();
  });

  // Set the size of each square in the grid
  const containerSize = 600;
  let cellSize = containerSize / gridSize;

  // For an ixi squares, we need ixi number of sqaures, using a for loop create ixi number of squares
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement("div");
    gridItem.style.width = `${cellSize}px`;
    gridItem.style.height = `${cellSize}px`;
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);
  }

  // Display the new grid size after changingg
  displayGridSize.textContent = `${gridSize} x ${gridSize}`;
}

// This function is used to change the background color of the grid based on the selection
function changeGridItem(target, selection) {
  if (target.matches(".grid-item")) {
    if (selection === "black") {
      target.style.backgroundColor = "black";
    } else if (selection === "RGB") {
      target.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
    } else if (selection == "erase") {
      target.style.backgroundColor = "white";
      target.style.opacity = "1";
    } else {
      // For the darkening effect, we can set the initial opacity to 0.5
      if (target.style.backgroundColor === "white") {
        target.style.opacity = 0.1;
      }
      target.style.backgroundColor = "black";

      // Incrementally increase the opacity by 0.1 each time the square is moused over
      target.style.opacity = String(Number(target.style.opacity) + 0.1);
    }
  }
}

function clearGrid() {
  // Select all of the div with the class grid-item and reset their color and opacity
  const gridDivs = document.querySelectorAll(".grid-item");
  gridDivs.forEach((grid) => {
    grid.style.backgroundColor = "white";
    grid.style.opacity = "1";
  });
}
