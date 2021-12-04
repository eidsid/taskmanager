const task_container = document.querySelector('.tasks')
const loading_text = document.querySelector('.loading-text')
const form_task = document.querySelector('.task-form')
const form_input = document.querySelector('.task-input')
const form_alert = document.querySelector('.form-alert')


// Load tasks from /tasks
const showTask = async() => {
    loading_text.style.visibility = 'visible'
    try {
        let data = await axios.get('/tasks')
        let tasks = data.data
        if (tasks.length < 1) {
            task_container.innerHTML = '<h5 class="empty-list">No tasks in your list</h5>'
            loading_text.style.visibility = 'hidden'
            return

        }
        const allTasks = tasks.map((task) => {
            const { completed, _id: taskID, name } = task
            console.log({ completed, _id: taskID, name });
            return `<div class="single-task ${completed && 'task-completed'}">
                 <h5><span><i class="far fa-check-circle"></i></span>${name}</h5>
                 <div class="task-links">
                 <!-- edit link -->
                 <a href="task.html?id=${taskID}"  class="edit-link">
                 <i class="fas fa-edit"></i>
                  </a>
                  <!-- delete btn -->
                  <button type="button" class="delete-btn" data-id="${taskID}">
                  <i class="fas fa-trash"></i>
                  </button>
                  </div>
                  </div>`
        }).join('')

        task_container.innerHTML = allTasks
    } catch (error) {
        task_container.innerHTML = '<h5 class="empty-list">There was an error, please try later....</h5>'
    }
    loading_text.style.visibility = 'hidden'
}
showTask()

// delete task
task_container.addEventListener('click', async(e) => {
    const el = e.target
    if (el.parentElement.classList.contains('delete-btn')) {
        const id = el.parentElement.dataset.id
        try {
            await axios.delete(`/tasks/${id}`)
            showTask()
        } catch (error) {
            loading_text.style.visibility = 'visible'
            loading_text.innerHTML = 'Fail please try agine'
            setTimeout(() => {
                loading_text.style.visibility = 'hidden'
            }, 500);
        }
    }
})


form_task.addEventListener('submit', async(e) => {
    e.preventDefault()
    const name = form_input.value
    try {
        await axios.post('/tasks/', { name })
        showTask()
        form_input.value = ''
        form_alert.style.display = 'block'
        form_alert.textContent = 'success, task added'
        form_alert.classList.add('text-success')
    } catch (error) {
        form_alert.style.display = 'block'
        form_alert.textContent = 'please, try agin'
    }
    setTimeout(() => {
        form_alert.style.display = 'none'
        form_alert.classList.remove('text-success')
    }, 3000)






})