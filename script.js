const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 256; i++) {
  let gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  gridContainer.appendChild(gridItem);
}
