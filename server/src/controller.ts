import { Request,Response } from "express";
import todoModel from "./model";

//find all todos from database
export const getTodos=async(req:Request,res:Response):Promise<void>=>{
    try {
         const todos=await todoModel.find();
         res.status(200).json(todos)
    } catch (error) {
        res.status(500).json({error:'Internal Server Error'})
    }
   
}

//add todo to database
export const addTodo=async(req:Request,res:Response):Promise<void>=>{
    try {
         const {task,completed}=req.body; 
            const newTodo=new todoModel({task,completed})
         await newTodo.save()
         res.status(200).json(newTodo)
         
         
    } catch (error) {
        res.status(500).json({error:'Internal Server Error'})
       
    }
   
}

//delete todo controller
export const delTodo=async(req:Request,res:Response):Promise<void>=>{
    try {
        const {id}=req.params;
        const findTododel=await todoModel.findByIdAndDelete(id);
       
            res.status(200).json({
                message:'deleted sucessfully',
                findTododel
            })
        
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}

//updata todo with complete status change
export const changeStatus=async(req:Request,res:Response):Promise<void>=>{
    try {
        const {id}=req.params;
        const findTododel=await todoModel.findByIdAndUpdate(id,{completed:true});
        if(!findTododel){
          res.status(404).send("Id does not exist")
        }else{
            res.status(200).json({
                message:'deleted sucessfully',
                findTododel
            })
        }
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}