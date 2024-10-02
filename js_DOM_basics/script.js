console.log("embark the journey to master javascript");

console.log(`efforts given : ${100 + 10}%`);


// Element selection ways : 

    let x = document.querySelector("h1");   //selection of element "h2"
    console.log(x);


// modifying the style via js: 

    x.style.color = "red";
    x.style.backgroundColor= "yellow";


// modifying the text : 

    let y = document.querySelector("h2");     //selecting multiple element of same type
    console.log(y);

    y.innerHTML = "dedication";


// using setTimeout function to apply effect after a specified time period:

    let z = document.querySelector("h3");

    setTimeout(function() {
        x.style.backgroundColor = "hotpink";
        y.style.backgroundColor = "gold"
        z.style.color = "cyan";
        z.style.backgroundColor = "orange";    
    }, 3000);



// Selection via Id:

    let ele1 = document.getElementById("pika");
    let ele2 = document.getElementById("mew");
    let ele3 = document.getElementById("chari");

    ele2.style.fontSize = "100px";

    ele3.style.fontSize = "100px";




// Eventlisteners : 
// apply effects on events : add event and the function to follow

    ele1.addEventListener("mousemove",function(){       //changes style on being clicked
        ele1.style.fontSize = "100px";
        ele1.style.color = "red";
        ele1.style.backgroundColor = "yellow";
        ele1.innerHTML = "pikachu"
    });

    ele2.addEventListener("mouseenter",function(){      //change on being hovered
        ele2.style.fontSize = "100px";
        ele2.style.color = "white";
        ele2.style.backgroundColor = "orange";
    });
    ele2.addEventListener("mouseleave",function(){      //effects removed once mouse leave
        ele2.style.fontSize = "100px";
        ele2.style.color = "black";
        ele2.style.backgroundColor = "white";
    });

    ele2.addEventListener("click",function(){       //changes style on other element being clicked
        ele3.style.fontSize = "100px";
        ele3.style.color = "white";
        ele3.style.backgroundColor = "purple";
    });

    ele3.addEventListener("click",function(){
        ele1.style.fontSize = "100px";
        ele1.style.color = "white";
        ele1.style.backgroundColor = "green";
        ele1.innerHTML = "Bulbasaur"
    });


// EXERCISE 1: 

// box 1 effect : 

    let var1 = document.getElementById("box1");

    var1.addEventListener("mouseenter",function(){
        var1.innerHTML = Math.floor(Math.random()*(100));
    })
    var1.addEventListener("mouseleave",function(){
        var1.innerHTML = "1";
    })  

// box2 effect : 

    let var2 = document.getElementById("box2");
    let check = 1;

    var2.addEventListener("mouseenter", function(){
        if(check%2==0){
            var2.style.backgroundColor = "red";
            var2.style.color = "lightgreen";
            check--;
        }
        else{
            var2.style.backgroundColor = "green";
            var2.style.color = "red";
            check++;
        }
    })
    var2.addEventListener("mouseleave",function(){
        var2.style.backgroundColor = "";   
        var2.style.color = "black";
    })

// box3 effect : 

let var3 = document.getElementById("box3");

var3.addEventListener("mouseenter",function(){
    let color1 = Math.floor(Math.random()*(256));
    let color2 = Math.floor(Math.random()*(256));
    let color3 = Math.floor(Math.random()*(256));

    var3.style.backgroundColor =`rgb(${color1},${color2},${color3})`;

})
var3.addEventListener("mouseleave",function(){
    var3.style.backgroundColor = "white";    
})



// box 4 effect : 

let var4 = document.querySelector("#box4");

var4.addEventListener("click", function(){
    let color1 = Math.floor(Math.random()*(256));
    let color2 = Math.floor(Math.random()*(256));
    let color3 = Math.floor(Math.random()*(256));
    var1.style.backgroundColor = `rgb(${color1},255,255)`;          
    var2.style.backgroundColor = `rgb(255,${color2},255)`;
    var3.style.backgroundColor = `rgb(255,255,${color3})`;
})




