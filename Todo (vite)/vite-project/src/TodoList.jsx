import React, { useState } from 'react'
function TodoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
    
        setTasks([...tasks,newTask])
        setNewTask("")
    }

    function deleteTask(index){
        tasks.splice(index,1)
        setTasks([...tasks])
    }
   

    return(
    <div>

        <h1>To-Do-List</h1>

        <div>
            <input
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}/>
            <button
                
                onClick={addTask}>
                Add
            </button>
        </div>
        <ol>
            {tasks.map((task, index) => 
                <li key={index}>
                    <span >{task}</span>
                    <button
                        
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button onClick={()=>edit(index)}>edit</button>
                </li>
            )}

        </ol>
        <h1>{newTask}</h1>
        
    </div>);
}
export default TodoList