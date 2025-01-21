let game = document.getElementById("game");
let time = document.getElementById("time");
let start=document.getElementById('start');

let ans = 0;
let val = null;
let traget = null;

let addButton = () => {
  for (let i = 0; i < 10; i++) {
    val = Math.floor(Math.random() * 11);
    game.innerHTML += `<button class='btn' value=${val}>${val}</button>`;
  }
};

function setTraget(traget) {
  document.getElementById("traget").innerHTML = traget;
  return traget;
}

let changeAns = () => {
  document.getElementById("ans").innerHTML = `Your total : ${ans}`;
};

let update = () => {
  let btn = document.querySelectorAll(".btn");

  ind = Math.floor(Math.random() * 10);
  traget = setTraget(btn[ind].value);
  btn.forEach((b) => {
    b.addEventListener("click", () => {
      // console.log(b.value); //to print click value
      // console.log(traget)
      console.log(b.value, traget);
      if (b.value == traget) {
        ans += 1;
        changeAns();
      }
      game.innerHTML = "";
      addButton();
      update();
      // console.log(btn); // to check btn is update or not
    });
  });
};

let timeStart = () => {
  let sec = 5;
  let timeSet = setInterval(() => {
    if (sec >= 0) {
      time.innerText = sec;
      sec--;
    } else {
      clearInterval(timeSet);
      game.innerHTML='';
      start.classList.toggle('off');
    }
  }, 1000);

};

function gameOn(){
  ans=0;
  setTraget();
  addButton();
  update();
  changeAns();
  timeStart();
  start.classList.toggle('off');
}














// function a(){
//   for (let i=1;i<=5;i++){
//     setTimeout(function(){
//       console.log(i);
//     },i*1000)
//   }
// }
// function c(){
//   console.log('hello')
// }
// a()
// var a=c;
// a();
// let b=10;

// function outter(){
//   var count=0;
//   this.increment=function(){
//     ++count;
//     console.log(count)
//   }
//   this.decrement=function(){
//     count--;
//     console.log(count)
//   }
// }
// let check=new outter();
// check.increment();
// check.increment();
// check.decrement();

// function outter(){
//   var a=0,b=1;
//   this.he=function inner(){
//     console.log(a)
//   }
//   b=a+b+1;
//   a=a+b;
// }


// let ok=new outter();
// ok.he()