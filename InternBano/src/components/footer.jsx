import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
    return (
        <div className='container border-t-1 border-t-gray-400 px-4 2xl:px-20 mx-auto flex items-center justify_between gap-4 py-3 mt-20'>
            <img src={assets.logo} alt="" />
            <p className='flex-1 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @AmlanJyoti | All right reserved.</p>
            <div className='flex gap-2.5'>
                <img width={38} src={assets.facebook_icon} alt="" />
                <img width={38} src={assets.twitter_icon} alt="" />
                <img width={38} src={assets.instagram_icon} alt="" />
            </div>
        </div>
    )
}

export default Footer
