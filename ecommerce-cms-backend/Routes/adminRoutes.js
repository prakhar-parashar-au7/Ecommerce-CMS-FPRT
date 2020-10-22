import express from 'express'
import adminControllers from '../Controllers/adminControllers.js'
const Router = express()

const { signUpAdmin, signInAdmin, addBrand, addCategory, addProduct, getEverything } = adminControllers

Router.post('/signUpAdmin', signUpAdmin)
Router.post('/signIAdmin', signInAdmin)
Router.post('/addBrand', addBrand)
Router.post('/addCategory', addCategory)
Router.post('/addProduct', addProduct)
Router.get('/getEverything', getEverything)

export default Router