const board = document.getElementById("board");
const boxes = document.querySelectorAll(".box");
const images = document.querySelectorAll(".image");
const status = document.getElementById("status");
const imagesSrc = [
    "imgs/chicken_1f414.png", "imgs/chicken_1f414.png",
    "imgs/clown-face_1f921.png", "imgs/clown-face_1f921.png",
    "imgs/messenger.png", "imgs/messenger.png",
    "imgs/youtube.png", "imgs/youtube.png",
    "imgs/discord.png", "imgs/discord.png",
    "imgs/twitch.png", "imgs/twitch.png",
    "imgs/instagram.png", "imgs/instagram.png",
    "imgs/whatsapp.png", "imgs/whatsapp.png",
    "imgs/riot.jpg", "imgs/riot.jpg",
    "imgs/lichess.png", "imgs/lichess.png"
];

let used = [];
function placeImg(src){
    let randomNum = Math.floor(Math.random()*20);
    while(used.includes(randomNum)){
        randomNum = Math.floor(Math.random()*20);
    }
    images[randomNum].src = src;
    used.push(randomNum);
}

imagesSrc.forEach((src)=>{
    placeImg(src);
})

let flippedBox = [];
boxes.forEach((box)=> {
    box.addEventListener("click", function(){
        if(!flippedBox.includes(box) && flippedBox.length!=2){
            box.style.backgroundColor = "transparent";
            box.firstChild.style.display = "unset";
            flippedBox.push(box);
            if(flippedBox.length ==2){
                if(flippedBox[0].firstChild.src==flippedBox[1].firstChild.src){
                    setTimeout(()=>{
                        flippedBox[0].style.visibility ="hidden";
                        flippedBox[1].style.visibility ="hidden";
                        checkStatus();
                        flippedBox = [];
                    },1000)
                }
                else{
                    setTimeout(()=>{
                        flippedBox[0].firstChild.style.display = "none";
                        flippedBox[1].firstChild.style.display = "none";
                        flippedBox[0].style.backgroundColor = "rgba(255, 225, 0, 0.9)";
                        flippedBox[1].style.backgroundColor = "rgba(255, 225, 0, 0.9)";
                        flippedBox = [];
                    },1000)  
                }
            }
        }
    })
})

function checkStatus(){
    if(!Array.from(boxes).some((box) => box.style.visibility=="")){
        status.innerText = "GG!";
    }
}