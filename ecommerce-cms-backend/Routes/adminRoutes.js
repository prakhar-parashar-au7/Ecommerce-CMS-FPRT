import express from 'express'
import adminControllers from '../Controllers/adminControllers.js'
const Router = express()

const { signUpAdmin, signInAdmin } = adminControllers

Router.post('/signUpAdmin', signUpAdmin)
Router.post('/signIAdmin', signInAdmin)


export default Router