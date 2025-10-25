const express=require('express')
const cors=require('cors')
const connectDB = require('./config/database')

const app=express()

app.use(cors())
app.use(express.json())

const employeeRouter=require('./routes/employeeRouter')

app.use('/',employeeRouter)

connectDB().then(()=>{
    console.log('db connected successfully')
    app.listen(4000,()=>{
        console.log(`app is listening on port 4000`)
    })
}).catch((err)=>{
    console.log('something went wrong '+err.message)
})