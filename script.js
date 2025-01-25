// Time display
function updateTime() {
  const timeElement = document.getElementById('time');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to display time immediately

// Calculator functionality
let calcInput = "";

function addToCalc(value) {
  calcInput += value;
  document.getElementById('calcInput').value = calcInput;
}

function clearCalc() {
  calcInput = "";
  document.getElementById('calcInput').value = calcInput;
}

function calculateResult() {
  try {
    calcInput = eval(calcInput).toString();
    document.getElementById('calcInput').value = calcInput;
  } catch (error) {
    document.getElementById('calcInput').value = "Error";
  }
}

// To-Do list functionality
function addToDo() {
  const todoInput = document.getElementById('todoInput');
  const taskText = todoInput.value.trim();
  
  if (taskText !== "") {
    const todoList = document.getElementById('todoList');
    const li = document.createElement('li');
    li.textContent = taskText;
    li.onclick = () => li.classList.toggle('completed');
    todoList.appendChild(li);
  }
  
  todoInput.value = "";
}
