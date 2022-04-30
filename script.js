const box1El = document.getElementById("box1")
const box2El = document.getElementById("box2")
const box3El = document.getElementById("box3")
const box4El = document.getElementById("box4")


function box1Function(){
    if (box1El.style.backgroundColor === "green") {
        box1El.style.backgroundColor = "black";
    } else {
        box1El.style.backgroundColor = "green";
    }
}

function box2Function(){
    if (box2El.style.backgroundColor === "green") {
        box2El.style.backgroundColor = "black";
    } else {
        box2El.style.backgroundColor = "green";
    }
}

function box3Function(){
    if (box3El.style.backgroundColor === "green") {
        box3El.style.backgroundColor = "black";
    } else {
        box3El.style.backgroundColor = "green";
    }
}

function box4Function(){
    if (box4El.style.backgroundColor === "green") {
        box4El.style.backgroundColor = "black";
    } else {
        box4El.style.backgroundColor = "green";
    }
}
box1El.addEventListener("click", box1Function);
box2El.addEventListener("click", box2Function);
box3El.addEventListener("click", box3Function);
box4El.addEventListener("click", box4Function);