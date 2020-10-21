import express from 'express'
import cors from 'cors'
import adminRouter from './adminRoutes.js'
import userRouter from './userRoutes.js'
import vendorRouter from './vendorRoutes.js'


const Router = express()

Router.use(cors())
Router.options('*', cors())

Router.use(adminRouter)
Router.use(userRouter)
Router.use(vendorRouter)


export default Router