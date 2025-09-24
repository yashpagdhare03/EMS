import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div id='tasklist' className='grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8'>
        <div className='card-surface p-6'>
          <div className='flex items-baseline justify-between'>
            <span className='badge'>New</span>
            <span className='text-xs text-slate-400'>Tasks</span>
          </div>
          <h2 className='text-3xl font-semibold mt-2 text-emerald-400'>{data.taskCount.newTask}</h2>
        </div>
        <div className='card-surface p-6'>
          <div className='flex items-baseline justify-between'>
            <span className='badge'>Completed</span>
            <span className='text-xs text-slate-400'>Tasks</span>
          </div>
          <h2 className='text-3xl font-semibold mt-2 text-blue-400'>{data.taskCount.completed}</h2>
        </div>
        <div className='card-surface p-6'>
          <div className='flex items-baseline justify-between'>
            <span className='badge'>Active</span>
            <span className='text-xs text-slate-400'>Tasks</span>
          </div>
          <h2 className='text-3xl font-semibold mt-2 text-yellow-400'>{data.taskCount.active}</h2>
        </div>
        <div className='card-surface p-6'>
          <div className='flex items-baseline justify-between'>
            <span className='badge'>Failed</span>
            <span className='text-xs text-slate-400'>Tasks</span>
          </div>
          <h2 className='text-3xl font-semibold mt-2 text-red-400'>{data.taskCount.failed}</h2>
        </div>
    </div>
  )
}

export default TaskListNumber