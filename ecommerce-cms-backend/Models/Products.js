import mongoose from 'mongoose'

const schema = mongoose.Schema

const productSchema = new schema ({

    Name : {
        type : String,
        unique : true,
        required : true
    },
     
    photoId :{
        type : String
    },
    
    Price : {
        type : Number
    },

    Currency : {
        type : String
    },
     
    Quantity : {
        type : Number
    },
    User : {
        type : schema.Types.ObjectId,
        ref : 'User'
    },

    Brand : {
        type : String
    },
    
    Category : {
        type : String
    },

    Status : {
        type : Boolean
    },

})

const Product = mongoose.model('Product', productSchema)

export  default Product