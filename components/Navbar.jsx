import Link from "next/link"

const Navbar = () => {
  return (
    <>
    <nav className="navbar bg-white w-screen px-10 h-20 items-center justify-between flex flex-column">
        <div className="logo  text-black justify-center w-1/6">
           <span className="text-dark_heading text-6xl">A</span>mbition
        </div>
        <div className="navlinks   md:w-1/2 lg:w-1/3 xl:w-1/3 text-lg font-bold flex justify-between flex-column sm_max:hidden">
                <div className="hover:text-dark_heading">
                    <Link  href="/">Home</Link>
                </div>
                <div className="hover:text-dark_heading" >
                    <Link href="/billing">Billing</Link>
                </div>
                <div className="hover:text-dark_heading">
                    <Link href="/dashboard">Dashboard</Link>
                </div>
                <div className="hover:text-dark_heading">
                    <Link href="/items">Items</Link>
                </div>
        </div>
        <div className="navbtns md:w-1/5 lg:w-1/6  sm_max:hidden flex flex-column justify-between w-1/8">
            <button>Sign Up</button>
            <button>Log In</button>
        </div>
    </nav>
     <div className='hidden sm_max:flex bg-light_background flex-col justify-center items-center text-center py-6'>
        <div className="text-lg font-bold w-full">
          <div className="border-b-2 my-2 border-dark_background w-full hover:text-dark_heading"><Link href="/"><a>Home</a></Link></div>
          <div className="border-b-2 my-2 border-dark_background hover:text-dark_heading"><Link href="/billing">Billing</Link></div>
          <div className="border-b-2 my-2 border-dark_background hover:text-dark_heading"><Link href="/dashboard">Dashboard</Link></div>
          <div className="border-b-2 my-2 border-dark_background hover:text-dark_heading"><Link href="/items">Items</Link></div>
         </div>
         <div className="nav_box_btns flex flex-col">
         <button className="my-2">Sign Up</button>
        <button>Log In</button>
         </div>
     </div>
     </>
  )
}

export default Navbar