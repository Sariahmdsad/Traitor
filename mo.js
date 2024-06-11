let f1 =document.getElementById("f1")
let f2 =document.getElementById("f2")
let f3 =document.getElementById("f3")
let f4 =document.getElementById("f4")
function h() {
 let mz =Math.floor(Math.random() * 5) + 1; 
 let G =Math.floor(Math.random() * 20) + 1; 
 let B =Math.floor(Math.random() * 20) + 1; 
 let v = G+B
  f2.innerText =G;
  f3.innerText =B;
  f4.innerText =v;
  console.log(mz)
  
  if (mz == 1) {
    f1.innerText ="1";
  }
  else if (mz == 2) {
    f1.innerText ="2";
  
    
  }
  else if (mz == 3) {
    f1.innerText ="3";
  
    
  }
  else if (mz ==4) {
    f1.innerText ="4";
  }
  else {
    f1.innerText ="يا عزابي";
  }
  
}
