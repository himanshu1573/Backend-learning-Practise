import mongoose from "mongoose";
const studentSchema=new mongoose.Schema({
    name:String,
    rollNo:String,
    dob:String,
    batch:String,
    course:String,
    semester:Number,
    phone:String,
    email:String,
    password:String,

},{timestamps:true});

export default mongoose.model('StudentData',studentSchema)