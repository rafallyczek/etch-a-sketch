const container  = document.querySelector(".container");
const resetButton = document.querySelector("#reset");
let mouseDown = false;

for(let i=0;i<(16*16);i++){
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("squareDiv");
    container.appendChild(squareDiv);
}

const squareDivs = document.querySelectorAll(".squareDiv");

squareDivs.forEach(squareDiv => {
    squareDiv.addEventListener("mousedown",function(){
        mouseDown = true;
        this.style.backgroundColor = "black";
    });
    squareDiv.addEventListener("mouseup",function(){
        mouseDown = false;
    });
    squareDiv.addEventListener("mouseover",function(){
        if(mouseDown){
            this.style.backgroundColor = "black";
        }
    });
});

resetButton.addEventListener("click",reset);

function reset(){
    squareDivs.forEach(squareDiv => squareDiv.style.backgroundColor = "white");
}