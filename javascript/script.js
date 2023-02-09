const container  = document.querySelector(".container");

for(let i=0;i<(16*16);i++){
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("squareDiv");
    container.appendChild(squareDiv);
}

const squareDivs = document.querySelectorAll(".squareDiv");
squareDivs.forEach(squareDiv => squareDiv.addEventListener("mouseover",function(){
    this.style.backgroundColor = "blue";
}));