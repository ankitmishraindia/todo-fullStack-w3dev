import { useState } from 'react';
import axios from 'axios';
import './AddTodo.css'
function AddTodo({setList}){
      const [todoTask,setTodoTask]=useState('')
        async function addTodo(){
            try {
                 if(todoTask.length>2&&todoTask.length<16){
                 const response=await axios.post('http://localhost:5000/todo/',{task:todoTask,completed:false})
                 console.log(response.data)
                 setList(response.data)
                 }else{
                    window.alert('Please type proper todo name within 15 character!')
                 }
            } catch (error) {
                console.log(error);
                window.alert(error.message)
            }
           
         }
         
    return(
        <div className="addTodoContainer">
            <input 
            type="text"
            placeholder="Todo Name..." 
            onChange={e=>setTodoTask(e.target.value)}/>
            <button onClick={()=>addTodo()}>ADD</button>
        </div>
    )
}
export default AddTodo;