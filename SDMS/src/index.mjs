import express from 'express'
import mongoose from 'mongoose';
import router from './routes/routes.mjs';
 const app=express();
 app.use(express.json());

 mongoose.connect('mongodb+srv://himanshu:himsim1573@cluster0.pb42cku.mongodb.net/SDMS').then(()=>console.log('database connected successfully')).catch((e)=>console.log(e));

 app.use('/',router);
 const port=3000;
 app.listen(port,()=>{
    console.log('server started on port:',port);
 })