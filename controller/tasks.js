const Task = require('../moduls/task')
const getAllTasks = async(req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).send({ err: error.message })

    }
}
const createTask = async(req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).send({ err: error.message })
    }

}
const getTask = async(req, res) => {
    try {
        const task = await Task.find({ completed: "true" });
        if (!task) {
            res.status(404).send("task not exst")
        }
        res.status(200).send(task)
    } catch (error) {
        res.status(500).send({ err: error.message })


    }
}
const updateTask = async(req, res) => {
    try {
        const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body)

        if (!task) {
            res.status(404).send("task not exst")
        }
        res.status(200).send('item updated')

    } catch (error) {
        res.status(500).send({ err: error.message })
    }
}
const deleteTask = async(req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id })

        if (!task) {
            res.status(404).send("task not exst")
        }
        res.status(200).send('item removed')
    } catch (error) {
        res.status(500).send({ err: error.message })


    }
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}