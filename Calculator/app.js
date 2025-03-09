let button = document.querySelectorAll(".btn");
let dis = document.querySelector("#display");
let equal = document.querySelector(".btn1");


button.forEach((btn) => {
    btn.addEventListener("click", () => {
        let btnid = btn.getAttribute("id");
        if(btnid === ""){
            dis.innerText = "";
        } else if (btnid === "d"){
            let b = dis.innerText;
            let c = b.length-1;
            dis.innerText = dis.innerText.toString().slice(0,c);
        }else {
            console.log(btnid);
            dis.innerText += btnid;
        }
    })
});



equal.addEventListener("click", () => {
    let a = dis.innerText;
    dis.innerText = eval(a.replaceAll("MOD","%"));
    dis.innerText = eval(a.replaceAll("^","**"));
})