import express from 'express'
import userControllers from '../Controllers/userControllers.js'
const Router = express()

const { signUpUser, signInUser } = userControllers

Router.post('/signUpUser', signUpUser)

Router.post('/signInUser', signInUser)

export default Router