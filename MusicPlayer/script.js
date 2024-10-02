let songarray = [
    {songname : "Pehle bhi mein",songduration : "4:08",songurl : "./songslink/pehlebhimein.mp3", songimg : "https://th.bing.com/th/id/OIP.PdoE-CESgFWRBYLQOlOIcQAAAA?rs=1&pid=ImgDetMain"},
    {songname : "Satranga",songduration : "4:32",songurl : "./songslink/satranga.mp3",songimg : "https://th.bing.com/th/id/OIP.PdoE-CESgFWRBYLQOlOIcQAAAA?rs=1&pid=ImgDetMain"},
    {songname : "Chhammak chhallo",songduration : "4:05",songurl : "./songslink/chhammakchhallo.mp3", songimg : "https://wallpaperaccess.com/full/3420608.jpg"},
    {songname : "Mein dhoondhne",songduration : "5:33",songurl : "./songslink/meindhoondhne.mp3", songimg : "https://i.ytimg.com/vi/l1NrlYROPVU/maxresdefault.jpg"},

]

let songslist = document.querySelector(".songlist");

let currentsong = document.querySelector(".currentsong");

let audio = new Audio();

let selectedsong = 0;

let play = document.querySelector(".play");
let back = document.querySelector(".back");
let forward = document.querySelector(".forward");


function addsongs(){
    
let clutter = "";

songarray.forEach(function(song,idx){
    clutter += `<div id ="${idx}" class="song">
                <div class="songimage"><img src="${song.songimg}" alt=""></div>
                    <div class="songname">${song.songname}</div>
                    <div class="songduration">${song.songduration}</div>
                </div>`
})

songslist.innerHTML = clutter;
}

songslist.addEventListener("click", (dets)=> {
    
    // console.log(songarray[(dets.target.closest(".song")).id].songname);             //To ensure you always get the correct .song div regardless of which nested element was clicked, you can use the closest method. The closest method is used to traverse up the DOM tree to find the closest ancestor that matches a specified selector.

    currentsong.innerHTML = `<img src="${songarray[dets.target.id].songimg}" alt=""></img>`

    play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    selectedsong = dets.target.id;
    audio.src = songarray[selectedsong].songurl;
    audio.play();

})

addsongs();



let check =0 ; 

play.addEventListener("click", function(){
    if(check==0){
        play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        check = 1;
        audio.play();
    }
    else{
        play.innerHTML = `<i class="fa-solid fa-play">`;
        check =0;
        audio.pause();
    }
})

forward.addEventListener("click", function(){

    if(selectedsong < songarray.length-1){
        audio.src = songarray[++selectedsong].songurl;
        currentsong.innerHTML = `<img src="${songarray[selectedsong].songimg}" alt=""></img>`
        audio.play();
    }
    else{
        forward.style.opacity = "0.3";
    }

})

back.addEventListener("click",function(){

    if(selectedsong>0){
        audio.src = songarray[--selectedsong].songurl;
        currentsong.innerHTML = `<img src="${songarray[selectedsong].songimg}" alt=""></img>`
        audio.play();

    }
    else{
        back.style.opacity = "0.3";
    }
})