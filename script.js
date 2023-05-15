const board = document.querySelector("#board");



//var isDrawing = false;

for (i = 0; i < 256; i++) {
    const cell = document.createElement("div");
    cell.id = "cellBoard";

    cell.addEventListener("mouseover", () =>
        cell.setAttribute("style", "background-color:blue;"));

    // cell.addEventListener("mousedown", () => {
    //     holdingMouse();
    // });
    
    // function holdingMouse() {
    //     isDrawing = !isDrawing;
    //     console.log(isDrawing);
    // }

    board.appendChild(cell);
}
