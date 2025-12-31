import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/appContext.jsx'
import { assets, JobCategories, JobLocations } from '../assets/assets';
import JobCard from './jobCard.jsx';


function JobListing() {
    const {isSearched, searchFilter, setSearchFilter, jobs} = useContext(AppContext);
    const [showFilter, setShowFilter]=useState(true);
    const [currentPage, setCurrentPage]=useState(1);
    const [selectedCategories, setSelectedCategories]=useState([]);
    const [selectedLocation, setSelectedLocation]=useState([]);

    const [filteredJobs, setFilteredJobs]=useState(jobs);
    const handlecategoryChange=(category)=>{
        setSelectedCategories(
            prev=>prev.includes(category)? prev.filter(cat=>cat!==category): [...prev, category]
        )
    }
    const handleLocationChange=(location)=>{
        setSelectedLocation(
            prev=>prev.includes(location)? prev.filter(loc=>loc!==location): [...prev, location]
        )
    }

    useEffect(()=>{
        const matchesCategory=job=>selectedCategories.length===0 || selectedCategories.includes(job.category);
        const matchesLocation=job=>selectedLocation.length===0 || selectedLocation.includes(job.location);
        const matchesTitle=job=>searchFilter.title==="" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase());
        const matchesSearchLocation=job=>searchFilter.location==="" || job.location.toLowerCase().includes(searchFilter.location.toLowerCase());
        const newFilteredJobs=jobs.filter(job=>matchesCategory(job) && matchesLocation(job) && matchesTitle(job) && matchesSearchLocation(job));
        setFilteredJobs(newFilteredJobs);
        setCurrentPage(1); // Reset to first page when filters change
    },[jobs, selectedCategories, selectedLocation, searchFilter]);

    return (
        <div className='container 2xl:px-20 my-10 mx-auto p-5 flex gap-10 max-lg:flex-col max-lg:items-center'>
            {/* side bar */}
            <div className='lg:w-1/4 w-1/4 max-lg:w-full p-5 bg-white dark:bg-gradient-to-br dark:from-gray-950 dark:to-gray-800 px-4 rounded shadow-md h-fit max-lg:flex max-lg:flex-col'>
                {/* search filter from hero component */}
                {isSearched && (searchFilter.title!=="" || searchFilter.location!=="") && (
                    
                        <div className='mb-4 text-gray-600 max-lg:flex max-lg:flex-col max-lg:items-center'>
                            <h3 className='font-medium text-lg mb-4'>Current Search</h3>
                            {searchFilter.title && (
                                <span className='inline-flex gap-2.5 items-center bg-blue-50 border border-blue-200 text-blue-600 px-3 py-1 rounded-md mr-2'>
                                    {searchFilter.title}
                                    <img onClick={e => setSearchFilter(prev => ({...prev, title:""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                                </span>
                            )}
                            {searchFilter.location && (
                                <span className='lg:ml-1 max-lg:mt-1 inline-flex gap-2.5 items-center bg-red-50 border border-red-200 text-red-600 px-3 py-1 rounded-md mr-2'>
                                    {searchFilter.location}
                                    <img onClick={e=>setSearchFilter(prev=>({...prev, location:""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                                </span>
                            )}
                        </div>
                    
                )}
                <div className='flex justify-center items-center'>
                    <button onClick={e=> setShowFilter(prev=>!prev)} className='px-6 py-1.5 max-lg:h-10 rounded border border-gray-400 xl:hidden'>
                    {showFilter? "Close": "Filters"}
                    </button>
                </div>
                <div className='flex lg:flex-col justify-evenly items-center'>
                {/* category filter */}
                <div className={showFilter?'mt-5 max-lg:pt-6 max-lg:pr-6':'max-lg:hidden'}>
                    <h4 className='font-medium text-lg py-4'>Search by Category</h4>
                    <ul className='space-y-4 text-gray-600'>
                        {
                            JobCategories.map((category, index) => (
                                <li key={index} className='text-gray-600 gap-3 flex items-center cursor-pointer hover:text-blue-600 my-2' >
                                    <input className='scale-125' type="checkbox" 
                                        onChange={()=>handlecategoryChange(category)}
                                        checked={selectedCategories.includes(category)}
                                    />
                                    {category}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* location filter */}
                <div className={showFilter?'mt-5 pt-6 max-lg:pr-3':'max-lg:hidden'}>
                    <h4 className='font-medium text-lg py-4'>Search by Location</h4>
                    <ul className='space-y-4 text-gray-600'>
                        {
                            JobLocations.map((location , index) => (
                                <li key={index} className='text-gray-600 gap-3 flex items-center cursor-pointer hover:text-blue-600 my-2' >
                                    <input className='scale-125' type="checkbox" 
                                        onChange={()=>handleLocationChange(location)}
                                        checked={selectedLocation.includes(location)}
                                    />
                                    {location}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                </div>
            </div>
            {/* Job listings */}
            <section className='w-full lg:w-3/4 p-5 bg-white dark:bg-gradient-to-br dark:from-gray-950 dark:to-gray-800 rounded shadow-md h-fit'>
                <h3 className='font-medium text-3xl py-2' id='job-list'>Latest Jobs</h3>
                <p></p>
                <div className='flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-4 max-sm:grid-cols-1'>
                        {filteredJobs.slice((currentPage-1)*6, currentPage*6).map((job,index)=>(
                            <JobCard key={index} job={job}/>
                        ))}
                </div>

                {/* pagination */}
                {filteredJobs.length>0. && (
                    <div className='flex items-center justify-center space-x-2 mt-10'>
                        <a href="#job-list">
                            <img onClick={()=> setCurrentPage(Math.max(currentPage-1),1)} src={assets.left_arrow_icon} alt="" />
                        </a>
                        {
                            Array.from({length:Math.ceil(filteredJobs.length/6)}).map((_,index)=>(
                                <a key={index} href="#job-list">
                                    <button onClick={()=> setCurrentPage(index+1)} className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage===index+1?'bg-blue-100 dark:bg-slate-800 text-blue-500 dark:text-blue-200':'text-gray-500'}`}>{index+1}</button>
                                </a>
                            ))
                        }
                        <a href="#job-list">
                            <img onClick={()=> setCurrentPage(Math.min(currentPage+1, Math.ceil(filteredJobs.length/6)))} src={assets.right_arrow_icon} alt="" />
                        </a>
                    </div>
                )}
            </section>
        </div>
    )
}

export default JobListing
