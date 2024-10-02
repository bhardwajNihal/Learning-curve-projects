

let currentdisplay = document.querySelector("#display").value;

let clear = document.querySelector("#clear");

let num1 = document.querySelector("#one");
let num2 = document.querySelector("#two");
let num3 = document.querySelector("#three");
let num4 = document.querySelector("#four");
let num5 = document.querySelector("#five");
let num6 = document.querySelector("#six");
let num7 = document.querySelector("#seven");
let num8 = document.querySelector("#eight");
let num9 = document.querySelector("#nine");
let num0 = document.querySelector("#zero");

let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let remainder = document.querySelector("#remainder");
let power = document.querySelector("#power");
let dot = document.querySelector("#dot");


let enter = document.querySelector(".result");


clear.addEventListener("click",function(){
    currentdisplay = "";
    document.querySelector("#display").value = currentdisplay;

})

num1.addEventListener("click",function(){
    currentdisplay += "1";
    document.querySelector("#display").value = currentdisplay;

})
num2.addEventListener("click",function(){
    currentdisplay += "2";
    document.querySelector("#display").value = currentdisplay;
})
num3.addEventListener("click",function(){
    currentdisplay += "3";
    document.querySelector("#display").value = currentdisplay;
})
num4.addEventListener("click",function(){
    currentdisplay += "4";
    document.querySelector("#display").value = currentdisplay;
})
num5.addEventListener("click",function(){
    currentdisplay += "5";
    document.querySelector("#display").value = currentdisplay;
})
num6.addEventListener("click",function(){
    currentdisplay += "6";
    document.querySelector("#display").value = currentdisplay;
})
num7.addEventListener("click",function(){
    currentdisplay += "7";
    document.querySelector("#display").value = currentdisplay;
})
num8.addEventListener("click",function(){
    currentdisplay += "8";
    document.querySelector("#display").value = currentdisplay;
})
num9.addEventListener("click",function(){
    currentdisplay += "9";
    document.querySelector("#display").value = currentdisplay;
})
num0.addEventListener("click",function(){
    currentdisplay += "0";
    document.querySelector("#display").value = currentdisplay;
})
plus.addEventListener("click",function(){
    currentdisplay += "+";
    document.querySelector("#display").value = currentdisplay;
})
minus.addEventListener("click",function(){
    currentdisplay += "-";
    document.querySelector("#display").value = currentdisplay;
})
multiply.addEventListener("click",function(){
    currentdisplay += "*";
    document.querySelector("#display").value = currentdisplay;
})
divide.addEventListener("click",function(){
    currentdisplay += "/";
    document.querySelector("#display").value = currentdisplay;
})
remainder.addEventListener("click",function(){
    currentdisplay += "%";
    document.querySelector("#display").value = currentdisplay;
})
power.addEventListener("click",function(){
    currentdisplay += "**";
    document.querySelector("#display").value = currentdisplay;
})

dot.addEventListener("click",function(){
    currentdisplay += ".";
    document.querySelector("#display").value = currentdisplay;
})

enter.addEventListener("click",function(){
    let result = eval(currentdisplay);
    currentdisplay = result;
    document.querySelector("#display").value = currentdisplay;
})












