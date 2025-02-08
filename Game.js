let player=1;
const winsq=[
    [1,2,3],[4,5,6],
    [7,8,9],[1,4,7],
    [2,5,8],[3,6,9],
    [1,5,9],[3,5,7]
];


let winner=player;

let button=document.querySelector(".reset");

let boxes=document.querySelectorAll(".box");

let announcement=document.querySelector(".announce");
let winnerAnnounce=document.querySelector("#winner")
let Game=document.querySelector(".outer");

let X=document.querySelector("#X");
let O=document.querySelector("#O");

button.onclick=()=>{
    if (winner==1){
        X.style.backgroundColor="grey";
        O.style.backgroundColor="black";
    }else{
        O.style.backgroundColor="grey";
        X.style.backgroundColor="black";
    }
    announcement.id="hide";
    Game.id="";
    button.innerText="Reset";
    player=winner;
    gameOver=false;

    for (box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}

boxes.forEach((box)=>{
    box.onclick=()=>{
        box.disabled=true;
        if (player==1){
            box.innerHTML="X";
            X.style.backgroundColor="black";
            O.style.backgroundColor="grey";
            isWinner();
            player=2;
            
        }else if (player==2){
            box.innerHTML="O";
            X.style.backgroundColor="grey";
            O.style.backgroundColor="black";
            isWinner();
            player=1;
            
        }
    }
});

let isWinner=()=>{
    let count=0
    for (sq of winsq){
        let one=boxes[sq[0]-1].innerHTML;
        let two=boxes[sq[1]-1].innerHTML;
        let three=boxes[sq[2]-1].innerHTML;
        if(one==""||two==""||three=="") continue;
        if(one==two&&two==three){
            winner=player;
            announce(one);
            return true;
        }
        count++;
    }
    if (count==8){
        announce("draw");
    }
    return false;
};

function announce(one){
    X.style.backgroundColor="black";
    O.style.backgroundColor="black";
    announcement.id="";
    Game.id="hide";
    button.innerText="New Game";
    if (one=="draw"){
        winnerAnnounce.innerText=`Game is Draw`;
    }else{
        winnerAnnounce.innerText=`Congratulations, Winner is ${one}`;
    }
}

// onclick = (e) =>{
//     if (gameOver)return null;

//     e=e.target;
//     if (e.className=="box") {

//         if (e.ariaChecked==null){
//             e.ariaChecked=true;
//             if (player==1){
//                 data1.push(e.id);
//                 e.innerHTML="X";
//                 player=2;
//                 if (isWinner(data1)){
//                      gameOver=true;
//                     winner=1;
//                 }
//             }else if (player==2){
//                 data2.push(e.id);
//                 e.innerHTML="O";
//                 player=1;
//                 if (isWinner(data2)){
//                     gameOver=true;
//                     winner=2;
//                 }
//             }

//             // console.log(data1,data2);
//             // console.dir(e);
//             if (gameOver){
//                 alert(`Player ${winner} is winner`);
//             }
//         }
//     }
    
// }


// function isWinner(list){
//     for (sq of winsq){
//         let count=0;
//         for (i of sq){
            
//             for (j of list){
//                 if (j==i){
//                     count++;
//                 }
//             }
//             if (count==0) break;
//         }
//         if (count==3) return true;
//     }
//     if(list.length==5){
//         alert("Game is draw");
//     }
//     return false;
// }


