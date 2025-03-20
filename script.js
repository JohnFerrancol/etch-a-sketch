const gridContainer = document.querySelector(".grid-container");

// Creating a 16x16 requires 256 grids, this can be done using a for loop
for (let i = 0; i < 256; i++) {
  // Create gridItem div and add it to the gridContainer as a child
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  gridContainer.appendChild(gridItem);
}

// Add an event delegation that changes the background color of the grid to black when mousedover
gridContainer.addEventListener("mouseover", (event) => {
  let gridTarget = event.target;
  // If the element moused over has a grid-item class then change the color
  if (gridTarget.matches(".grid-item")) {
    gridTarget.style.backgroundColor = "black";
  }
});
