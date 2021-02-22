'use strict';


const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');

//массив для хранения данных  
    const todoData = [

    // сюда помещаем из локалсьорадж и функцию рендер что бы при загрузке было норм
    ];

//функция рендер + перебор и создание элемента
    const render = function(){
        todoList.textContent = '';
        todoCompleted.textContent = '';

        todoData.forEach(function(item){
            const li = document.createElement('li');
            li.classList.add('todo-item');

            // добавляем  ли верстку
            li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
                            '<div class="todo-buttons">' + 
                                '<button class="todo-remove"></button>' +
                                '<button class="todo-complete"></button>' +
                            '</div>';
                // условина если задача решена переносим в класс тудклмплит иначе в тудулист            
            if(item.completed){
                todoCompleted.append(li);
            }else{
                todoList.append(li);
            }

            // делаем что бы законченые дела перемещались в нужный класс
            const addTodoCompleted = li.querySelector('.todo-complete');

            addTodoCompleted.addEventListener('click', function(){
                item.completed = !item.completed;
                render();
            });
        });
    };
//эвент сабмит + пушим ннаше задание в массив
    todoControl.addEventListener('submit', function(event){
        event.preventDefault();

        const newTodo = {
            value: headerInput.value,
            completed: false
        };
        todoData.push(newTodo);

        render();
    });

    render();

