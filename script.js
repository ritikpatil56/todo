function addTask() {
    
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;


    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }


    const li = document.createElement('li');
    li.classList.add('task-item');
    li.textContent = taskText;

    //tick
    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✓'; 
    completeBtn.classList.add('complete-btn'); 
    completeBtn.onclick = function() {
        li.classList.toggle('completed');
    };
    li.appendChild(completeBtn);


    const todoList = document.getElementById('todoList');
    todoList.appendChild(li);

    //waps clear

    taskInput.value = '';
}
function clearTasks() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = ''; 
}