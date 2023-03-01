const bodyBack = document.body;

function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event) {
  let randomColor =
    "rgb(" + colorValue() + "," + colorValue() + "," + colorValue() + ")";
  event.target.style.backgroundColor = randomColor;
}

document.getElementById("box").style.height = "10vh";

const boxOne = document.getElementById("box");

boxOne.onwheel = colorChange;

const moveNext = document.createElement("button");
moveNext.id = "next-btn";
moveNext.innerHTML = "next page";
document.body.appendChild(moveNext);

const changePage = () => {
  window.location.href = "/index.html";
};

moveNext.onclick = changePage;
