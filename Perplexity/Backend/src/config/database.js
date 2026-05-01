import mongoose from 'mongoose'

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Db connected sucessfully...")
    })
    .catch((err)=>{
        console.log("Error : " ,err)
    })
}

export default connectToDb