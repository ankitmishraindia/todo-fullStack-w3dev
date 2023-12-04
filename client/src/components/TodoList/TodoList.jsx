
import axios from 'axios';
import './TodoList.css'
function TodoList({list,setList}){

    //function to delete todo from database
    async function delTodo(id){
        try {
            const response=await axios.delete(`http://localhost:5000/todo/${id}`)
        const newlist=list.filter((todo)=>id!==todo._id)
        setList(newlist)
        console.log(list)
        } catch (error) {
            window.alert(error.message)
        }
        
    }

    //function to set completion status
    async function statusChange(id){
        try {

            const response=await axios.put(`http://localhost:5000/todo/${id}`)
        const newlist=list.map((todo)=>{
            if(todo._id==id){
                todo.completed=true
            }
            return todo;
        })
        setList(newlist)
        } catch (error) {
            window.alert(error.message)
        }
        
    }
    return(
        <div className="todoList-Container">
            
            <ol type='number'>
                {list.length>0&&list.map((todo)=>
                   <li key={todo._id}>
                    <span>
                      {todo.task}
                      <p onClick={()=>(!todo.completed)?statusChange(todo._id):null} title='Click to Complete'>{(todo.completed)?'Completed':<p>Pending</p>}</p>
                      <button onClick={()=>delTodo(todo._id)}>Delete</button>
                     </span>
                     </li>)}
            </ol>
        </div>
    )
}
export default TodoList;