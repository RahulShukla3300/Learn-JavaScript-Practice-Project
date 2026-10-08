let CountEl = document.getElementById("count-el");
let Para = document.getElementById("para");

let Count = 0;

function Increment() {
  Count = Count + 1;
  CountEl.textContent = Count;
  console.log(Count);
}

Increment();

function Save() {
  let save = Count + " - ";
  Para.textContent += save;
  CountEl.textContent = 0;
  Count = 0;
}

saveEl();
