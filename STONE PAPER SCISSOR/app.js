let choices = document.querySelectorAll(".choices");
let choice = document.querySelectorAll(".choice");
let msggame = document.querySelector("#msggame");
let usercount = document.querySelector("p3");
let compcount = document.querySelector("p4");

let countuser = 0;
let countcomp = 0;

choice.forEach((box) => {
    box.addEventListener("click", () => {
        let userid = box.getAttribute("Id");
        winner(userid);
    })
})

const compno = () => {
    compArr = ["rock","paper","scissor"];
    let compindex = Math.floor(Math.random()*3);
    let compid1 = compArr[compindex];
    return compid1;
}

const winner = (userid) => {
    let compid = compno();

    if(userid === compid){
        msggame.innerText = "Game is Draw , Computer is "+compid;
        msggame.style.backgroundColor = "#0813b1";
        return;
    } else {
        isWin = true;
        if(userid === "rock"){
            isWin = compid==="paper" ? false : true;
        } else if (userid === "paper"){
            isWin = compid==="scissor" ? false : true;
        } else if(userid === "scissor"){
            isWin = compid=== "rock" ? false : true;
        }
    }
    
    if(isWin==true){
        countuser++;
        usercount.innerText = countuser;
        msggame.innerText = "Congratulation You won! , Computer is "+compid;
        msggame.style.backgroundColor = "green";
    } else {
        msggame.innerText = "You Lost! , Computer is "+compid;
        msggame.style.backgroundColor = "red";
        countcomp++;
        compcount.innerText = countcomp;
    }
}
