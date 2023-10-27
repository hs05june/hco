import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from '../axios/axios.js';
import { useRouter } from 'next/router.js';
import Cookies from 'js-cookie';

const initialState = {
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
}

const signup = () => {

    const cookie = Cookies.get("jwt")
    const router = useRouter()

    useEffect(()=>{

        axios.get("/userinfo",{headers:{authorization:`Bearer ${cookie}`}}).then((e)=>{
            e.status===200 && router.push("/home")
        }).catch((err)=>console.log(err))
    },[cookie])

    const [form, setForm] = useState(initialState);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const { username, email, password, phoneNumber } = form;

        axios.post("/register", {
            name:username, email, password, phoneNumber
        }).then((e)=>{
            Cookies.set("jwt", e.data.jwt)
            console.log(e)
            if(e.status===200){
                router.push("/home")
            }
        }).catch(err=>console.log(err));

    }
        
  return (
    <div className='h-screen login'>
    <div className='absolute top-1/3 text-center xl:w-2/3 lg:w-3/5 md:w-1/2 md_max:w-1/2 sm_max:hidden'>
        <h1 className='xl:text-6xl md:text-4xl sm:text-4xl sm_max:text-3xl text-white tracking-wider'>Team <span className='text-dark_heading xl:text-8xl md:text-6xl sm:text-6xl sm_max:text-4xl'>A</span>mbition</h1>
    </div>
        <div className='flex h-full items-center xl:w-1/3 lg:w-2/5 md:w-1/2 md_max:w-1/2  sm_max:justify-center sm_max:w-full sm_max:px-10 sm:w-full  sm:float-right pr-10 '>
        <div className='bg-light_background  py-8 w-full  h-min px-10 rounded-lg shadow-3xl'>
            <div className='py-2 text-center xl:text-4xl md:text-3xl sm:text-3xl sm_max:text-2xl'>
                <span className="text-dark_heading xl:text-6xl md:text-5xl sm:text-5xl sm_max:text-4xl">A</span>mbition
            </div>
            <div className='text-center xl:text-4xl md:text-3xl sm:text-3xl sm_max:text-2xl'>
                <span className="text-dark_heading xl:text-6xl md:text-5xl sm:text-5xl sm_max:text-4xl">W</span>elcome <span className='text-dark_heading xl:text-6xl md:text-5xl sm:text-5xl sm_max:text-4xl'>B</span>ack
            </div>
            <div className='flex flex-col items-center w-full my-5'>
                <input type="text" name='username' placeholder='Enter Your Username' onChange={handleChange} className='w-full px-5 py-3 my-2 outline-none rounded-xl'/>
                <input type="text" name='email' placeholder='Enter Your Email' onChange={handleChange} className='w-full px-5 py-3 my-2 outline-none rounded-xl'/>
                <input type="number" name='phoneNumber' placeholder='Enter Your Phone Number' onChange={handleChange} className='w-full px-5 py-3 my-2 outline-none rounded-xl'/>
                <input type="password" name='password' placeholder='Enter Your Password' onChange={handleChange} className='w-full px-5 py-3 my-2 outline-none rounded-xl' />
                <button className=' bg-button_color py-4 tracking-wide text-bold rounded-lg text-white w-full my-2 hover:opacity-90' onClick={handleSubmit}>Signup</button>
                <span className='login_link text-lg my-2'>Already a User? <Link href="login"> Login</Link></span>
            </div>

        </div>
    </div>
    
</div>
  )
}

export default signup