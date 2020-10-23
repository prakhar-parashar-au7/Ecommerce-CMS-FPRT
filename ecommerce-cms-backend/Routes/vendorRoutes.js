import express from 'express'
import vendorControllers from '../Controllers/vendorControllers.js'
const Router = express()

const { addVendor, getVendorData} = vendorControllers

Router.post('/addVendor', addVendor)
Router.post('/getVendorData', getVendorData)

export default Router