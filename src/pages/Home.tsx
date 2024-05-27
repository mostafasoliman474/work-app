import React from 'react'
import Nav from '../components/Nav.tsx'
import SideBar from '../components/SideBar.tsx'

const Home = () => {
  return (
    <div>
      <Nav />
      <div className='flex '>

        <SideBar/>
        <div className='flex-3'>
          content 
        </div>
      </div>
    </div>
  )
}

export default Home