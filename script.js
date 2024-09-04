window.onload = () => {

    const list_ul = document.getElementsByClassName('list_ul')[0];
    const submitTodo = document.getElementsByClassName('submit-todo')[0];


    function checkTask(id) {
        let storageData = JSON.parse(localStorage.getItem(id));
        const isChecked = storageData['checked'];
        storageData['checked'] = !isChecked;
        localStorage.setItem(id, JSON.stringify(storageData));
    }

    function deleteTask(id) {
        const targetTask = document.getElementById(id);
        list_ul.removeChild(targetTask);
        localStorage.removeItem(id);
    }

    function createListElement(id, todo, isChecked=false){
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

        task.setAttribute('id', id);
        deleteBtn.setAttribute('type', 'button');
        checkbox.setAttribute('name', `${todo}`);
        checkbox.setAttribute('type', 'checkbox');
        label.setAttribute('for', `${todo}`);
        checkbox.checked = isChecked;

        deleteBtn.innerHTML = '삭제';
        label.innerHTML = todo;

        deleteBtn.addEventListener('click', () => { deleteTask(id) });
        checkbox.addEventListener('click', ()=>{checkTask(id)});

        task.appendChild(task_inner);
        task_inner.appendChild(taskCheck);
        taskCheck.appendChild(checkbox);
        taskCheck.appendChild(label);
        task_inner.appendChild(deleteBtn);


        list_ul.appendChild(task);
    }

    function addList(e) {
        const whatTodo = e.target.whatTodo.value;
        const creationTime = new Date().getTime();
        const storageObj = {con : whatTodo, checked: false}

        createListElement(creationTime, whatTodo);
        localStorage.setItem(creationTime, JSON.stringify(storageObj));
    }

    function genList(){
        const storedTodos = {...localStorage}
        const todosKeys = Object.keys(storedTodos).sort((a,b)=>a-b);
        todosKeys.forEach((cur)=>{
            const valueObj = JSON.parse(localStorage.getItem(cur));
            createListElement(cur, valueObj['con'], valueObj['checked']);
        })
    }

    submitTodo.addEventListener('submit', (e) => { e.preventDefault(); addList(e); e.target.whatTodo.value = '' });
    genList();
}