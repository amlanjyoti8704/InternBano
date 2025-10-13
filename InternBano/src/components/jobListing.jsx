import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/appContext.jsx'
import { assets, JobCategories, JobLocations, jobsData } from '../assets/assets';
import JobCard from './jobCard.jsx';


function JobListing() {
    const {isSearched, searchFilter, setSearchFilter} = useContext(AppContext);
    

    return (
        <div className='container 2xl:px-20 my-10 mx-auto p-5 flex gap-10 max-sm:flex-col max-sm:items-center'>
            {/* side bar */}
            <div className='lg:w-1/4 w-full p-5 bg-white px-4 rounded shadow-md h-fit'>
                {/* search filter from hero component */}
                {isSearched && (searchFilter.title!=="" && searchFilter.location!=="") && (
                    <>
                        <h3 className='font-medium text-lg mb-4'>Current Search</h3>
                        <div className='mb-4 text-gray-600'>
                            {searchFilter.title && (
                                <span className='inline-flex gap-2.5 items-center bg-blue-50 border border-blue-200 text-blue-600 px-3 py-1 rounded-md mr-2'>
                                    {searchFilter.title}
                                    <img onClick={e => setSearchFilter(prev => ({...prev, title:""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                                </span>
                            )}
                            {searchFilter.location && (
                                <span className='ml-1 inline-flex gap-2.5 items-center bg-red-50 border border-red-200 text-red-600 px-3 py-1 rounded-md mr-2'>
                                    {searchFilter.location}
                                    <img onClick={e=>setSearchFilter(prev=>({...prev, location:""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                                </span>
                            )}
                        </div>
                    </>
                )}
                {/* category filter */}
                <div className='mt-5'>
                    <h4 className='font-medium text-lg py-4'>Search by Category</h4>
                    <ul className='space-y-4 text-gray-600'>
                        {
                            JobCategories.map((category, index) => (
                                <li key={index} className='text-gray-600 gap-3 flex items-center cursor-pointer hover:text-blue-600 my-2' onClick={e=>setSearchFilter(prev=>({...prev, title:category}))}>
                                    <input className='scale-125' type="checkbox" name='' id='' />
                                    {category}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* location filter */}
                <div className='mt-5 pt-6'>
                    <h4 className='font-medium text-lg py-4'>Search by Location</h4>
                    <ul className='space-y-4 text-gray-600'>
                        {
                            JobLocations.map((location , index) => (
                                <li key={index} className='text-gray-600 gap-3 flex items-center cursor-pointer hover:text-blue-600 my-2' onClick={e=>setSearchFilter(prev=>({...prev, title:category}))}>
                                    <input className='scale-125' type="checkbox" name='' id='' />
                                    {location}
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
            {/* Job listings */}
            <section className='w-full lg:w-3/4 p-5 bg-white rounded shadow-md h-fit'>
                <h3 className='font-medium text-3xl py-2' id='job-list'>Latest Jobs</h3>
                <p></p>
                <div className='grid grid-cols-2 xl:grid-cols-3 gap-4 max-sm:grid-cols-1'>
                        {jobsData.map((job,index)=>(
                            <JobCard key={index} job={job}/>
                        ))}
                </div>
            </section>
        </div>
    )
}

export default JobListing
