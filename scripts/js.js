'use strict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoComplete = document.querySelector('.todo-completed');
    //todoRemove = document.querySelector('.todo-remove');
//массив для хранения данных  
let todoData = [ ];
//функция рендер + перебор и создание элемента
const render = function(){
    todoList.textContent = '';
    todoComplete.textContent = '';

    // добавляем  ли верстку
    todoData.forEach(function(item, i){
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
                    '<div class="todo-buttons">' +
                    '<button class="todo-remove"></button>' + 
                    '<button class="todo-complete"></button>' + 
                    '</div>';
                    
        //меняем позицию  выполненных и не выполненных заданий
        if(item.completed){
            todoComplete.append(li);
        }else{
            todoList.append(li);
        }
        // отметка выполненных и не выполненных заданий
        const todoCompleted = li.querySelector('.todo-complete');
            todoCompleted.addEventListener('click', function(){
                item.completed = !item.completed;
                render();
            });
        //удаляем задание
        const removeTodo = li.querySelector('.todo-remove');
            removeTodo.addEventListener('click', function(event){
                    
               todoData.splice(i, 1);
                render();
            });
    });


    // в локалсторадж берем массив тудудата
    localStorage.setItem('todoData', JSON.stringify(todoData));
};

// удаляем дело

//эвент сабмит + пушим ннаше задание в массив
todoControl.addEventListener('submit', function(event){
    event.preventDefault();
// создаем новое задание 
    const newTodo = {
        value: headerInput.value,
        completed: false
    };
    // пушим задание в массив todoData
    todoData.push(newTodo);
    headerInput.value = '',
    render();
});
//условие 
if(localStorage.getItem('todoData')){
    todoData = JSON.parse(localStorage.getItem('todoData'));
};
render();