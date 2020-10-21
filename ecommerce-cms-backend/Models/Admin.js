import mongoose from 'mongoose'

const schema = mongoose.Schema

const adminSchema = new schema ({

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
     
    Pic :{
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

const Admin = mongoose.model('Admin', adminSchema)

export  default Admin