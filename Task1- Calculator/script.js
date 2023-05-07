
let num1 = "";


function show(x) {
    let s = document.getElementById("screen");
    s.innerHTML += x;

    num1 += x;

}


function rem() {
    let a = document.getElementById("screen");
    a.innerHTML = "";
    num1 = "";
}

function compute() {
    let ans = eval(num1);
    let a = document.getElementById("screen");
    a.innerHTML = "";
    a.innerHTML = ans;
}