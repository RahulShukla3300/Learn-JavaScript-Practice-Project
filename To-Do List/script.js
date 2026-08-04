
const input = document.getElementById('InputTask');
const addbutton = document.getElementById('add-btn');
const list = document.getElementById('tasklist');


 addbutton.addEventListener('click', function () {
    const task = input.value;

    if(task === "") {
      alert ("Please Enter a task");
      return;

    }
     const li = document.createElement('li');
    li.textContent = task;

    const button = document.createElement('button');
    button.textContent = "Delete";
    button.style.marginLeft = "20px";
    button.style.backgroundColor = "red";

    button.addEventListener('click' , () => {
      li.remove();
    })

    
    li.appendChild(button);
    list.appendChild(li);

    input.value = "" ;
    input.focus();

    //console.log(li);

    

 })

     input.addEventListener("keydown", (event) => {
      if(event.key == "Enter") {
       console.log("enter key pressed");
     }

    });