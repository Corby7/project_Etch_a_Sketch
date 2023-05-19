let board = document.getElementById("board");
let gridSize = document.getElementById("gridsize");
let colorpicker = document.getElementById("colorpicker"); 
let copyInput = document.getElementById("copy-input");
let sizeAlert = document.getElementById("size-alert");

//current selected color
let pickedColor = "black";

mirrorInput();
createBoard(16);

//buttons

//shows(onfocus) or hides(onblur) warning about grid size on input
focusWarning = () => sizeAlert.textContent = "Enter a number between 2 and 100.";

blurWarning = () => sizeAlert.textContent = "";

//mirrors user input to represent row x column
function mirrorInput() {
    gridSize.value
    copyInput.textContent = "x " + gridSize.value;
}

//lets user submit grid size by pressing the "Enter" key
gridSize.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("user-submit").click();
    }
})

//drawing options

//draw with black/default color
drawBlack = () => pickedColor = "black";

//pick rgb color to draw with
drawPickedColor = () => pickedColor = colorpicker.value;

//picks random color to draw with
function drawRandom() {
    let allCells = document.querySelectorAll("#cellBoard");
    allCells.forEach((div) => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    pickedColor = "#" + randomColor;
    });
    document.getElementById("random");
    random.style.backgroundColor = pickedColor;
}

//input grid size & create board
function submitSize() {
    if (gridSize.value < 2 || gridSize.value > 100) {
        sizeAlert.textContent = "Number is not between 2 and 100!";
   } else if (gridSize.value > 2 || gridSize.value < 100) {
        clearBoard();
        createBoard(gridSize.value);
   } else {
        sizeAlert.textContent = "Please enter a correct numerical value!";
   }
}

//clears board by replacing all div's with original color
function clearBoard() {
    let allCells = document.querySelectorAll("#cellBoard");
    allCells.forEach((div) => {div.style.backgroundColor = "white"});
}

//creates board's grid size with user's input
function createBoard(size) {
    let totalCells = size * size;

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < totalCells; i++) {

        let cell = document.createElement("div");
        
        function draw() {
            cell.addEventListener("mouseover", () =>
                cell.style.backgroundColor = pickedColor);
        }
        draw();

        cell.id = "cellBoard";
        board.appendChild(cell);
    }
}