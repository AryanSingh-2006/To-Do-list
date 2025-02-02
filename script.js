const taskList = document.querySelector("#tasklist");
const addButton = document.querySelector("#add");
const inputBox = document.querySelector("#textbox");

addButton.onclick=()=>{
    const task=inputBox.value;
    console.log(task);
    if(task !==""){
        const li=document.createElement("li");
        li.classList.add("task");
        li.innerText=task;
    }
    else{
        console.log("Please enter a task");
    }
}