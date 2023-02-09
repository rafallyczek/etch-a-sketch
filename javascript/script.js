const container  = document.querySelector(".container");

for(let i=0;i<(16*16);i++){
    const squareDiv = document.createElement("div");
    container.appendChild(squareDiv);
}