import { Link } from 'react-router-dom';
import { NavList } from '../data.ts'
import React from 'react';
const SideBar = () => {
  return (
    <header className='flex-1 border-r border-gray-500'>
      <nav className='flex flex-col gap-6 pl-5'>
        {NavList.map((div)=>(
        <div key={div.id} className='flex flex-col gap-2'>
          <p className='text-gray-600'>{div.title}</p>
          {div.links.map(item=>(
            <Link key={item.id} to={`/${item.link}`} className='hover:bg-cyan-400 py-3 rounded flex gap-3 p-1'>
            <item.icon className='icons'/>
            <p className='cursor-pointer'>{item.text}</p>
          </Link>
          ))}
        </div>
        ))}
      </nav>
    </header>
  )
}
export default SideBar