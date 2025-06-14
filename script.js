let boxes=document.querySelectorAll(".box");
let msg=document.querySelector("#congrats");
let wnrcontainer=document.querySelector(".wnrcontainer");
let newgamebtn=document.querySelector("#newgame");
let resett=document.querySelector("#reset");
resett.classList.remove("hide");
const pat=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let turn=false;
const reset=()=>{
    turn=false;
    enableboxes();
}
resett.addEventListener("click",()=>{
    reset();
});
const newgamee=()=>{
    turn=false;
    enableboxes();
    wnrcontainer.classList.add("hide");
    resett.classList.remove("hide");
}
newgamebtn.addEventListener("click",()=>{
    newgamee();
});
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const showwnr=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    wnrcontainer.classList.remove("hide");
    disableboxes();
    resett.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn===false){
            box.innerText="X";
            turn=true;
        }else{
            box.innerText="O";
            turn=false;
        }
        box.disabled=true;
        chkwnr();
    });
});
const chkwnr=()=>{
    for(let i of pat){
        p0=boxes[i[0]].innerText;
        p1=boxes[i[1]].innerText;
        p2=boxes[i[2]].innerText;
        if(p0 != "" && p1 != "" && p2 != ""){
            if(p0==p1 && p1==p2){
                showwnr(p0);
            }
        }
    }
};