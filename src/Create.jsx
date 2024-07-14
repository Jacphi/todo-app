import React, { useState } from 'react'
import axios from 'axios'

function Create() {

    const [task, setTask] = useState()

    const handleAdd = () => {
        console.log("TEST",task)

        axios.post("https://todo-app-api-gyr9.onrender.com/add", {task : task})
        .then(()=>{
            location.reload()
        })
        .catch((err)=>{
            console.log("err///", err)
        })
    }

  return (
    <div className='create_form'>
        <input type="text" name="" id="" placeholder='Enter your task' onChange={(e) => {setTask(e.target.value)}}/>
        <button type="submit" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create