import { Fullscreen, NotificationsActiveOutlined, SearchOutlined, SettingsOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import { Badge } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/userReducer.ts'

const Nav = () => {
    const [popMenu, setPopMenu] = useState(false);
    const dispatch = useDispatch()
    const { currentUser } = useSelector(state => state.user);

    return (
        <header className='w-full relative'>
            <nav className='flex justify-between w-full m-auto py-3 px-4'>
                <div>
                    <p className='text-2xl '>CATA Admin</p>
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
                    <p className=''>{currentUser.username}</p>
                    <SettingsOutlined className='icons' onClick={() => setPopMenu(!popMenu)} />
                </div>
            </nav>
            {
                popMenu &&
                <div className='w-[200px] h-[200px] bg-[#625b5b] absolute left-[86%] top-[80%] rounded-lg'>
                    <a href='/login' onClick={() => dispatch(logout())}>Sign Out</a>
                </div>
            }

        </header>
    )
}

export default Nav