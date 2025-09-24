import React from 'react'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import AdminHeader from '../other/AdminHeader'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-7 bg-[#0b0f14]'>
        <AdminHeader data = {props.data} changeUser={props.changeUser}/>
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard