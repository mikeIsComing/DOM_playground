const heading = document.getElementsByTagName('h1')[0];
heading.id = 'main-heading';
document.body.style.textAlign = 'center';
document.querySelector("ol").style.marginTop = "10rem";
document.querySelector("h1").style.marginTop = '5rem';

document.querySelector("ol").style.border = "solid black 0.125rem"
const borderedList = document.querySelector("ol");
borderedList.style.padding = "2rem";

document.getElementsByTagName('ol')[0].style.display = "none";

function switchOn (){
    
    document.getElementsByTagName('ol')[0].style.display = "block";
    heading.onclick = switchOff;
}

function switchOff (){
    document.getElementsByTagName('ol')[0].style.display = "none";
    heading.onclick = switchOn;
}

heading.style.cursor = 'pointer';
heading.onclick = switchOn;

document.getElementsByClassName

//just for now. Do not forget delete this later

//document.getElementsByTagName('ol')[0].style.display = "block";

heading.parentNode.style.backgroundColor = 'beige';
heading.parentNode.style.height = '20vh';
heading.parentNode.style.display = 'flex';
const header = heading.parentNode;
header.style.justifyContent = "center";

// ordered list
const box = document.getElementsByTagName('ol')[0];

/* 
Looping with baseic for loop

for (let i = 0; i < box.children.length; i++) {
    box.children[i].style.color = 'red';
  }  */ 



 /*
 
 Looping with Array.from

 Array.from(box.children).map(child => {
    child.style.color = 'blue';
  });  */
  
 /* for(const child of box.children){
    child.style.color = "darkblue";
  } */

  const childrenArray = Array.prototype.slice.call(box.children);
  childrenArray.reverse();
  box.innerHTML = "";
  childrenArray.forEach(function(child) {
    box.appendChild(child);
  });

  const switchBtn = document.createElement('button');
  switchBtn.id = "switch-btn";
  document.body.appendChild(switchBtn);