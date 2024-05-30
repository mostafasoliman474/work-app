import React from 'react'

const Profile = () => {
  return (
    <div className='contentContainer flex'>
      <div className='flex-1'>
        <div className='flex flex-col gap-10 border-b border-gray-400 pb-10 pr-4'>
          <div className='flex gap-10 items-center'>
            <span className='border border-gray-500 px-4 py-6'>

              <img src='#' alt='profileimg' />
            </span>
            <p>username</p>
            <input type='button' value='update' />
          </div>
          <div>
            <p className='profile_p'>username &nbsp;<span>Mostafa mohdy</span></p>
            <p className='profile_p'>email &nbsp;<span>Mostafa_mohdy@gmail.com</span></p>
            <p className='profile_p'>fullname &nbsp;<span>mostafa mohamed soliman</span></p>
            <p className='profile_p'>phone &nbsp;<span>01110734104</span> </p>
            <p className='profile_p'>status &nbsp;<span>Verified</span> </p>
          </div>
        </div>
        <div>

        </div>
      </div>
      <div className='flex-1'>
        left
      </div>
    </div>
  )
}

export default Profile