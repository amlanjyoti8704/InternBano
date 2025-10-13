import React from 'react'
import { assets } from '../assets/assets.js'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'


function Navbar() {
    const {openSignIn, openSignUp} = useClerk();
    const {user} = useUser();
    return (
        <div className='w-full h-16 bg-blue-600/20 flex items-center justify-center text-black font-bold text-xl'>
            <div className='ml-8'>
                <img src={assets.logo} alt="InterBano" />
            </div>
            <div className='ml-auto flex gap-8 mr-8'>
                {
                    user?<>
                        <Link to={'application'}>Applied Jobs</Link>
                        <p>|</p>
                        {/* <p>Hi, {user.firstName+" "+user.lastName} </p> */}
                        <UserButton afterSignOutUrl='/' />
                    </>:<>
                        <div>
                        <button className='text-gray-600 px-6 sm:px-9 py-2 '>recruiters login</button>
                        </div>
                        <div>
                            <button onClick={(e)=>openSignIn()} className='bg-blue-500 text-gray-200 rounded-full px-6 sm:px-9 py-2  '>sign up</button>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Navbar
