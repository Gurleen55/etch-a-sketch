let boxes;
let container = document.getElementById('container');

for(let i = 0; i < 256; i++){
    let newDiv = document.createElement('div');
    newDiv.classList.add('grid');
    container.appendChild(newDiv);
}
function createHover(){
    let startSketching = document.querySelector("#container");
    startSketching.addEventListener("click", () =>{
        let hover = document.querySelector("#container");

    hover.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    }); 
    stopHovering();
    });
}

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
       createHover()
    })

};

function getUserPrompt() {
    do {
    boxes = prompt("how many squares per side you want for the new grid(between 1-69)",)
    if (boxes == null || boxes <= 0 || boxes > 70 || boxes == " "){
        alert("invalid input")
    }
    } while (boxes == null || boxes <= 0 || boxes > 70 || boxes == " ");
    


}

function resetgrid() {
    const newGrid = document.querySelectorAll(".grid");
    newGrid.forEach(element => {
        element.style.backgroundColor = "beige";
    })
}

document.querySelector("#reset").addEventListener("click", resetgrid);