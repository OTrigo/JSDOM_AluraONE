const deleteButton = ()=>{
    const deleteButton = document.createElement('button')
    deleteButton.className = 'delete-button'
    deleteButton.innerHTML = 'Deletar'
    deleteButton.addEventListener('click', delButton)

    return deleteButton
}

const delButton = (event)=>{
    const del = event.target
    const taskDel = del.parentElement

    taskDel.remove()
}

export default deleteButton