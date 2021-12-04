const express = require('express')
const app = express()
const connectDB = require('./db/connect')
app.use(express.json())
    //middleware
app.use(express.static('./public/'))
app.get('/', (req, res) => {

    res.render("index", { name: "eid", id: 1 })
})

const tasks = require('./routes/tasks')
app.use("/tasks", tasks)

const start = async() => {
    try {
        await connectDB()

    } catch (error) {
        console.log(error.message)
    }
}
start()
app.listen(3000, () => {
    console.log('lessign on port 3000')
})