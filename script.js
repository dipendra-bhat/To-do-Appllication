document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('task-input');
    const list = document.getElementById('todo-list');

    let tasks = [];

    function renderTasks() {
        list.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');

            const span = document.createElement('span');
            span.className = 'task-text';
            span.textContent = task;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-btn';
            removeBtn.onclick = () => {
                tasks.splice(index, 1);
                renderTasks();
            };

            li.appendChild(span);
            li.appendChild(removeBtn);
            list.appendChild(li);
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value.trim();
        if (task) {
            tasks.push(task);
            input.value = '';
            renderTasks();
        }
    });

    renderTasks(); // Initial render
});
