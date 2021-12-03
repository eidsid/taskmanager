const mongoose = require('mongoose');

const connectionstring =
    'mongodb+srv://eid:123@learnnodeexpressdb.76ext.mongodb.net/03-TASK-MANGER?retryWrites=true&w=majority'

const connectDB = () => {
    return mongoose
        .connect(connectionstring, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        })

}
module.exports = connectDB