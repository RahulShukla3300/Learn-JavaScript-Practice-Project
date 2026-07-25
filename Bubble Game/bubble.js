function makeBubble() {
    var clutter = "";

for (var i = 0; i<=139; i++) {
    var rahul = Math.floor(Math.random()*10);
    clutter +=  `<div class="bubble"> ${rahul} </div>`
    
}

document.querySelector("#pbot").innerHTML = clutter;

}

var timer = 60;
let score = 0;
var hitrn = 0;


document.querySelector("#pbot")
.addEventListener('click',function (bubble) {
 clickednumber =   Number(bubble.target.textContent);

    if (clickednumber === hitrn) {
        increaseScore();
        makeBubble();
        newHit();

    }


})



function increaseScore () {
 score += 10;
 document.querySelector("#scoreval").textContent = score;
}

function runtimer() {
  var timerint =  setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbot").innerHTML = " <h1>Game Over</h1>";
        }
    }, 1000);
}

function newHit () {
   hitrn = Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent = hitrn
}



newHit();
makeBubble();
runtimer();