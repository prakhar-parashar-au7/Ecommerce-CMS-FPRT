import mongoose from 'mongoose'

const schema = mongoose.Schema

const productSchema = new schema ({

    Name : {
        type : String,
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
    Seller : {
        type : schema.Types.ObjectId,
        ref : 'Vendor'
    },
    AddedByAdmin : {
        type : Boolean,
        default : false
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