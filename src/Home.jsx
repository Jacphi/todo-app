import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import "./App.css"
import {BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill} from "react-icons/bs"

function Home() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get("https://todo-app-api-gyr9.onrender.com/get/")
        .then((result)=> {
            setTodos(result.data) 
        })
        .catch((err)=>{
            console.log(err);
        })
      
    }, [todos])

    const handleEdit = (id) => {
        axios.put(`https://todo-app-api-gyr9.onrender.com/update/${id}`)
        .then(()=> { 
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const handleDelete = (id) => {
        axios.delete(`https://todo-app-api-gyr9.onrender.com/delete/${id}`)
        .then(()=> {
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
  return (
    <div className='home'>
        <h2>
            Todo List
        </h2>
        <Create />
        <br/>
        
        {
            todos.length === 0 ? <div><h2>No Record</h2></div> :
            todos.map(todo =>
                (<div className='task' key={todo._id}>
                    <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                        {todo.done ? <BsFillCheckCircleFill className='icon' /> : <BsCircleFill className='icon'/>}
                    <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                    </div>
                    <div>
                        <span> <BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)}/> </span>
                    </div>
                </div>)
            )
        }
    </div>
  )
}

export default Home