document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', () => {
        const todoText = input.value.trim();

        if (todoText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = todoText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(listItem);
            });

            listItem.appendChild(deleteButton);
            todoList.appendChild(listItem);
            input.value = '';
        }
    });

    input.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });
});
