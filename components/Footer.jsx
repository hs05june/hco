import Link from "next/link"
import {BsInstagram,BsGithub,BsLinkedin} from "react-icons/bs"
const Footer = () => {
  return (
    <div className="w-full grid grid-rows-1 grid-flow-col py-6 my-6 px-8 border-b-4 md_max:grid-rows-2 sm_max:flex flex-col items-center">
        <div className="w-full max-w-xs sm_max:mb-8">
        <div className='py-2 text-center xl:text-4xl md:text-3xl sm:text-3xl sm_max:text-2xl'>
                    <span className="text-dark_heading xl:text-6xl md:text-5xl sm:text-5xl sm_max:text-4xl">A</span>mbition
                </div>
                <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, pariatur doloremque. Maxime laudantium reprehenderit a tempore ad totam perspiciatis ut beatae reiciendis rerum.
                </p>
        </div>
        {/* <div className="w-full grid grid-rows-1 grid-flow-col"> */}
        <div className="w-full flex flex-col items-center max-w-xs sm_max:mb-8">
            <h1 className="font-bold xl:text-3xl md:text-3xl sm:text-3xl sm_max:text-2xl">Social Media</h1>
            <div className="w-1/2 flex justify-between my-5 ">
                <span><BsInstagram className="cursor-pointer" fontSize="2.5rem"/></span>
                <span><BsGithub className="cursor-pointer" fontSize="2.5rem"/></span>
                <span><BsLinkedin className="cursor-pointer" fontSize="2.5rem"/></span>

            </div>
        </div>
        <div className="flex w-full flex-col items-center max-w-xs">
            <h1 className="font-bold xl:text-3xl md:text-3xl sm:text-3xl sm_max:text-2xl">Join Us</h1>
            <div className="w-full flex flex-row justify-around my-5">
                <button className="bg-button_color p-2 rounded-md text-white font-bold opacity-80 hover:opacity-100"><Link href="signup">Sign Up</Link></button>
                <button className="bg-button_color p-2 rounded-md text-white font-bold opacity-80 hover:opacity-100"><Link href="login">Log In</Link></button>
            </div>
        </div>
        {/* </div> */}
    </div>
  )
}

export default Footer