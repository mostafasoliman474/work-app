import axios from 'axios'
import React, { useState } from 'react'
const radio = {
    ask: "inStock",
    choices: [
        {
            text: "yes", value: 1,
        },
        {
            text: "no", value: 0,
        },
    ]
}
const AddProduct = () => {
    console.log()
    const getData = async (e) => {
        e.preventDefault()
        try {
            const data = await axios.post("http://localhost:5000/api/product/",body,{headers:{
                "token":process.env.REACT_APP_Token
            }})
            
        
            console.log(data.data)
        } catch (error) {
            console.log(error)
        }

    }
    const [color, setColor] = useState([])
    const [size, setSize] = useState([])
    const [img, setImg] = useState('')
    const [producer, setProducer] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    // const [inStock, setInStock] = useState('')
    const [category, setCategory] = useState([])
    const getTitle = (e) => {
        let value = e.target.value;
        setTitle(value)
    }
    const getProducer = (e) => {
        let value = e.target.value;
        setProducer(value)
    }
    const getImg = (e) => {
        let value = e.target.value;
        setImg(value)
    }
    const getPrice = (e) => {
        let value = e.target.value;
        setPrice(value)
    }
    const getColor = (e) => {
        let value = e.target.value;
        setColor(value)
    }
    const getSize = (e) => {
        let value = e.target.value;
        setSize(value)
    }
    const getCategory = (e) => {
        let value = e.target.value;
        setCategory(value)
    }
    const body={
        title, producer, img, category, size, color, price
    }
    console.log(body)
    return (
        <div className='contentContainer'>
            <form className='flex flex-col gap-5 justify-center items-center'>
                <div className='input_container'>
                    <input type='text' className='input_register' aria-required="true" onChange={(e) => getTitle(e)} />
                    <label className='lable'>
                        title
                    </label>
                </div>
                <div className='input_container'>
                    <input type='text' className='input_register' aria-required="true" onChange={(e) => getProducer(e)} />
                    <label className='lable'>
                        producer
                    </label>
                </div>
                <div className='input_container'>
                    <input type='text' className='input_register' aria-required="true" onChange={(e) => getImg(e)} />
                    <label className='lable'>
                        img
                    </label>
                </div>
                <div className='input_container'>
                    <input type='text' className='input_register' aria-required="true" onChange={(e) => getColor(e)} />
                    <label className='lable'>
                        color
                    </label>
                </div>
                <div className='input_container'>
                    <input type='text' className='input_register' aria-required="true" onChange={(e) => getSize(e)} />
                    <label className='lable'>
                        size
                    </label>
                </div>

                <div className='input_container'>
                    <input type='text' className='input_register' aria-required="true" onChange={(e) => getCategory(e)} />
                    <label className='lable'>
                        Category
                    </label>
                </div>
                <div className='input_container'>
                    <input type='number' className='input_register' aria-required="true" onChange={(e) => getPrice(e)} />
                    <label className='lable'>
                        price
                    </label>
                </div>

                <div className='input_container border-none justify-start items-start'>
                    <p className='text-center'>inStock</p>
                    <div className='flex gap-5'>
                        {radio.choices.map(option => (
                            <div key={option.text}>
                                <input type='radio' name='instock' value={option.value} id={option.text} />
                                <label>{option.text}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <button type='submit' onClick={(e) => getData(e)} className='w-[20%] bg-green-600 text-white cursor-pointer h-[50px] rounded-lg font-bold text-xl' >
                    Submit</button>
            </form>
        </div>
    )
}

export default AddProduct