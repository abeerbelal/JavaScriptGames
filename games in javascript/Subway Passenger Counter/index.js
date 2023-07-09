countEl = document.getElementById("count-el");
saveEl = document.getElementById("save-el");
let count = 0;
function increment(){
    count++;
    countEl.innerHTML = count;
}

function save(){
    countStr = count + " - ";
    saveEl.textContent  += countStr;
    countEl.textContent = 0;
    count = 0;
}