const conclusionButton =  ()=>{
    const conButton = document.createElement('button')
    conButton.classList.add('check-button')
    conButton.innerText = 'Concluir Tarefa'
    conButton.addEventListener('click', checkButton)

    return conButton
}

const  checkButton = (event)=>{
    const check = event.target
    const taskChecked = check.parentElement

    taskChecked.classList.toggle('done')
}

export default conclusionButton