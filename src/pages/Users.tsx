import { Search } from '@mui/icons-material';
import React from 'react'


const Users = () => {
  return (
    <div className='contentContainer flex flex-col gap-10'>
      <div className='flex gap-5'>
       <p className='text-white text-2xl font-bold'>Users</p>
       <button type='button' className='p-2 bg-white rounded'>Add new user</button>

      </div>
      <div className='flex flex-col bg-white py-5 px-3 gap-5 rounded '>
        <div className='flex p-1  max-w-[20%] items-center border-b border-gray-400 hover:border-black hover:border-b-2  transition-[ease-in_30ms]'>
          <Search className='w-6 h-6 text-black'/>
          <input type='text' placeholder='Search...' className='outline-none text-black pl-1'/>
        </div>
        <table className='text-black'>
          <th className='flex gap-5 '>
            <td>
            <input type='checkbox'/>
            </td>
            <td>Id</td>
            <td>Avatar</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Created At</td>
            <td>Verified</td>
            <td>Action</td>
          </th>
        </table>
      </div>
    </div>
  )
}

export default Users