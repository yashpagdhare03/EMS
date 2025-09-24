import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'

const CreateTask = () => {

    const [userData,setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({taskTitle, taskDescription, taskDate, category, active:false, completed:false, failed:false, newTask:true})
        const data = userData
        
        data.forEach(function(elem){
            if(elem.firstName === assignTo){
                elem.tasks.push(newTask)
                elem.taskCount.newTask += 1
            }
        })
        setUserData(data)
        console.log(data)

        setAssignTo('')
        setCategory('')
        setTaskDate('')
        setTaskDescription('')
        setTaskTitle('')

    }

  return (
        <div className='card-surface p-5 mt-5'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className='flex flex-wrap w-full items-start justify-between gap-6'
            >
                <div className='w-full md:w-1/2'>
                    <div className='mb-4'>
                        <h3 className='text-xs uppercase tracking-wide text-[#e9e9e9] mb-1'>Task Title</h3>
                        <input 
                        value={taskTitle}
                        onChange={(e)=>{
                            setTaskTitle(e.target.value)
                        }}
                        className='input w-4/5' type="text" placeholder='Make a UI design' 
                        />
                    </div>
                    <div className='mb-4'>
                        <h3 className='text-xs uppercase tracking-wide text-[#e9e9e9] mb-1'>Date</h3>
                        <input
                        value={taskDate}
                        onChange={(e)=>{
                            setTaskDate(e.target.value)
                        }} 
                        className='input w-4/5 [color-scheme:dark] [::-webkit-calendar-picker-indicator]:invert [::-webkit-calendar-picker-indicator]:opacity-100' type="date" />
                    </div>
                    <div className='mb-4'>
                        <h3 className='text-xs uppercase tracking-wide text-[#e9e9e9] mb-1'>Assign to</h3>
                        <input 
                        value={assignTo}
                        onChange={(e)=>{
                            setAssignTo(e.target.value)
                        }}
                        className='input w-4/5' type="text" placeholder='Employee name' />
                    </div>
                    <div className='mb-4'>
                        <h3 className='text-xs uppercase tracking-wide text-[#e9e9e9] mb-1'>Category</h3>
                        <input 
                        value={category}
                        onChange={(e)=>{
                            setCategory(e.target.value)
                        }}
                        className='input w-4/5' type="text" placeholder='design, dev, etc' />
                    </div>
                </div>

                <div className='w-full md:w-2/5 flex-col items-start'>
                    <h3 className='text-xs uppercase tracking-wide text-[#e9e9e9] mb-1'>Description</h3>
                    <textarea 
                    value={taskDescription}
                        onChange={(e)=>{
                            setTaskDescription(e.target.value)
                        }}
                    className='input w-full h-40 resize-none' name="" id=""></textarea>
                    <button className='btn btn-primary w-full mt-4'>Create Task</button>
                </div>


            </form>
        </div>
    )
}

export default CreateTask