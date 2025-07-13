const todoList = [];

function showTodo(){
    let todoListHTML = '';

    for(let i = 0; i < todoList.length; i++){
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;
    }

    document.querySelector('.todoList').innerHTML = todoListHTML;
}


function addTodo(){
    const inputElem = document.querySelector('.todoInput');
    let todo = inputElem.value;

    todoList.push(todo);
    console.log(todoList);

    inputElem.value = '';
}