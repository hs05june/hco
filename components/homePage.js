import React from 'react'
import Carousel from './Carousel'
import Navbar from './Navbar'
import { Team_Card } from './Team_Card'
import Team_Data from '../data/Team_Data'
// import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
const HomePage = () => {
  console.log(Team_Data);
  Team_Data.map((item) => {console.log(item.name);})
  return (
    <div className='w-screen'>
      <Navbar/>
      <div className='h-min bg-light_background w-screen px-5 py-20'>
          <h1 className='text-5xl font-bold pb-7' >What We Do?</h1>
          <div className='flex justify-center w-full'>
        <div className='w-2/3'>
      <Carousel/>
        </div>
        </div>
      </div>
      <div className='bg-dark_heading px-2 py-12'>
        <h1 className='font-bold text-5xl mb-3'>Our Team</h1>
      
      <div className='h-min grid gap-3  gap-y-3 px-20 items-center xl:grid-cols-4 grid-rows-1   lg_max:grid-rows-2 grid-cols-2 sm_max:flex flex-col'>
        {
         Array.from(Team_Data).map((item)=>{
            return(<Team_Card name={item.name} role={item.Role} image={item.image} linkedin={item.LinkedIn}  github={item.Github} intro={item.Intro} instagram= {item.Instagram}/>)
          })
        }
      </div>
      </div>
      {/* <div className='h-screen bg-dark_heading'>

      </div>
      <div className='h-screen bg-dark_heading'>

      </div> */}
    </div>
  )
}

export default HomePage