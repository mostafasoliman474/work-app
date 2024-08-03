import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const { currentUser } = useSelector(state => state.user)
    const accessToken = currentUser.accessToken
    const token = `Bearer ${accessToken}`;
    const navigate = useNavigate();
    const [changes, setChanges] = useState({})
    const handelSubmit = (e) => {
        const value = e.target.value;
        setChanges({
            ...changes,
            [e.target.name]: value,
        })
    }
    const getData = async (e) => {
        e.preventDefault()
        try {
            const data = await axios.post(`${process.env.REACT_APP_SERVER}/api/product/`, changes, {
                headers: {
                    "token": token
                }
            })
            navigate('/products?the%product%added%successfully', data.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='contentContainer'>
            <form className='flex flex-col gap-5 justify-center items-center'>
                <div className='input_container'>
                    <input type='text' className='input_register' name='title' aria-required="true" onChange={handelSubmit} />
                    <label className='lable'>
                        Title
                    </label>
                </div>
                <div className='input_container'>
                    <input type='text' className='input_register' name='producer' aria-required="true" onChange={handelSubmit} />
                    <label className='lable'>
                        Producer
                    </label>
                </div>
                <div className='input_container'>
                    <input type='text' className='input_register' name='img' aria-required="true" onChange={handelSubmit} />
                    <label className='lable'>
                        Image
                    </label>
                </div>
                <div className='input_container'>
                    <input type='text' className='input_register' name='color' aria-required="true" onChange={handelSubmit} />
                    <label className='lable'>
                        Color
                    </label>
                </div>
                <div className='input_container'>
                    <input type='text' className='input_register' name="size" aria-required="true" onChange={handelSubmit} />
                    <label className='lable'>
                        Size
                    </label>
                </div>

                <div className='input_container'>
                    <input type='text' className='input_register' name='color' aria-required="true" onChange={handelSubmit} />
                    <label className='lable'>
                        Category
                    </label>
                </div>
                <div className='input_container'>
                    <input type='number' className='input_register' name='price' aria-required="true" onChange={handelSubmit} />
                    <label className='lable'>
                        Price
                    </label>
                </div>

                <div className='input_container border-none justify-start items-start'>
                    <label className='text-center'>inStock</label>
                    <select onChange={handelSubmit} name='inStock'>
                        <option value='a'>Yes</option>
                        <option value='false'>no</option>
                    </select>
                </div>
                <button type='submit' onClick={(e) => getData(e)} className='w-[20%] bg-green-600 text-white cursor-pointer h-[50px] rounded-lg font-bold text-xl' >
                    Submit</button>
            </form>
        </div>
    )
}

export default AddProduct