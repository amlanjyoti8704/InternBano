import React, { useRef } from 'react'
import { assets, companylogo } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/appContext.jsx'

const LogoIcon = ({ src }) => {
  return (
    <div className="flex items-center justify-center border border-[#CCCCFF] dark:bg-white dark:shadow-[0_0_30px_5px_#CCCCFF] shadow-[0_0_30px_5px_#061E29] rounded-2xl w-40 h-auto p-4">
      <img src={src} alt="logo" className="w-full h-full object-contain"/>
    </div>
  );
};

function Hero() {
    const {setSearchFilter, setIsSearched} = useContext(AppContext);

    const titleRef=useRef(null);
    const locationRef=useRef(null);

    const onSearch=()=>{
        const title=titleRef.current.value;
        const location=locationRef.current.value;

        setSearchFilter({title, location});
        setIsSearched(true);
        console.log("searching for ", title, location);
        
    }

    return (
        <div className='mt-[8%] container 2xl:px-20 my-10 mx-auto p-5'>
            <div className='bg-gradient-to-r from-blue-400 to-blue-200 dark:bg-gradient-to-tr dark:from-gray-950 dark:to-[blue-300] p-5 rounded flex flex-col gap-5 max-sm:flex-col max-sm:items-center'>
                <h2 className='text-3xl text-center'>Over 10,000+ Jobs to apply</h2>
                <p></p>
                <div className='bg-white text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto rounded flex gap-3 items-center justify-between max-sm:flex-col max-sm:items-center w-full'>
                    <div className='flex gap-3 items-center w-full'>
                        <img className='h-4 sm:h-5' src={assets.search_icon} alt="" />
                        <input type="text" ref={titleRef} placeholder='Search for Jobs' className='max-sm:text-xs p-2 rounded outline-none w-full' />
                    </div>
                    <div className='flex gap-3 items-center w-full'>
                        <img className='h-4 sm:h-5' src={assets.location_icon} alt="" />
                        <input type="text" ref={locationRef} placeholder='location' className='max-sm:text-xs p-2 rounded outline-none w-full' />
                    </div>
                    <button onClick={onSearch} className='bg-blue-400 dark:bg-blue-500 px-6 py-2 rounded text-white m-1'>Search</button>
                </div>
            </div>

            {/* <div className='my-10 border border-gray-300 dark:border-0 bg-gray-200 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-950 dark:to-gray-600 shadow-md dark:shadow-black flex flex-col items-center  gap-5 max-sm:items-center'>
                <h2 className='text-2xl dark:text-slate-200 pt-4'>Top Companies</h2>
                <div className='flex gap-10 max-sm:gap-5 flex-wrap justify-center items-center p-5'>
                    <img className='h-3 sm:h-6' src={assets.accenture_logo} alt="meta" />
                    <img className='h-3 sm:h-6' src={assets.walmart_logo} alt="google" />
                    <img className='h-3 sm:h-6' src={assets.microsoft_logo} alt="microsoft" />
                    <img className='h-3 sm:h-6' src={assets.samsung_logo} alt="netflix" />
                    <img className='h-3 sm:h-6' src={assets.adobe_logo} alt="spotify" />
                    <img className='h-3 sm:h-6' src={assets.amazon_logo} alt="amazon" />
                </div>
            </div> */}

            {/* moving companies logo */}

            <div className='relative overflow-hidden my-10 border border-gray-300 dark:border-0 bg-gray-200 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-950 dark:to-gray-600 shadow-md dark:shadow-black flex flex-col items-center  gap-5 max-sm:items-center'>
                <h2 className='text-2xl dark:text-slate-200 pt-4'>Top Companies</h2>
                <div className="overflow-hidden relative">
                    <div className='gradient-edge' />
                    <div className='gradient-edge' />
                    <div className='marquee h-52'>
                        <div className="flex gap-15 marquee-box">
                            {companylogo.map((logo, index) => (
                                <LogoIcon key={index} src={logo} />
                            ))}

                            {/* Duplicate for seamless loop */}
                            {companylogo.map((logo, index) => (
                                <LogoIcon key={`dup-${index}`} src={logo} />
                            ))}

                            {companylogo.map((logo, index) => (
                                <LogoIcon key={`dup-${index}`} src={logo} />
                            ))}
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
