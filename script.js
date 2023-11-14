
let container = document.getElementById('container');
const INITIAL_SIZE = 16;

let click = false;
let choice = "black";




makeNewGrid(INITIAL_SIZE);

function createHover(){

       
        // let startSketching = document.querySelector("#container");
        // startSketching.addEventListener("click", () =>{
        
            let hover = document.querySelector("#container");
            hover.addEventListener("mouseover", (e) => {
            
            if (click){
                e.target.style.backgroundColor = choice;
            
               
            }; 
    
            })
          
       }   // });
    


const btn = document.querySelector('#colored-grid');
btn.addEventListener('click', () => {
    
    removeGrid();
    makeNewGrid(getUserPrompt());
    click = false;
    choice = "black"
});

function removeGrid() {
    const newDivs = document.querySelectorAll('.grid');

    // removing the grid

    newDivs.forEach(element => {
        container.removeChild(element);
    })
}

function makeNewGrid(size) {
    
    let numberOfBoxes = size * size;
    for (let i = 0; i < numberOfBoxes; i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('grid');
        container.appendChild(newDiv);
    }
    let newHeight = newWidth = 360 / size ;
    console.log(newHeight);
    const newDivs = document.querySelectorAll('.grid');
    newDivs.forEach(element => {
        element.style.height = newHeight.toString() + "px";
        element.style.width = newWidth.toString() + "px";
      
    })

};

function getUserPrompt() {
    let boxes;
    do {
    boxes = prompt("how many squares per side you want for the new grid(between 1-69)",)
    if (boxes == null || boxes <= 0 || boxes > 69 || boxes == " "){
        alert("invalid input")
    }
    } while (boxes === null || boxes <= 0 || boxes > 69 || boxes.trim === "" || isNaN(boxes));
    
    return boxes;

}

function resetgrid() {
    const newGrid = document.querySelectorAll(".grid");
    newGrid.forEach(element => {
        element.style.backgroundColor = "beige";
    })
    click = false;
    choice = "black"
}

document.querySelector("#reset").addEventListener("click", resetgrid);
document.querySelector("#erasor").addEventListener("click", () => {
    choice = "beige";
    createHover();
});

document.querySelector("#start").addEventListener("click", () => {
    choice = "black";
    createHover();
});



document.querySelector('#container').addEventListener("click", () => {
    click = !click;
    
})

document.querySelector("#container").addEventListener("click", createHover)

