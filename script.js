let btn = document.querySelectorAll(".box");
let msg=document.querySelector(".msg");
let s=document.querySelector(".m");
let new_game=document.querySelector(".new-game");
let res=document.querySelector(".res");
let turn0 = true;
let winarr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
btn.forEach((val) => {
    val.addEventListener("click", () => {
        if (turn0) {
            val.innerHTML = "0";
            turn0 = false;
        }
        else {
            val.classList.add("x");
            val.innerHTML = "X";
            turn0 = true;
            }
            val.disabled=true;
            checkWinner();
        });
});

const showWinner=(winner)=>{
    s.innerText=`Winner is: ${winner}`;
    msg.classList.remove("msg");
    disableAll();
};

const newGame=()=>{
    turn0=true;
    for(let b of btn){
        b.disabled=false;
        b.innerText="";
    }
    msg.classList.add("msg");
};

new_game.addEventListener("click",newGame);
res.addEventListener("click",newGame);

const disableAll=()=>{
    for(let b of btn){
        b.disabled=true;
    }
};

const checkWinner=()=>{
    for(let pattern of winarr){
        let a=btn[pattern[0]].innerText;
        let b=btn[pattern[1]].innerText;
        let c=btn[pattern[2]].innerText;
        if(a!="" && b!="" && c!=""){
            if(a==b && b==c){
                console.log("winner is",a);
                showWinner(a);
            }
        }
    }
};
