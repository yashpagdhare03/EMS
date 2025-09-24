import React from 'react'
import { AuthContext } from '../../context/AuthContext'

const AdminHeader = (props) => {
  // const [username, setUsername] = useState('')
  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName) 
  // }
  const data = props.data
  console.log(data)

  const logOutUser = () => {
    localStorage.setItem('loggedInUser','' )
    props.changeUser('')
  }

  return (
    <div className='flex items-center justify-between mb-6'>
        <div>
          <p className='text-sm text-slate-400'>Hello</p>
          <h1 className='text-2xl font-semibold tracking-tight'>Admin <span>😁</span></h1>
        </div>
        <button onClick={logOutUser} className='btn btn-danger'>Log Out</button>
    </div>
  )
}

export default AdminHeader