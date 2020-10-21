import User from '../Models/User.js'
import bcrypt from 'bcrypt'
import Vendor from '../Models/Vendor.js'
import Admin from '../Models/Admin.js'

const userControllers = {
  
    signUpUser : async (req,res) => {
        const user = req.body
       bcrypt.hash(user.Password, 2, function (err, hashedPassword) {
           user.Password = hashedPassword
       })
       const userCreated = await User.create(user)
    },

    signInUser : async (req,res) => {
        if(req.body.Type == "Admin") {

            Admin.find({Name : req.body.Name}, (err, user) => {
                if (err) {
                    res.json({message : "User not found"})
                }
    
                if(!user) {
                    res.json({message : "User not found"})
    
                }
    
                else {
                    bcrypt.compare(req.body.Password, user.Password, (err, result) => {
                        if(err) {
                            res.json ({
                                status : 404,
                                message : "password don't match"})
                        }
                        else if (result == true) {
                            res.json ({
                                status : 202,
                                message : "Login Successful",
                                User : user
                            })
                        }
    
                        else {
                            res.json ({message : "password don't match"})
                        }
                    })
                }
    
            })

        }

        if(req.body.Type == "Vendor"){

            Vendor.find({Name : req.body.Name}, (err, user) => {
                if (err) {
                    res.json({message : "User not found"})
                }
    
                if(!user) {
                    res.json({message : "User not found"})
    
                }
    
                else {
                    bcrypt.compare(req.body.Password, user.Password, (err, result) => {
                        if(err) {
                            res.json ({message : "password don't match"})
                        }
                        else if (result == true) {
                            res.json ({
                                status : 202,
                                message : "Login Successful",
                                User : user
                            })
                        }
    
                        else {
                            res.json ({message : "password don't match"})
                        }
                    })
                }
    
            })

        }
        
        if(req.body.Type == "User") {
            console.log(req.body)
            User.find({Name : req.body.Name}, (err, user) => {
                if (err) {
                    res.json({message : "User not found"})
                }
    
                if(!user) {
                    res.json({message : "User not found"})
    
                }
    
                else {
                    bcrypt.compare(req.body.Password, user.Password, (err, result) => {
                        if(err) {
                            res.json ({message : "password don't match"})
                        }
                        else if (result == true) {
                            console.log("ho")
                            res.json ({
                                status : 202,
                                message : "Login Successful",
                                User : user
                            })
                        }
    
                        else {
                            res.json ({message : "password don't match"})
                        }
                    })
                }
    
            })

        }
        
    },

    
   

}

export default userControllers