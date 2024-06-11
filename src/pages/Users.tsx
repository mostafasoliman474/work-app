import { BorderColorOutlined, CheckOutlined, ClearOutlined, DeleteForeverOutlined, Search } from '@mui/icons-material';
import React from 'react'
import { userRows } from '../data.ts';


const Users = () => {
  return (
    <div className='contentContainer flex flex-col gap-10'>
      <div className='flex gap-5'>
        <p className='text-white text-2xl font-bold'>Users</p>
        <button type='button' className='p-2 bg-white rounded'>Add new user</button>

      </div>
      <div className='flex flex-col bg-white py-5 px-3 gap-5 rounded '>
        <div className='flex p-1  max-w-[20%] items-center border-b border-gray-400 hover:border-black hover:border-b-2  transition-[ease-in_30ms]'>
          <Search className='w-6 h-6 text-black' />
          <input type='text' placeholder='Search...' className='outline-none text-black pl-1' />
        </div>
        <table className='text-black '>
          <thead className=''>
            <tr className=''>
              <th scope="col" >
                <input type='checkbox' />
              </th>
              <th scope="col" >Id</th>
              <th scope="col" >Avatar</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Created At</th>
              <th scope="col">Verified</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className=''>
            {userRows.map(user => (
              <tr key={user.id} className='' >
                <td className='text-center'>
                  <input type='checkbox' name={`${user.id}`}/>
                </td>  
                <td className='text-center'>{user.id}</td>
                <td className='Img__user_div'>
                  <div className=' w-[30%] h-12 rounded-[100%]'>
                    <img src={user.img} alt='users' className='w-full h-full object-cover rounded-[100%]'/>
                  </div>
                </td>
                <td className='text-center'>{user.firstName}</td>
                <td className='text-center'>{user.lastName}</td>
                <td className='text-center'>{user.email}</td>
                <td className='text-center'>{user.phone}</td>
                <td className='text-center'>{user.createdAt}</td>
                <td className='text-center'>{user.verified===true?<CheckOutlined/>:<ClearOutlined/>}</td>
                <td className='flex gap-5 justify-center' >
                  <BorderColorOutlined className='text-green-600 cursor-pointer'/>
                  <DeleteForeverOutlined className='text-red-700 cursor-pointer'/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users