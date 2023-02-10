const container  = document.querySelector(".container");
const resetButton = document.querySelector("#reset");
const setGridButton = document.querySelector("#setGrid");
const randomButton = document.querySelector("#random");
let squareDivs;
let mouseDown = false;
let gridSize = 16;
let size = 400 / gridSize;
let randomMode = false;

drawGrid();
addEventListeners();

function drawGrid(){

    for(let i=0;i<gridSize**2;i++){
        const squareDiv = document.createElement("div");
        squareDiv.setAttribute("style",`width: ${size}px; height: ${size}px; background-color: white`);
        squareDiv.classList.add("squareDiv");
        container.appendChild(squareDiv);
    }

}

function addEventListeners(){

    squareDivs = document.querySelectorAll(".squareDiv");

    squareDivs.forEach(squareDiv => {
        squareDiv.addEventListener("mousedown",function(e){
            e.preventDefault();
            mouseDown = true;
            if(!randomMode){
                this.style.backgroundColor = "black";
            }else{
                this.style.backgroundColor = randomizeRGB();
            }
        });
        squareDiv.addEventListener("mouseup",function(){
            mouseDown = false;
        });
        squareDiv.addEventListener("mouseover",function(){
            if(mouseDown){
                if(!randomMode){
                    this.style.backgroundColor = "black";
                }else{
                    this.style.backgroundColor = randomizeRGB();
                }
            }
        });
    });

}

resetButton.addEventListener("click",reset);

function reset(){
    squareDivs.forEach(squareDiv => squareDiv.style.backgroundColor = "white");
}

setGridButton.addEventListener("click",setGrid);

function setGrid(){

    gridSize = prompt("enter number between 10 and 100:");
    if(!gridSize || isNaN(gridSize)){
        return;
    }
    gridSize = +gridSize;
    if(gridSize<10 || gridSize>100){
        return;
    }
    size = 400 / gridSize;
    container.replaceChildren();
    drawGrid();
    addEventListeners();

}

container.addEventListener("mouseleave",function(){
    if(mouseDown){
        mouseDown=false;
    }
});

randomButton.addEventListener("click",triggerRandomMode);

function triggerRandomMode(){

    if(randomMode){
        randomMode = false;
        randomButton.textContent = "Randomize colors: OFF";
    }else{
        randomMode = true;
        randomButton.textContent = "Randomize colors: ON";
    }

}

function randomizeRGB(){

    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;

}