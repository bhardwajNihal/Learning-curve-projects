let boxes = Array.from(document.querySelectorAll(".box"));
let reset = document.querySelector(".reset");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let start = document.querySelector(".start");

let firstclick = false;
let gamestarted = false;
let winnerDeclared = false;

const winningPatterns = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Top-left to bottom-right diagonal
    [2, 4, 6]  // Top-right to bottom-left diagonal
];


function handleclick(box){
    if(gamestarted == false) return;
    else if(box.innerHTML === "O" || box.innerHTML === "X"){
        return; // Prevent changing the box if already clicked
    }
    else if(firstclick == false) {
        box.innerHTML = "O";
        firstclick = true;
        player1.style.backgroundColor = "#fff";
        player2.style.backgroundColor = "lightgreen";
    }
    else{
        box.innerHTML = "X";
        firstclick = false;
        player1.style.backgroundColor = "lightgreen";
        player2.style.backgroundColor = "#fff";  
    }
}

boxes.forEach(function(box){
    box.addEventListener("click",function(){
        handleclick(box);
        checkwinner();
        console.log(winnerDeclared);
        if(winnerDeclared ===false && (boxes.every(box => box.innerHTML!= "_"))){
            console.log("tie");
            document.querySelector(".winner").innerHTML = `<h2 class = "tiemessage">It's a TIE!!!</h2>`;
            document.querySelector(".winner").style.display = "block";
            gamestarted = false
        } 
    })
})

start.addEventListener("click", ()=>{
    player1.style.backgroundColor = "#fff";
    player2.style.backgroundColor = "#fff";
    player1.style.backgroundColor = "lightgreen";
    firstclick = false;

    gamestarted = true;
    winnerDeclared = false;

    boxes.forEach(function(box) {
        box.innerHTML = "_"; // Reset the box contents
        document.querySelector(".winner").style.display = "none";
    });
})

reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerHTML = "_";
    })
        firstclick = false;
        gamestarted = false;
        winnerDeclared = false;
        player1.style.backgroundColor = "#fff";
        player2.style.backgroundColor = "#fff";
        document.querySelector(".winner").style.display = "none";
})

let checkwinner = () =>{
    for(patterns of winningPatterns){
        
        let pos1box = boxes[patterns[0]].innerHTML;
        let pos2box = boxes[patterns[1]].innerHTML;
        let pos3box = boxes[patterns[2]].innerHTML
    
        if(pos1box!="_" && pos2box!="_" && pos3box!="_"){
            if(pos1box == pos2box && pos2box == pos3box){
                document.querySelector(".winner").innerHTML = `<h2>🎉🎉 Winner : ${pos1box}!!!🎉🎉</h2>`;
                document.querySelector(".winner").style.display = "block";
                gamestarted = false;
                
                winnerDeclared = true;
                console.log(winnerDeclared)
            }
        }
        
    }
}   