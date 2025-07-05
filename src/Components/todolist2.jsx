import { useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, onToggle, onDelete, onEdit }) => {
    const [input,setInput]=useState("")
    const [todo,setTodo]=useState([])
    const [editId, setEditId] = useState(null);


    function addTodoItem(){
        if (input=="")return;
    const item={
        id:todo.length+1,
        text:input,
        completed:false
    }

    setTodo(prev=>[...prev,item])
    setInput("")
    }

    function toggleCompleted(id){
    setTodo(todo.map((t)=>{
        if(t.id===id){
            return {
                ...t,
                completed:!t.completed
            }
        }
        else{
            return t;
        }
    }))
    }

    function deleteItem(id){
        setTodo(todo.filter((t)=>{
           return t.id!==id
        }))
    }

    function editItem(id) {
        const editTodo = todo.find((t) => t.id === id);
        setInput(editTodo.text);     
        setEditId(id); 
        setTodo((prev) => prev.filter((t) => t.id !== id));          
      }
      
 

return (
    <div className="text-center m-2">
    <input className=" border-2 w-[300px] rounded-sm p-2" type="text" placeholder="Enter ToDo" value={input} 
    onChange={(e)=>setInput(e.target.value)}/>
    <button className="bg-gray-100 border-2 p-2" onClick={addTodoItem} >Add</button>

    <ul>
        {todo.map((to)=>{
            return <li key={to.id}>
                <input type="checkbox" checked={to.completed} onChange={()=>toggleCompleted(to.id)}/>
                <span className={to.completed?"line-through text-2xl" :"text-2xl"}>
            {to.text} 
            </span>
                <button className="border-2 m-1 bg-red-500 cursor-pointer p-1" onClick={()=>deleteItem(to.id)}>Delete</button>
                <button className="border-2 m-1 bg-red-500 cursor-pointer p-1" onClick={()=>editItem(to.id)}>Edit</button>
            </li>
        })}
    </ul>
    </div>
)
};

export default ToDoList;