const express=require('express')
const ToDo=require('../schema/schema')
const route=express.Router();


route.post('/todos',async(req,res)=>{
    try{
   const newToDo=await ToDo.create({
        data:req.body.data
    })
    console.log(req.body)
    await newToDo.save();
return res.status(200).json(newToDo)
    }catch(err){
        return res.status(500).json(err.message)
        
    }
})

route.get('/todos',async(req,res)=>{
    try{
   const gettodo=await ToDo.find({})
    // console.log(req.body)
return res.status(200).json(gettodo)
    }catch(err){
        return res.status(500).json(err.message)
        
    }
})

route.get('/todos/:id',async(req,res)=>{
    try{
   const todoRef= await ToDo.findById(req.params.id);
   const todo=await ToDo.findOneAndUpdate(
    {_id:req.params.id},
    {done:!todoRef.done}
   )
   await todo.save();
   return res.status(200).json(todo)
    }catch(err){
        return res.status(500).json(err.message)
        
    }
})

route.put('/todos/:id',async(req,res)=>{
    try{
  
        await ToDo.findOneAndUpdate(
            {_id:req.params.id},
            {data:req.body.data}   
        )
        const todo=await ToDo.findById(req.params.id);
        return res.status(200).json(todo)
        // await todo.save();
    }catch(err){
        return res.status(500).json(err.message)
        
    }
})

route.delete('/todos/:id',async(req,res)=>{
    try{
  
 const todo=await ToDo.findByIdAndDelete(req.params.id)
       
        return res.status(200).json(todo) 
    }catch(err){
        return res.status(500).json(err.message)
        
    }
})

module.exports=route;