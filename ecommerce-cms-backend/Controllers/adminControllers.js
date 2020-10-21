import User from '../Models/User.js'
import Admin from '../Models/Admin.js'
import bcrypt from 'bcrypt'


const adminControllers = {
  
    signUpAdmin : async (req,res) => {
        const user = req.body
       bcrypt.hash(user.Password, 2, function (err, hashedPassword) {
           user.Password = hashedPassword
       })
       const userCreated = await User.create(user)
       const adminCreated = await Admin.create(user)
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


   

}

export default adminControllers