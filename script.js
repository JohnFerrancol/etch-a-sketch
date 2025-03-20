const gridContainer = document.querySelector(".grid-container");

// Creating the 16x16 grid by adding 256 of such grid elements
for (let i = 0; i < 256; i++) {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  gridContainer.appendChild(gridItem);
}

// By using event delegration, color the grid black if it moused over
gridContainer.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "black";
});
