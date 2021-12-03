const mongoose = require('mongoose');

const taskScema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "muste enter name"],
        trim: true,
        minLength: [3, 'name can not be less than 3 character'],
        maxLength: [15, "max name can not be more 15 character"]
    },
    password: {
        type: String,
        trim: true,
        required: [true, "muste enter passwords"],
        minLength: [5, 'password can not be less than 5 character'],
        maxLength: [15, "max password can not be more 15 character"]
    },
    commplite: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', taskScema);