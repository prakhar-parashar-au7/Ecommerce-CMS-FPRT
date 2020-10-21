import mongoose from 'mongoose'

const schema = mongoose.Schema

const brandSchema = new schema ({

    Name : {
        type : String,
        unique : true,
        required : true
    },
     
    Pic :{
        type : String
    },

    Status : {
        type : Boolean
    }


})

const Brand = mongoose.model('Brand', brandSchema)

export  default Brand