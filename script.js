let counter = document.getElementById("number");
let save = document.getElementById("total");

let count = 0;


function increment() {
    count += 1;
    counter.innerHTML = count;
}

function savecount() {
    save.innerHTML += " " + count + " - ";
}
