
// Random color generator with two functions for change color background with RGB
function colorValue() {
    return Math.floor(Math.random() * 256);
  }
  
  function colorChange(event){
  let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
  event.target.style.backgroundColor = randomColor; 
  
  }

  