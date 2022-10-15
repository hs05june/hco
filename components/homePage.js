import React from 'react'
import Carousel from './Carousel'
import Navbar from './Navbar'

const HomePage = () => {
  return (
    <div className='w-screen'>
      <Navbar/>
      <div className='h-screen bg-light_background w-screen p-5'>
          <h1 className='text-5xl font-bold pb-7' >What We Do?</h1>
          <div className='flex justify-center w-full'>
        <div className='w-2/3'>
      <Carousel/>
        </div>
        </div>
      </div>
      {/* <div className='h-screen bg-dark_heading'>

      </div>
      <div className='h-screen bg-dark_heading'>

      </div>
      <div className='h-screen bg-dark_heading'>

      </div> */}
    </div>
  )
}

export default HomePage