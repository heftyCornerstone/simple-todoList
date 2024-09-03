window.onload = () => {

    const list_ul = document.getElementsByClassName('list_ul')[0];
    const submitTodo = document.getElementsByClassName('submit-todo')[0];
    const inputWhatTodo = document.getElementsByClassName('inputWhatTodo')[0];

    function deleteTask(e) {
        const tatgetTask = e.target.parentNode.parentNode;
        list_ul.removeChild(tatgetTask);
    }

    function addList(e) {
        const whatTodo = e.target.whatTodo.value;

        const task = document.createElement('li');
        const task_inner = document.createElement('div');
        const taskCheck = document.createElement('div');
        const checkbox = document.createElement('input');
        const label = document.createElement('label');
        const deleteBtn = document.createElement('button');

        task.classList.add('task');
        task_inner.classList.add('task_inner');
        taskCheck.classList.add('taskCheck');
        checkbox.classList.add('checkbox');
        label.classList.add('label');
        deleteBtn.classList.add('deleteBtn');

        deleteBtn.setAttribute('type', 'button');
        checkbox.setAttribute('name', `${whatTodo}`);
        checkbox.setAttribute('type', 'checkbox')
        label.setAttribute('for', `${whatTodo}`);

        deleteBtn.innerHTML = '삭제';
        label.innerHTML = whatTodo;

        deleteBtn.addEventListener('click', (e) => { deleteTask(e) });

        task.appendChild(task_inner);
        task_inner.appendChild(taskCheck);
        taskCheck.appendChild(checkbox);
        taskCheck.appendChild(label);
        task_inner.appendChild(deleteBtn);


        list_ul.appendChild(task);
    }

    submitTodo.addEventListener('submit', (e) => { e.preventDefault(); addList(e); e.target.whatTodo.value = '' });
}


