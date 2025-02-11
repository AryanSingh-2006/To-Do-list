const taskList = document.querySelector("#tasklist");
const addButton = document.querySelector("#add");
const inputBox = document.querySelector("#textbox");

addButton.onclick=()=>{
    const task=inputBox.value;
    console.log(task);
    if(task.trim() !==""){
        const li=document.createElement("li");
        li.classList.add("task");

        const circleDiv=document.createElement("div");
        circleDiv.classList.add("circle");
         
        const trashImg=document.createElement("img");
        trashImg.src="trashCan.jpg";
        trashImg.alt="trashCan";
        trashImg.classList.add("trashCan")

        taskList.append(li);

        li.append(circleDiv,task,trashImg);
        
        trashImg.onclick=()=>{
            li.remove();
        }

        circleDiv.addEventListener("click", ()=>{
            if(li.style.textDecoration == "line-through"){
                li.style.textDecoration="none";
                li.style.opacity="1";
            }
            else{
                li.style.textDecoration = "line-through";
                li.style.opacity="0.5";
            }
            
            trashImg.style.opacity="1";
        })
        inputBox.value="";
    }
    else{
        alert("Please enter a task");
    }
}


addButton.addEventListener("mouseover", ()=>{
    addButton.style.opacity="0.7";
})
addButton.addEventListener("mouseout",()=>{
    addButton.style.opacity="1";
})