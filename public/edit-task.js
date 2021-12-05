const taskIDp = document.querySelector('.task-edit-id')
const taskName = document.querySelector('.task-edit-name')
const taskComplite = document.querySelector('.task-edit-completed')
const taskform = document.querySelector('.single-task-form')
const editBtn = document.querySelector('.task-edit-btn')
const formAlert = document.querySelector('.form-alert')
const params = window.location.search
const id = new URLSearchParams(params).get('id')
let tempName = ''

const showTask = async() => {
    try {
        const { data } = await axios.get(`/tasks/${id}`)
        const { _id: taskID, completed, name } = data

        taskIDp.textContent = taskID
        taskName.value = name;
        if (completed) {
            taskComplite.checked = true
        }
    } catch (err) {
        console.log(err);
    }
}
showTask()

taskform.addEventListener('submit', async(e) => {
    e.preventDefault()
    const id = taskIDp.textContent
    const completed = taskComplite.checked;
    const name = taskName.value
    try {
        await axios.patch(`/tasks/${id}`, { completed, name })
        formAlert.style.display = 'block'
        formAlert.textContent = 'success, task updated'
        formAlert.classList.add('text-success')
    } catch (error) {
        formAlert.style.display = 'block'
        formAlert.textContent = 'fail, task not updated'

    }
    setTimeout(() => {
        formAlert.style.display = 'none'
    }, 2000)
})