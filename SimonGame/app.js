let p = document.querySelector("p");

let gameSeq = [];
let userSeq = [];

let btns = ["div1","div2","div3","div4"];
let started = false;
let level = 0;
let highScoure = 0;

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started.");
        started = true;

        setTimeout(levelUp,1000);
    }
});

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    p.innerText=`Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);


    gameFlash(randbtn);
}

function checkAns(idx){ 
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        if(highScoure < level-1){
            highScoure=level-1;
        }
        p.innerHTML=`GAME OVER! Your Scoure: ${level-1} <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;High Scoure: ${highScoure}<br> &nbsp;&nbsp;&nbsp; Press any key to start Again.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
        reset();
    }
}
function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".inner");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    userSeq = [];
    gameSeq = [];
    started = false;
    level = 0;
}