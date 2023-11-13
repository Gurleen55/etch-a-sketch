let boxes;
let container = document.getElementById('container');
let erasor = true;
const INITIAL_SIZE = 16;
let color = 255;



function createHover(){
    let startSketching = document.querySelector("#container");
    startSketching.addEventListener("click", () =>{
        let hover = document.querySelector("#container");

    hover.addEventListener("mouseover", (e) => {
        
        e.target.style.backgroundColor = `rgb(${color}, ${color}, ${color})`
        color = color - 5;
        

    }); 
    
    });
}
function makeInitialGrid(){
    for(let i = 0; i < INITIAL_SIZE * INITIAL_SIZE; i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('grid');
        container.appendChild(newDiv);
     }
}

makeInitialGrid();

const btn = document.querySelector('#colored-grid');
btn.addEventListener('click', () => {
    
    removeGrid();
    makeNewGrid();
});

function removeGrid() {
    const newDivs = document.querySelectorAll('.grid');

    // removing the grid

    newDivs.forEach(element => {
        container.removeChild(element);
    })
}

function makeNewGrid() {
    
    getUserPrompt();
    let numberOfBoxes = boxes * boxes;
    for (let i = 0; i < numberOfBoxes; i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('grid');
        container.appendChild(newDiv);
    }
    let newHeight = newWidth = 360 / boxes ;
    console.log(newHeight);
    const newDivs = document.querySelectorAll('.grid');
    newDivs.forEach(element => {
        element.style.height = newHeight.toString() + "px";
        element.style.width = newWidth.toString() + "px";
      
    })

};

function getUserPrompt() {
    do {
    boxes = prompt("how many squares per side you want for the new grid(between 1-69)",)
    if (boxes == null || boxes <= 0 || boxes > 69 || boxes == " "){
        alert("invalid input")
    }
    } while (boxes == null || boxes <= 0 || boxes > 69 || boxes == " ");
    


}

function resetgrid() {
    const newGrid = document.querySelectorAll(".grid");
    newGrid.forEach(element => {
        element.style.backgroundColor = "beige";
    })
    color = 255;
}

document.querySelector("#reset").addEventListener("click", resetgrid);
document.querySelector("#erasor").addEventListener("click", eraseGrid);
document.querySelector("#start").addEventListener("click", createHover);

function eraseGrid() {
    const grid = document.querySelector("#container");
    grid.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "beige";
    })
}

