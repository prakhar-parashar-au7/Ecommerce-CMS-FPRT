import mongoose from 'mongoose'

const schema = mongoose.Schema

const categorySchema = new schema ({

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

const Category = mongoose.model('Category', categorySchema)

export  default Category