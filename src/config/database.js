const mongoose=require('mongoose')
require('dotenv').config()

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.mongo_url)
    } catch (err) {
        console.log(err)
        throw new Error('something went wrong with Db connection')
    }
}

module.exports=connectDB