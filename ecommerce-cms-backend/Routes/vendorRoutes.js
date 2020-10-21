import express from 'express'
import vendorControllers from '../Controllers/vendorControllers.js'
const Router = express()

const { addVendor, signInVendor } = vendorControllers

Router.post('/addVendor', addVendor)

Router.post('./signInVendor', signInVendor)

export default Router