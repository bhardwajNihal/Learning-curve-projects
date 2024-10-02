
let arr = ["https://th.bing.com/th/id/R.c14f29dcb03437a9fb5d59b0c9e8654d?rik=%2b1E2%2fT6DKwclxA&pid=ImgRaw&r=0","https://th.bing.com/th/id/R.3895e3419fa17eddf66fbd96cdaa16bc?rik=jKASNpbkj6RCow&pid=ImgRaw&r=0","https://th.bing.com/th/id/R.5fa819d1342841d90d1c5e4bccfe86d7?rik=BVr7vtKo8IFXCw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fpokemon%2fpokemon_PNG113.png&ehk=ZQL6QW%2f3rTBlFgd0Buytv85l41VopTam6TJgfSXQioU%3d&risl=&pid=ImgRaw&r=0","https://th.bing.com/th/id/R.f4bfe51902fe8230dffaa7e6df778476?rik=EO2pt8YHXbKx1w&pid=ImgRaw&r=0","https://pngimg.com/uploads/pokemon/pokemon_PNG132.png",""
]

let var1 = document.querySelector(".cardcontainer");

let ele = "";

for(let i=0;i<60;i++){

    let rand = Math.floor(Math.random()*(arr.length-1));  
    ele += `<div class="card"><img src="${arr[rand]}" alt=""></div>`;
    
}
var1.innerHTML = ele;




