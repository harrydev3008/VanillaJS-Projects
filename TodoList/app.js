const form = document.querySelector('form')
const todo = document.querySelector('input[type="text"]')
const filterBy = document.querySelector('#filter')
const todoContainer = document.querySelector('.todo-list')

const localTodoList = JSON.parse(localStorage.getItem('todo-list'))

if (localTodoList)
    localTodoList.forEach(todoItem => addTodoItem(todoItem))

var oldArr

form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodoItem()
})

function addTodoItem(todoFromLocal) {
    let val = todo.value

    if (todoFromLocal)
        val = todoFromLocal['content']

    if (val) {

        const todoItem = document.createElement('li')
        todoItem.classList.add('todo-item')

        todoItem.innerHTML = `
        <i class="far fa-circle"></i>
        <p>${val}</p>`

        if (todoFromLocal && todoFromLocal.isCompleted) {
            todoItem.classList.add('completed')
            changeIcon(todoItem)
        }

        todoItem.addEventListener('click', () => {
            todoItem.classList.toggle('completed')

            changeIcon(todoItem)

            saveToLocalStorage()
        })

        todoItem.addEventListener('contextmenu', function (e) {
            e.preventDefault()
            this.remove()

            saveToLocalStorage()
        })

        todoContainer.append(todoItem)

        todo.value = ''
        todo.focus()

        saveToLocalStorage()
    }
}

function saveToLocalStorage() {
    const todoList = document.querySelectorAll('li')
    oldArr = todoList

    const todoItems = []

    todoList.forEach(todoItem => {
        todoItems.push({
            'content': todoItem.lastElementChild.textContent,
            isCompleted: todoItem.classList.contains('completed')
        })
    })

    localStorage.setItem('todo-list', JSON.stringify(todoItems))
}

function changeIcon(todoItem) {
    if (todoItem.firstElementChild.classList.contains('fa-check-circle'))
        todoItem.firstElementChild.className = 'far fa-circle'
    else
        todoItem.firstElementChild.className = 'far fa-check-circle'
}

filterBy.addEventListener('change', () => {

    let filter = filterBy.value
    const temp = []

    switch (filter) {
        case 'completed': {
            oldArr.forEach(item => {
                if (item.classList.contains('completed'))
                    temp.push(item)
            })
            break
        }

        case 'incomplete': {
            oldArr.forEach(item => {
                if (!item.classList.contains('completed'))
                    temp.push(item)
            })
            break
        }

        default: {
            oldArr.forEach(item => {
                temp.push(item)
            })
            break
        }
    }

    todoContainer.innerHTML = ''
    temp.forEach(item => todoContainer.append(item))
})