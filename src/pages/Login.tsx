import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchingData } from '../redux/api.ts'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    let state = useSelector(state=>state)
    const getInfo = (e) => {
        e.preventDefault()
        let username = e.target[0].value
        let password = e.target[1].value
        console.log({ username, password });
        fetchingData(dispatch, { username, password })
        navigate('/')
    }
    return (
        <div className='contentContainer'>
            <h1 className='text-2xl text-center'>Log In</h1>
            <form className='flex flex-col w-[30%] items-center bg-[#524d4d] gap-5 p-5 m-auto rounded' onSubmit={(e) => getInfo(e)}>
                <input required type='text' placeholder='Username' name='Username' className='h-10 pl-2 rounded' />
                <input required type='password' placeholder='password' name='password' className='h-10 pl-2 rounded' />
                <button type='submit' className='p-3 rounded cursor-pointer font-semibold text-lg bg-white' disabled={state.error} >Submit</button>
            </form>
        </div>
    )
}
export default Login