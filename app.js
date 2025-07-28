const express = require("express")
const app = express()

const route = require('./route/route.js')


const {create_data_base} = require('./Config/database.js')
create_data_base()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


app.use('/todo',route)

app.listen(3001,()=>{
    console.log("server runing")
})