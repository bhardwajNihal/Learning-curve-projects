
let hitbox = document.querySelector(".hitbox");
let timer = document.querySelector(".timerbox");
let score = document.querySelector(".scorebox");
let hitnum = document.querySelector(".hitbox");
let time;
let timeinterval;
let calscore = 0;


function createbubbles(){
    let hitrandnum = Math.floor(Math.random() *10);
    hitbox.innerHTML = hitrandnum;

    for(let i = 1;i<=154;i++){
        let randnum = Math.floor(Math.random() *10);
    
        let newdiv = document.createElement("div");
    
        newdiv.className = "bubble";
        
        newdiv.textContent  = randnum;
        
        document.querySelector(".panelmain").appendChild(newdiv);
        
    }
}


function startTimer(){

time = 10;
timeinterval = setInterval(() => {
    if(time >0){
        time--;
        timer.innerHTML = time;
    }
    else clearInterval(timeinterval);
    
}, 1000);
}

document.querySelector(".reset").addEventListener("click",() => {
    document.querySelector(".panelmain").innerHTML = "";
    score.innerHTML = "00";
    clearInterval(timeinterval);
    time = 10;
    timer.innerHTML = time;
    createbubbles();
    calscore = 0 ;
    })

document.querySelector(".startbox").addEventListener("click",()=>{
    document.querySelector(".panelmain").innerHTML = "";
    score.innerHTML = "00";
    clearInterval(timeinterval); 
    createbubbles();
    startTimer();
    calscore = 0;
       
})  


let clickedbubble = document.querySelector(".panelmain");


clickedbubble.addEventListener("click",(dets) =>{
    
   if(timer.innerHTML > 0){
    let clickednum =  Number(dets.target.textContent);
        if(clickednum==hitnum.innerHTML){
            calscore +=10;
            score.innerHTML = calscore;
        }
    document.querySelector(".panelmain").innerHTML = "";
    createbubbles();
   }
   else {
    document.querySelector(".panelmain").textContent = `GAME OVER !!!YOUR FINAL SCORE : ${score.innerHTML}`;
   }

})

