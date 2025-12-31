import React from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { ThemeContext } from '../context/themeContext.jsx'

function Footer() {

    const {theme}=useContext(ThemeContext)
    return (
        <div className='container border-t-1 border-t-gray-400 px-4 2xl:px-20 mx-auto flex items-center justify_between gap-4 py-3 mt-20'>
            <div className='w-50 h-auto object-contain'>
                <img className='object-contain' src={theme=="dark"? assets.rozgarB_logo : assets.rozgarW_logo} alt="" />
            </div>
            <p className='flex-1 pl-4 text-sm text-gray-500 dark:text-gray-300 max-sm:hidden'>Copyright @AmlanJyoti | All right reserved.</p>
            <div className='flex gap-2.5'>
                <a href="https://www.facebook.com/profile.php?id=100089800446175" target='_blank'><img className='bg-white rounded-full' width={38} src={assets.facebook_icon} alt="" /></a>
                <a href="#"><img className='bg-white rounded-full' width={38} src={assets.twitter_icon} alt="" /></a>
                <a href="https://www.instagram.com/amlan._.jyoti/" target='_blank'><img className='bg-white rounded-full' width={38} src={assets.instagram_icon} alt="" /></a>
            </div>
        </div>
    )
}

export default Footer
