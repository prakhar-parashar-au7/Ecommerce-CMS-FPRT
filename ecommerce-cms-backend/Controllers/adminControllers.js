import User from '../Models/User.js'
import Admin from '../Models/Admin.js'
import bcrypt from 'bcrypt'
import Brand from '../Models/Brands.js'
import Category from '../Models/Categories.js'
import Product from '../Models/Products.js'
import Vendor from '../Models/Vendor.js'
const adminControllers = {
  
    signUpAdmin : async (req,res) => {
        const user = req.body
       bcrypt.hash(user.Password, 2, function (err, hashedPassword) {
           user.Password = hashedPassword
            User.create(user).then(function(user,err) {
                if(err) {
                    res.json ({
                        status : 404,
                        message: "can't create"
                    })
                }
                res.json({
                    status : 202,
                    message : "User created"
                })
            })

            Admin.create(user).then(function(user,err) {
                if(err) {
                    res.json ({
                        status : 404,
                        message: "can't create"
                    })
                }
                res.json({
                    status : 202,
                    message : "User created"
                })
            })

       })
      
    },

    signInAdmin : async (req,res) => {
        Admin.find({Name : req.body.Name}, (err, admin) => {
            if (err) {
                res.json({message : "Admin not found"})
            }

            if(!admin) {
                res.json({message : "Admin not found"})

            }

            else {
                bcrypt.compare(req.body.Password, admin.Password, (err, result) => {
                    if(err) {
                        res.json ({message : "password don't match"})
                    }
                    else if (result == true) {
                        res.json ({
                            message : "Login Successful",
                            Admin : admin
                        })
                    }

                    else {
                        res.json ({message : "password don't match"})
                    }
                })
            }

        })
    },

    addBrand : (req, res) => {
        console.log(req.body)
           Brand.create(req.body).then(function(brand, err) {
            if(err) {
                res.json ({
                    status : 404,
                    message: "can't create"
                })
            }
            res.json({
                status : 202,
                message : "Brand created"
            })
        })

    },

    addCategory : (req, res) => {
        console.log(req.body)
        Category.create(req.body).then(function(category, err) {
         if(err) {
             res.json ({
                 status : 404,
                 message: "can't create"
             })
         }
         res.json({
             status : 202,
             message : " created"
         })
     })

 },
   

 addProduct : (req, res) => {
    console.log(req.body)
    Product.create(req.body).then(function(product, err) {
     if(err) {
         res.json ({
             status : 404,
             message: "can't create"
         })
     }
     res.json({
         status : 202,
         message : " created"
     })
 })

},

getEverything : (req, res) => {
    User.find().then(function(users, err) {
       Vendor.find().then(function(vendors, err){
           Brand.find().then(function(brands, err){
               Category.find().then(function(categories, err){
                   Product.find().then(function(products, err){
                       res.json({
                           users : users,
                           vendors : vendors,
                           brands : brands,
                           categories, categories,
                           products : products
                       })
                   })
               })
           })
       })
    })
}
  


   

}

export default adminControllers