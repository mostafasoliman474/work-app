import React, { useState } from 'react'

const AddProduct = () => {
    const insertProduct= ()=>{

    }
    const [color, setColor] = useState('')
    const [img, setImg] = useState('')
    const [producer, setProducer] = useState('')
    const [tilte, setTilte] = useState('')
    const [price, setPrice] = useState('')
    const [inStock, setInStock] = useState('')
    const [category, setCategory] = useState('')
    return (
        <div className='contentContainer'>
            <form className='flex flex-col gap-5 justify-center items-center'>
                <div className='input_container'>
                    <input type='text' className='input_register' aria-required="true" />
                    <label className='lable'>
                        img
                    </label>
                </div>
                <div className='input_container'>
                    <input type='text' className='input_register' aria-required="true" />
                    <label className='lable'>
                        title
                    </label>
                </div>
                <div className='input_container'>
                    <input type='text' className='input_register' aria-required="true" />
                    <label className='lable'>
                        color
                    </label>
                </div>

                <div className='input_container'>
                    <input type='text' className='input_register' aria-required="true" />
                    <label className='lable'>
                        Category
                    </label>
                </div>
                <div className='input_container'>
                    <input type='text' className='input_register' aria-required="true" />
                    <label className='lable'>
                        price
                    </label>
                </div>
                <div className='input_container'>
                    <input type='text' className='input_register' aria-required="true" />
                    <label className='lable'>
                        producer
                    </label>
                </div>

                <div className='input_container border-none justify-start items-start'>
                    <p className='text-center'>inStock</p>
                    <div className='flex gap-5'>

                        <div>
                            <input type='radio' name='instock' value='yes' id='yes' />
                            <label>yes</label>
                        </div>
                        <div>
                            <input type='radio' name='instock' value='no' />
                            <label>no</label>
                        </div>
                    </div>
                </div>


                {/* <input type='email' placeholder='Email' className='input-form' />
                <input type='Password' placeholder='Password' className='input-form' />
                <input type='text' placeholder='Photo' className='input-form' />
                <input type='text' placeholder='Phone' className='input-form' /> */}
                <input type='submit' value="Submit" onSubmit={()=>insertProduct} className='w-[20%] bg-green-600 text-white cursor-pointer h-[50px] rounded-lg font-bold text-xl' />
            </form>
        </div>
    )
}

export default AddProduct