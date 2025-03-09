let select = document.querySelector("#from");
let selects = document.querySelector("#to");
let img = document.querySelector(".from img");
let img1 = document.querySelector(".to img");

const BASE_URL =
  "https://hexarate.paikama.co/api/rates/latest/";

let data;
let ans;
const h = async() => {
    let g = `${BASE_URL}${select.value}?target=${selects.value}`;
    let response = await fetch(g);
    data = await response.json();
    ans = data.data.mid;
    console.log(ans,"data");

    let amount = input.value;
    if(amount<=0||amount===""){
        amount = 1;
    }
    let finalAmount = amount*ans;    
    msg.innerText = `${amount} ${selected} = ${finalAmount} ${selected1}`;
}

for (code in countryList) {
    let newOption = document.createElement("option");
    newOption.value = code;
    newOption.innerText = code;
    select.append(newOption);
}
for (code1 in countryList) {
    let newOption = document.createElement("option");
    newOption.value = code1;
    newOption.innerText = code1;
    selects.append(newOption);
}
let selected=select.value;
select.addEventListener("change", () => {
    selected = select.value;
    selectedCountry = countryList[selected];
    let newSrc = `https://flagsapi.com/${selectedCountry}/flat/64.png`;
    img.src=newSrc;
})
let selected1=selects.value;
selects.addEventListener("change", () => {
    selected1 = selects.value;
    selectedCountry = countryList[selected1];
    let newSrc = `https://flagsapi.com/${selectedCountry}/flat/64.png`;
    img1.src=newSrc;
})


let input = document.querySelector("input");
let msg = document.querySelector(".msg_disp");

let button = document.querySelector("#exchange_btn");
button.addEventListener("click", (event) => {
    event.preventDefault();
    h();
});

window.addEventListener("load", () => {
    select.value="USD";
    selects.value="INR";
    h();
  });

