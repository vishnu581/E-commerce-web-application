const mongoose = require('mongoose')

const UserSchema =new mongoose.Schema({
    userName : {
        type : String,
        required : true,
        unique : true
    },
     email : {
        type : String,
        required : true,
        unique : true
    },
     password : {
        type : String,
        required : true,
        unique : true
    },
    role: {
        type : String,
        default :'user'
    }
})

const user = mongoose.model('User',UserSchema)

module.export = user