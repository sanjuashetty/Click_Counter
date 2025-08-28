let heading = document.querySelector("h1");
let btn = document.querySelector("#one");

btn.addEventListener("click",increase);
let counter = 0;
function increase(){
    counter++;
    heading.textContent = counter;
}

let rst = document.querySelector("#two");

rst.addEventListener("click",reset);
function reset(){
    counter = 0;
    heading.textContent = counter;
}