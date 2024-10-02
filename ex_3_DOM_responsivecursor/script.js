

let field = document.getElementById("mainarea");
let point = document.getElementById("cursor");

field.addEventListener("mousemove",function(coordinate){

    point.style.left = coordinate.x +"px";
    point.style.top = coordinate.y +"px";
})