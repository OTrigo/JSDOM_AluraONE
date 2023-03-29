import deleteButton from "./assets/js/deletarTarefa.js"
import conclusionButton from "./assets/js/checarTarefa.js"

const criarTarefa = (event)=>{
    event.preventDefault()
    const input = document.querySelector('[data-form-input]')
    const inputValue = input.value

    const taskArea = document.querySelector('[data-task-area]')
    const newTask = document.createElement('li')
    newTask.classList.add('task')

    const newTaskContent = document.createElement('p')
    newTaskContent.classList.add('content')
    newTaskContent.innerText = inputValue

    newTask.appendChild(newTaskContent)
    newTask.appendChild(conclusionButton())
    newTask.appendChild(deleteButton())
    taskArea.appendChild(newTask)
}

const formButton = document.querySelector('[data-form-button]')
formButton.addEventListener('click', criarTarefa)