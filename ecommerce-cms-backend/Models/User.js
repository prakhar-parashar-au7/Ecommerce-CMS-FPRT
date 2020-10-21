import mongoose from 'mongoose'

const schema = mongoose.Schema

const userSchema = new schema ({

    Name : {
        type : String,
        unique : true,
        required : true
    },
    
    Email : {
        type : String,
        unique: true,
        required : true
    },
     
    photoId :{
        type : String
    },

    Bio : {
        type : String
    },
    
    Status : {
        type : Boolean
    },

    Type : {
        type : String
    },

    LastLogin : {
        type : Date
    },

    Password : {
        type : String||Number,
        required : true
    }


})

const User = mongoose.model('User', userSchema)

export  default User