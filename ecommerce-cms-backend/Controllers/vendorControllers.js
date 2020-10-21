import Vendor from '../Models/Vendor.js'
import bcrypt from 'bcrypt'

const vendorControllers = {
  
    addVendor : async (req,res) => {
        const user = req.body
       bcrypt.hash(user.Password, 2, function (err, hashedPassword) {
           user.Password = hashedPassword
       })
       const vendorCreated = await Vendor.create(user)
    },

    signInVendor : async (req,res) => {
        Vendor.find({Name : req.body.Name}, (err, vendor) => {
            if (err) {
                res.json({message : "Vendor not found"})
            }

            if(!vendor) {
                res.json({message : "Vendor not found"})

            }

            else {
                bcrypt.compare(req.body.Password, vendor.Password, (err, result) => {
                    if(err) {
                        res.json ({message : "password don't match"})
                    }
                    else if (result == true) {
                        res.json ({
                            message : "Login Successful",
                            Vendor : vendor
                        })
                    }

                    else {
                        res.json ({message : "password don't match"})
                    }
                })
            }

        })
    },

    
   

}

export default vendorControllers