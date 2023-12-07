import { MdDelete } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import axios from 'axios';
import './TodoList.css'
function TodoList({list,setList}){

    //function to delete todo from database
    async function delTodo(id){
        try {
            const response=await axios.delete(`http://localhost:5000/todo/${id}`)
            console.log(response.data)
                const newlist=list.filter((todo)=>id!==todo._id)
        setList(newlist)
            
        
        
        } catch (error) {
            window.alert("Please try again, Error:",error.message)
        }
        
    }

    //function to set completion status
    async function statusChange(id){
        try {

            const response=await axios.put(`http://localhost:5000/todo/${id}`)
            console.log(response.data)
        const newlist=list.map((todo)=>{
            if(todo._id===id){
                todo.completed=true
            }
            return todo;
        })
        setList(newlist)
        } catch (error) {
            window.alert("Please try again, Error:",error.message)
        }
        
    }
    return(
        <div className="todoList-Container">
            
            <ol type='number'>
                {list.length>0&&list.map((todo)=>
                   <li key={todo._id}>
                    <span>
                      {todo.task}
                      <div onClick={()=>(!todo.completed)?statusChange(todo._id):null} title='Click to Complete'>{(todo.completed)?<FaCircleCheck/>:<p>Pending</p>}</div>
                      <button onClick={()=>delTodo(todo._id)}><MdDelete/></button>
                     </span>
                     </li>)}
            </ol>
        </div>
    )
}
export default TodoList;