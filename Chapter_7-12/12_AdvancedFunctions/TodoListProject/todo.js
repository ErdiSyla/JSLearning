const todoList = [];

function showTodo(){
    let todoListHTML = '';

    todoList.forEach(function(todoObject, index){
        const { activity, dueDate }= todoObject;

        const html = `
        <div>${activity}</div>
        <div>${dueDate}</div>
        <button class="delButton" onclick="deleteTodo(${index}); showTodo();">Delete</button>
        `;
        todoListHTML += html;
    })

    document.querySelector('.todoList').innerHTML = todoListHTML;
}


function addTodo(){
    const activityInput = document.querySelector('.todoActivity');
    const dateInput = document.querySelector('.todoDate');

    let todo = {
        activity : activityInput.value,
        dueDate:  dateInput.value
    };

    todoList.push(todo);

    activityInput.value = '';
    showTodo();
}

function deleteTodo(index){
    todoList.splice(index, 1);
}

function pressedEnter(key) {
  if (key === "Enter") {
    addTodo();
  }
}
