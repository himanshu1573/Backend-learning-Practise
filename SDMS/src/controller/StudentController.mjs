import studentModel from "../models/studentModel.mjs";
const findStudent= async (req,res)=>{
    //const students= await studentModel.find();
    const students= await studentModel.findOne();
    res.status(200).send({status:true,message:students});
    //res.send('testing successfully')
}

const createStudent=async (req,res)=>{
    try{
        const data=req.body;
        const {rollNo,email}=req.body;
        const checkUser=await 
    }catch(error){

}
    
    const createdStudent=await studentModel.create(data);
   // const createdStudent=await studentModel.insertMany([data,data,data]);
    return res.status(201).send({status:true,message:createdStudent})
}
const deleteStudent= async (req,res)=>{
   // const data=await studentModel.deleteMany({name:'Nikhil Raghuwanshi'})
   try{
    const data=await studentModel.deleteOne({'email':'abcgmail.com'})
    
    return res.status(200).send({status:true,message:data})
   }catch(error){
    return res.status(500).send({status:'failed',message:error.message})
}
}
const updateStudent= async (req,res)=>{
    const newStudents= await studentModel.updateOne({'name':'himanshu'},{$set:{'name':'Nikhil raghuwanshi'}})
    return res.send({status:true,message:newStudents})
}

export {findStudent,createStudent,deleteStudent,updateStudent};