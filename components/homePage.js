import React from 'react'
import Carousel from './Carousel'
import Navbar from './Navbar'

const HomePage = () => {
  return (
    <div className='w-screen'>
      <Navbar/>
      <div className='h-screen bg-dark_heading'>
      <Carousel/>
      </div>
      <div className='h-screen bg-dark_heading'>

      </div>
      <div className='h-screen bg-dark_heading'>

      </div>
      <div className='h-screen bg-dark_heading'>

      </div>
    </div>
  )
}

export default HomePage