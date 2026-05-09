const wrapper = document.querySelector('.task-wrapper');

let swapy = null;

function initSwapy() {

  if (swapy) {
    swapy.destroy();
  }

  swapy = Swapy.createSwapy(wrapper, {
    animation: 'dynamic'
  });
}

initSwapy();

let count = 1;

const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

savedTasks.forEach(task => {
  createTask(task.text, task.date, task.column);
});

function saveTasks() {

  const tasks = [];

  document.querySelectorAll('.task-column').forEach((column, index) => {

    column.querySelectorAll('.task-card').forEach(card => {

      tasks.push({
        text: card.querySelector('.task-text').innerText,
        date: card.querySelector('.task-date').innerText,
        column: index + 1
      });
    });
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createTask(text, date, column = 1) {

  const slot = document.createElement('div');

  slot.className = 'task-slot';

  slot.setAttribute('data-swapy-slot', 'slot' + count);

  slot.innerHTML = `

    <div class="task-card"
         data-swapy-item="task${count}">

      <div class="task-top">

        <div>
          <input type="checkbox">
          <span class="task-text">${text}</span>
        </div>

        <div class="task-actions">

          <button onclick="editTask(this)">
            ✏️
          </button>

          <button onclick="deleteTask(this)">
            ❌
          </button>

        </div>

      </div>

      <div class="task-date">
        📅 ${date}
      </div>

    </div>

  `;

  document
    .getElementById('column' + column)
    .appendChild(slot);

  count++;

  initSwapy();

  saveTasks();
}

function addTask() {

  const input =
    document.getElementById('taskInput');

  const date =
    document.getElementById('taskDate');

  const category =
    document.getElementById('taskCategory');

  if (input.value.trim() === '') return;

  createTask(
    input.value,
    date.value || 'No date',
    category.value
  );

  input.value = '';

  date.value = '';
}

function deleteTask(btn) {

  btn.closest('.task-slot').remove();

  initSwapy();

  saveTasks();
}

function editTask(btn) {

  const textElement = btn
    .closest('.task-card')
    .querySelector('.task-text');

  const updated = prompt(
    'Edit your task:',
    textElement.innerText
  );

  if (updated !== null && updated.trim() !== '') {

    textElement.innerText = updated;

    saveTasks();
  }
}

const taskInput = document.getElementById('taskInput');

taskInput.addEventListener('keydown', e => {

  if (e.key === 'Enter') {
    addTask();
  }
});

const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', () => {

  document.body.classList.toggle('light');

  if (document.body.classList.contains('light')) {

    themeBtn.innerText = '🌙 Dark Mode';

  } else {

    themeBtn.innerText = '☀️ Light Mode';
  }
});

window.addEventListener('beforeunload', saveTasks);