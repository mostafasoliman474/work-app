import React from 'react'

import { Users } from '../data.ts'

const Home = () => {
  return (
    <div className='contentContainer flex gap-5'>

      <div className='flex-[2]'>
        <div className='flex flex-col gap-4 rounded-xl border border-gray-400 p-3'>
          <p className='text-3xl font-bold text-white pl-3'>Top Deals</p>
          <div className='flex flex-col gap-5 '>
            {Users.map(user => (
              <div key={user.id} className='flex items-center justify-around hover:bg-cyan-400 p-1 rounded-2xl cursor-pointer'>
                <div className='w-8 h-8'>

                  <img src={user.img} alt="user img" className='w-full h-full object-cover rounded-[50%]' />
                </div>
                <div>
                  <p className='text-white text-sm'>{user.username}</p>
                  <p className='text-white text-sm'>{user.email}</p>
                </div>
                <p className='text-white text-sm font-bold'>${user.amount}</p>
              </div>
            ))}
          </div>
        </div>
        <div>low</div>
      </div>
      <div className='flex-[3] bg-white'>
        <div>upper</div>
        <div>low</div></div>
      <div className='flex-[2] bg-green-100'>
        <div>upper</div>
        <div>low</div>
      </div>
    </div>

  )
}

export default Home