import Vendor from '../Models/Vendor.js'
import bcrypt from 'bcrypt'
import Brand from '../Models/Brands.js'
import Category from '../Models/Categories.js'
import Product from '../Models/Products.js'

const vendorControllers = {
  
    addVendor : async (req,res) => {
        const user = req.body
       bcrypt.hash(user.Password, 2, function (err, hashedPassword) {
           user.Password = hashedPassword
       })
       const vendorCreated = await Vendor.create(user)
    },

  

     getVendorData : (req, res) => {
                    console.log(req.body)
                   Brand.find().then(function(brands, err){
                       Category.find().then(function(categories, err){
                           Product.find({Seller : req.body.vendorId}).then(function(products, err){
                               res.json({
                            
                                   brands : brands,
                                   categories, categories,
                                   products : products

                               })
                           })
                       })
                   })
               
            
        
     }

    
   

}

export default vendorControllers