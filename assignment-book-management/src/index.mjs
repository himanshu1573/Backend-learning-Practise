import express from 'express'
import mongoose from 'mongoose'


const app=express();

app.use(express.json());

mongoose.connect('mongodb+srv://himanshu:himsim1573@cluster0.pb42cku.mongodb.net/virtual_book_library').then(()=>console.log('connection built successfully')).catch((e)=>console.log(e));
app.use('/',router)
const port=8005
app.listen(port,()=>{
    console.log('server started succesfully at',port)
})
