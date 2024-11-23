let boxes = document.querySelectorAll(".box");
let win = document.getElementById("win"); 
let reset = document.getElementById("reset");
let newGame = document.getElementById("newGame");
const combo = [
               [0,1,2],
               [3,4,5],
               [6,7,8],
               [0,3,6],
               [1,4,7],
               [2,5,8],
               [0,4,8],
               [2,4,6]
]

// clean the value of boxes

const clean = () => {
 boxes.forEach((box) => {
       box.innerText = "";
 });
}

// function for reset boxes

const resetGame = () =>{
    play0 = true;
    ableBox();
    win.innerHTML = "";
    clean();
}


// reset  button event   

reset.addEventListener("click" , () =>{
    newGame.style.visibility = "hidden";
    resetGame();
});

// new button event

newGame.addEventListener("click" , () =>{
    newGame.style.visibility = "hidden";
    resetGame();
});

// for disable box when someone win the game

const disableBox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

// remove the disability of box

const ableBox = () =>{
    for (let box of boxes){
        box.disabled = false;
    }
}


// logic for the turn of players one by one

 let play0 = true;
 boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(play0){
            box.innerHTML ="O";
            play0 = false;
        }else{
            box.innerText = "X";
            play0 = true;
         }
        box.disabled = true;
        checkWinner();
    });
 }); 
 


//  logic for declaring winner

 const checkWinner = () => {
    for(pattern of combo){
        let post1 = boxes[pattern[0]].innerText;
        let post2 = boxes[pattern[1]].innerText;
        let post3 = boxes[pattern[2]].innerText;

        if(post1 != "" && post2 != "" && post3 != ""){
            if(post1 === post2 && post2 === post3 && post3 === post1){
                win.innerHTML = `Winner ${post1}`;
                disableBox();
                newGame.style.visibility = " visible";
            }
        }
    }
 }
