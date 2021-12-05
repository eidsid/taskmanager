const mongoose = require('mongoose');

const taskScema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "muste enter name"],
        trim: true,
        minLength: [3, 'name can not be less than 3 character'],
        maxLength: [50, "max name can not be more 20 character"]
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', taskScema);