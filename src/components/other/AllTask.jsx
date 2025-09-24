import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const AllTask = () => {

    const [userData,setUserData] = useContext(AuthContext)

  return (
    <div className='card-surface p-5 mt-5'>
        <div 
            className='grid grid-cols-5 gap-2 py-2 px-2 border-b border-slate-700/60'
            >
            <h2 className='text-sm font-medium text-slate-300 text-center'>Employee</h2>
            <h3 className='text-sm font-medium text-slate-300 text-center'>New</h3>
            <h5 className='text-sm font-medium text-slate-300 text-center'>Active</h5>
            <h5 className='text-sm font-medium text-slate-300 text-center'>Completed</h5>
            <h5 className='text-sm font-medium text-slate-300 text-center'>Failed</h5>
        </div>
        <div className='max-h-80 overflow-auto'>
            {userData.map((elem, idx) => {
            return (
              <div 
                key={idx} 
                className='grid grid-cols-5 gap-2 py-2 px-2 border-b border-slate-800/60 last:border-b-0'
              >
                <h2 className='text-sm font-medium text-slate-200 text-center'>{elem.firstName}</h2>
                <h3 className='text-sm font-medium text-emerald-400 text-center'>{elem.taskCount.newTask}</h3>
                <h5 className='text-sm font-medium text-yellow-400 text-center'>{elem.taskCount.active}</h5>
                <h5 className='text-sm font-medium text-blue-400 text-center'>{elem.taskCount.completed}</h5>
                <h5 className='text-sm font-medium text-red-400 text-center'>{elem.taskCount.failed}</h5>
              </div>
            )
        })}
        </div>
    </div>
  )
}

export default AllTask
