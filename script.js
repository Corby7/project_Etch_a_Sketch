const board = document.getElementById('board');
var gridSize = document.getElementById('gridsize');
var userSubmit = document.getElementById('user-submit');

//var sizeAlert = document.getElementById('size-alert');
//var isDrawing = false;

userSubmit.addEventListener("click", () => {
    let size = gridSize.value;
    createGrid(size);
});

function createGrid(size) {
    console.log(gridSize.value);
    // var numberOfCells = gridSize.value;
    let totalCells = size * size;

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < totalCells; i++) {

        let cell = document.createElement("div");
        cell.addEventListener("mouseover", () =>
            cell.setAttribute("style", "background-color:blue;"));
        cell.id = "cellBoard";
        board.appendChild(cell);
    }

    console.log(totalCells);
}


// for (i = 0; i < 256; i++) {
//     const cell = document.createElement("div");
//     cell.id = "cellBoard";

    // cell.addEventListener("mouseover", () =>
    //     cell.setAttribute("style", "background-color:blue;"));

//     // cell.addEventListener("mousedown", () => {
//     //     holdingMouse();
//     // });
    
//     // function holdingMouse() {
//     //     isDrawing = !isDrawing;
//     //     console.log(isDrawing);
//     // }

//     board.appendChild(cell);
// }
