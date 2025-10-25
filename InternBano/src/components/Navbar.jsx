import React from 'react'
import { assets } from '../assets/assets.js'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/appContext.jsx'


function Navbar() {
    const {openSignIn, openSignUp} = useClerk();
    const {user} = useUser();
    const navigate=useNavigate();
    const {setShowRecruiterLogin}=useContext(AppContext);
    
    return (
        <div className='w-full h-16 bg-blue-600/20 flex items-center justify-center text-black font-bold text-xl'>
            <div className='ml-8'>
                <img onClick={()=>navigate('/')} className='cursor-pointer' src={assets.logo} alt="InterBano" />
            </div>
            <div className='ml-auto flex gap-8 mr-8'>
                {
                    user?<div className='flex items-center gap-3'>
                        <Link className='' to={'/applications'}>Applied Jobs</Link>
                        {/* <p className='hidden md:block'>|</p>
                        <Link className='' to={'/jobs'}>Jobs</Link> */}
                        <p className='hidden md:block'>|</p>
                        <p className='hidden md:block'>Hi, {user.firstName+" "+user.lastName} </p>
                        <UserButton afterSignOutUrl='/' />
                    </div>:<div className='flex gap-4 max-sm:text-xs'>
                        <div>
                        <button onClick={e=>setShowRecruiterLogin(true)} className='text-gray-600 px-6 sm:px-9 py-2 '>recruiters login</button>
                        </div>
                        <div>
                            <button onClick={(e)=>openSignIn()} className='bg-blue-500 text-gray-200 rounded-full px-6 sm:px-9 py-2  '>sign in</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar
