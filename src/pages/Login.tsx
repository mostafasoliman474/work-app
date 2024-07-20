import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetching } from '../redux/api.ts'
const Login = () => {
    const refName = useRef(null)
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const getInfo = (e) => {
        e.preventDefault()
        const form = refName.current
        setUserName(form['Username'].value)
        setPassword(form['password'].value)
        console.log({ userName, password })
    }

    useEffect(() => {
        try {
            const login = () => {
                fetching(dispatch,{userName,password})
            }
            login()
        } catch (error) {
            console.log(error)
        }
    }, [userName,password,dispatch])
    return (
        // <form>
        //     <input type='text' placeholder='Username'/>    
        //     <input type='password' placeholder='password'/>
        //     <input type='submit' value='submit'    
        // </form>
        <div className='contentContainer'>
            <h1 className='text-2xl text-center'>Log In</h1>
            <form className='flex flex-col w-[30%] items-center bg-[#524d4d] gap-5 p-5 m-auto rounded' ref={refName}>
                <input type='text' placeholder='Username' name='Username' className='h-10 pl-2 rounded' />
                <input type='password' placeholder='password' name='password' className='h-10 pl-2 rounded' />
                <input type='submit' onClick={(e) => getInfo(e)} value='submit' className='p-3 rounded cursor-pointer font-semibold text-lg bg-white ' />
            </form>

        </div>
    )
}

export default Login