import React from 'react'
import { assets } from '../assets/assets.js'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/appContext.jsx'
import ThemeButton from './themeButton.jsx'
import { ThemeContext } from '../context/themeContext.jsx'

function Navbar() {
    const {theme}=useContext(ThemeContext)
    const {openSignIn, openSignUp} = useClerk();
    const {user} = useUser();
    const navigate=useNavigate();
    const {setShowRecruiterLogin}=useContext(AppContext);
    
    return (
        <div className='fixed z-50 top-0 w-full h-16 bg-blue-200/90 dark:bg-gradient-to-r dark:from-slate-950 dark:to-[#383a49d6] flex items-center justify-center text-black font-bold text-xl shadow-xl dark:shadow-black'>
            <div className='ml-8'>
                <img onClick={()=>navigate('/')} className='cursor-pointer md:h-9 sm:h-7 h-6 w-auto object-contain drop-shadow-2xl' src={theme==='light'?assets.rozgarW_logo:assets.rozgarB_logo} alt="RozgarBano" />
            </div>
            <div className='ml-auto flex gap-8 mr-8'>
                {
                    user?<div className='flex items-center gap-3'>
                        <ThemeButton/>
                        <Link className='dark:text-slate-300' to={'/applications'}>Applied Jobs</Link>
                        {/* <p className='hidden md:block'>|</p>
                        <Link className='' to={'/jobs'}>Jobs</Link> */}
                        <p className='hidden md:block dark:text-slate-300'>|</p>
                        <p className='hidden md:block dark:text-slate-100'>Hi, {user.firstName+" "+user.lastName} </p>
                        <UserButton afterSignOutUrl='/' />
                    </div>:<div className='flex gap-4 max-sm:text-xs'>
                        <ThemeButton/>
                        <div>
                            <button onClick={e=>setShowRecruiterLogin(true)} className='text-gray-600 dark:text-gray-200 px-6 sm:px-8 py-2 '>recruiters login</button>
                        </div>
                        <div>
                            <button onClick={(e)=>openSignIn()} className='bg-blue-500 dark:bg-blue-500  border-2 border-blue-500 dark:border-blue-800 text-gray-200 rounded-full px-5 sm:px-7 py-2  '>sign in</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar
