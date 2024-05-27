import React from 'react'

import { NavList } from '../data.ts'
const SideBar = () => {
  return (
    <header className='flex-1 border-r border-gray-500'>
      <nav className='flex flex-col gap-6 pl-5'>
        {NavList.map((div)=>(
        <div key={div.id} className='flex flex-col gap-2'>
          <a href='#' className='text-gray-600 cursor-pointer'>{div.title}</a>
          {div.links.map(link=>(
          <div key={link.id} className='hover:bg-cyan-400 py-3 rounded flex gap-3 p-1'>
            <link.img className='icons'/>
            <a href={link.link} className='text-white cursor-pointer'>{link.text}</a>
          </div>
          ))}
        </div>

        ))}
        <p className='text-xl text-white'>username</p>
      </nav>
    </header>
  )
}

export default SideBar