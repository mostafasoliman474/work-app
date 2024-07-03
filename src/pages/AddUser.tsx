import React from 'react'

const AddUser = () => {
    return (
        <div className='contentContainer'>
            <form className='flex flex-col gap-5 justify-center items-center'>
                <div className='input_container'>
                    <input type='text' className='input_register'  aria-required="true"/>
                    <label className='lable'>
                        First Name
                    </label>
                </div>
                <div className='input_container'>
                    <input type='text' className='input_register'  aria-required="true"/>
                    <label className='lable'>
                        Last Name
                    </label>
                </div>
                <div className='input_container'>
                    <input type='email' className='input_register' aria-required="true" />
                    <label className='lable'>
                        Email
                    </label>
                </div>
                <div className='input_container'>
                    <input type='password' className='input_register'  aria-required="true"/>
                    <label className='lable'>
                        Password
                    </label>
                </div>
                <div className='input_container'>
                    <input type='text' className='input_register'  aria-required="true"/>
                    <label className='lable'>
                        Photo
                    </label>
                </div>
                <div className='input_container'>
                    <input type='text'className='input_register' aria-required="true" />
                    <label className='lable'>
                        Phone
                    </label>
                </div>
                
                {/* <input type='email' placeholder='Email' className='input-form' />
                <input type='Password' placeholder='Password' className='input-form' />
                <input type='text' placeholder='Photo' className='input-form' />
                <input type='text' placeholder='Phone' className='input-form' /> */}
                <input type='submit' value="Submit" className='w-[20%] bg-green-600 text-white cursor-pointer h-[50px] rounded-lg font-bold text-xl' />
            </form>
        </div>
    )
}

export default AddUser