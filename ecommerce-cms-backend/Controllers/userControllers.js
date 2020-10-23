import User from '../Models/User.js'
import bcrypt from 'bcrypt'
import Vendor from '../Models/Vendor.js'
import Admin from '../Models/Admin.js'
import jwt from 'jsonwebtoken'


const userControllers = {
  
    signUpUser : async (req,res) => {
        const user = req.body
        const saltRounds = 2
       bcrypt.hash(user.Password, saltRounds, function (err, hashedPassword) {
           
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
                    message : "User created",
                    user : user
                })
            })

           })
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
                    
                    if(req.body.Password == user[0].Password) {
                      
                        const token = jwt.sign({ _id: user[0]._id, Name: user[0].Name, photoId: user[0].photoId, Type:user[0].Type}, 'secret', (err, token) => {
                      
                            res.json({
                                status : 202,
                                message : "Login Successful",
                                user : user[0],
                                token : token
                            })
                        })
                    }
                        else {
                            res.json ({message : "password don't match"})
                        }
                    
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
                    
                    bcrypt.compare(req.body.Password, user[0].Password, (err, result) => {
                        if(err) {
                            
                            res.json ({message : "password don't match"})
                        }
                        else if (result == true) {

                            const token = jwt.sign({ _id: user[0]._id, Name: user[0].Name, photoId: user[0].photoId, Type:user[0].Type}, 'secret', (err, token) => {
                      
                                res.json({
                                    status : 202,
                                    message : "Login Successful",
                                    user : user[0],
                                    token : token
                                })
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
            
            User.find({Name : req.body.Name}, (err, user) => {
                if (err) {
                    res.json({message : "User not found"})
                }
    
                if(!user) {
                    res.json({message : "User not found"})
    
                }
    
                else {
                    bcrypt.compare(req.body.Password, user[0].Password, (err, result) => {
                        
                        if(err) {
                            res.json ({message : "password don't match"})
                        }
                        else if (result == true) {
                            const token = jwt.sign({ _id: user[0]._id, Name: user[0].Name, photoId: user[0].photoId}, 'secret', (err, token) => {
                      
                                res.json({
                                    status : 202,
                                    message : "Login Successful",
                                    user : user[0],
                                    token : token
                                })
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