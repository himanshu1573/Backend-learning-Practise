import mongoose from "mongoose";
const bookSchema=new mongoose.Schema({
title:String,
author:String,
genre:String,
ISBN:String,
availability:Boolean
},{timestamps:true})

export default mongoose.model('books_data',bookSchema);