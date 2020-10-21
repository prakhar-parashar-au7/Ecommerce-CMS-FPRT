import User from '../Models/User.js'
import bcrypt from 'bcrypt'
import Vendor from '../Models/Vendor.js'
import Admin from '../Models/Admin.js'

const userControllers = {
  
    signUpUser : async (req,res) => {
        const user = req.body
        const saltRounds = 2
       bcrypt.hash(user.Password, saltRounds, function (err, hashedPassword) {
           
           user.Password = hashedPassword
           if(req.body.type == "User"){
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

           }
           if(req.body.type == "Vendor"){
            Vendor.create(user).then(function(user,err) {
                if(err) {
                    res.json ({
                        status : 404,
                        message: "can't create"
                    })
                }
                res.json({
                    status : 202,
                    message : "created"
                })
            })

           }
           if(req.body.type == "Admin"){
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

           }
           
           
           
       })
       
    },

    signInUser : async (req,res) => {
        if(req.body.type == "Admin") {

            Admin.find({Name : req.body.Name}, (user, err) => {
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

        if(req.body.type == "Vendor"){
           console.log("hi")
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
        
        if(req.body.type == "User") {
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