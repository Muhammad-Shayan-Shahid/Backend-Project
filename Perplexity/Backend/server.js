import dotenv from "dotenv";
dotenv.config();

const { default: app } = await import('./src/app.js')
const { default: connectToDb } = await import('./src/config/database.js')
const {testAI } = await import('./src/services/ai.service.js')

testAI()

connectToDb()

app.listen(3000 , ()=>{
    console.log("Server connected succesfully...")
})