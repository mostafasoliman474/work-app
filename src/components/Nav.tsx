import { Fullscreen, NotificationsActiveOutlined, SearchOutlined, SettingsOutlined } from '@mui/icons-material'
import React from 'react'
import { Badge } from '@mui/material'

const Nav = () => {
    return (
        <header className='w-full '>
            <nav className='flex justify-between w-[90%] m-auto py-3'>
                <div>
                    <p className='text-2xl text-white'>CATA Admin</p>
                </div>
                <div className='flex gap-4'>
                    <SearchOutlined className='icons' />
                    <Fullscreen className='icons' />
                    <Badge badgeContent={1} color='warning'>
                        <NotificationsActiveOutlined className='icons' />
                    </Badge>
                    <div className='h-8 w-8 rounded-full'>
                        <img alt='profile' className='rounded-full' src='https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                    </div>
                    <p className='text-white'>userName</p>
                    <SettingsOutlined className='icons' />
                </div>
            </nav>
        </header>
    )
}

export default Nav