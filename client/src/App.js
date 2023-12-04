
import { useEffect, useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import axios from 'axios';


function App() {
       const [todoList,setTodoList]=useState([])
       const [dataStatus,setDataStatus]=useState(false)
       
       //function to get all todos from mongodb
       async function getTodoList(){
        try {
            const response=await axios.get("http://localhost:5000/todo/");
            setTodoList(response.data)
            setDataStatus(true)
        } catch (error) {
          console.log(error)
          window.alert('Error:'+error.message+'. Please try again.')
        }
        
       }

       useEffect(()=>{
        getTodoList()
       },[])
  return (
      <div className='container'>
        <h1>TODO WEB APP</h1>
        <div>
          <AddTodo setList={(data)=>setTodoList([
            ...todoList,
            data
          ])}/>
          {(!dataStatus)?<p>Loading...</p>:(todoList.length==0)?<p>Please add todo...</p>:<TodoList list={todoList} setList={setTodoList}/>}
        </div>
        
      </div>
  );
}

export default App;
