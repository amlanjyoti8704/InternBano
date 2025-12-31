import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useContext } from 'react';
import { AppContext } from '../context/appContext';
import { useEffect } from 'react';
import { ThemeContext } from '../context/themeContext';
import ThemeButton from '../components/themeButton';



function Dashboard() {
    const navigate=useNavigate();
    const {theme}=useContext(ThemeContext);

    const {companyData, setCompanyData, setCompanyToken}=useContext(AppContext)
    // function to log out for company
    const logout=()=>{
        setCompanyToken(null)
        localStorage.removeItem('companyToken')
        setCompanyData(null)
        navigate('/')
    }
    useEffect(()=>{
        if(companyData && window.location.pathname==='/dashboard'){
            navigate('/dashboard/manage-jobs')
        }
    },[companyData, navigate])
    return (
        <div className='min-h-screen'>
            {/* Navbar for recruiter panel */}
            <div className='shadow-md py-4 shadow-gray-800'>
                <div className='px-5 flex justify-between items-center'>
                    <img onClick={e=>navigate('/')} className='max-sm:w-32 cursor-pointer md:h-9 sm:h-7 h-6 w-auto object-contain' src={theme=='dark'?assets.rozgarB_logo:assets.rozgarW_logo} alt="" />
                    {companyData && (
                        <div className='flex items-center gap-3'>
                            <ThemeButton/>
                            <p className='max-sm:hidden'>Welcome, {companyData.name}</p>
                            <div className='relative group'>
                                <img className='w-8 border object-fill dark:border-gray-500 rounded-full' src={companyData.image} alt="" />
                                <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-blackrounded pt-12'>
                                    <ul className='list-none m-0 p-2 bg-white dark:bg-slate-900 rounded-md border text-sm'>
                                        <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                    
                </div>
            </div>
            
            <div className='flex items-start'>
                {/* left side panel */}
                <div className='inline-block min-h-screen border-r-2'>
                    <ul className='flex flex-col items-start pt-5 gap-3 text-gray-800 dark:text-gray-300'>
                        <NavLink className={(isActive)=>`flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 dark:hover:text-gray-800 ${isActive && 'bg-blue-100 dark:bg-transparent border border-blue-300 dark:border-slate-700'}`} to={'/dashboard/add-jobs'} >
                            <img className='min-w-4 dark:bg-white dark:rounded-full' src={assets.add_icon} alt="" />
                            <p className='max-sm:hidden'>Add Job</p>
                        </NavLink>

                        <NavLink className={(isActive)=>`flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 dark:hover:text-gray-800 ${isActive && 'bg-blue-100 dark:bg-transparent border border-blue-300 dark:border-slate-700'}`} to={'/dashboard/manage-jobs'} >
                            <img className='min-w-4 dark:bg-white dark:rounded-full' src={assets.home_icon} alt="" />
                            <p className='max-sm:hidden'>Manage Jobs</p>
                        </NavLink>

                        <NavLink className={(isActive)=>`flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 dark:hover:text-gray-800 ${isActive && 'bg-blue-100 dark:bg-transparent border border-blue-300 dark:border-slate-700'}`} to={'/dashboard/view-applications/:id'} >
                            <img className='min-w-4 dark:bg-white dark:rounded-full' src={assets.person_tick_icon} alt="" />
                            <p className='max-sm:hidden'>View Applications</p>
                        </NavLink>
                    </ul>
                </div>
                <div className='flex-1 h-full p-2 sm:p-5'>
                    <Outlet/>
                </div>
            </div>
            
        </div>
    )
}

export default Dashboard
