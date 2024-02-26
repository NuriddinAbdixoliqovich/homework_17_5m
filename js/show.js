let showBtn =  document.getElementById("showBtn");
let addTaskForm = document.getElementById("addTaskForm");
let addBtn = document.getElementById("addBtn");
let addTask = document.getElementById("addTask");



showBtn.addEventListener('click', (e) => {
    addTaskForm.classList = ("display: block; w-25")
})


function addTaskFunc() {
    let taskObject =  {
        task: addTask.value,
    }


    
    addTask.value = "";
  
}

addBtn.addEventListener('click', addTaskFunc);
