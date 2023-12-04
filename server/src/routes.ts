import express from 'express';
import { getTodos,addTodo,delTodo, changeStatus } from "./controller";

//create Router
const router=express.Router()

//get all todos
router.get('/',getTodos)

//add todo
router.post('/',addTodo)

//delete todo
router.delete('/:id',delTodo)

//update complete status
router.put('/:id',changeStatus)

export default router;