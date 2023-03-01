const bodyBack = document.body;

function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event) {
  let randomColor =
    "rgb(" + colorValue() + "," + colorValue() + "," + colorValue() + ")";
  event.target.style.backgroundColor = randomColor;
}



document.getElementById("box").style.height = "100vh";

const boxOne = document.getElementById('box');

boxOne.onwheel = colorChange;