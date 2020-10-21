import express from 'express'
import bodyparser from 'body-parser'
import './Models/db_connect.js'
import router from './Routes/routes.js'

const app = express()
app.use(express.json())
app.use(bodyparser.urlencoded({extended : true}))

app.use(router)




app.listen(8080, ()=> {
    console.log("server on")
})