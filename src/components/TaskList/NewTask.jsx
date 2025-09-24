import React from 'react'

const NewTask = ({data, onAccept}) => {


  const handleAccept = () => {
    onAccept(data)
  }

  return (
    <div className='card-surface shrink-0 h-full w-[350px] p-5'>
            <div className='flex justify-between items-center'>
                <span className='badge'>{data.category}</span>
                <span className='text-xs text-slate-400'>{data.taskDate}</span>
            </div>
            <h2 className='mt-4 text-xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2 text-slate-300'>{data.taskDescription}</p>
            <div className='mt-6'>
                <button onClick={handleAccept} className='btn btn-ghost'>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask