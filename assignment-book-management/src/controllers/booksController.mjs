import bookModel from "../models/bookModel.mjs";

const findBooks=async (req,res)=>{
    const books=await bookModel.find();
    res.send({status:200,message:books})
}
const createBooks=async (req,res)=>{
    const data=req.body;
    const createdBooks=await bookModel.create(data);
}

export {findBooks}