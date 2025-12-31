import React, { use } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function JobCard({job}) {
    const navigate=useNavigate();
    return (
        <div className='p-6 shadow-md dark:shadow-slate-600 rounded'>
            <div className='flex justify-between items-center'>
                <img className='h-8 rounded-full' src={job.companyId.image} alt="" />
            </div>
            <h4 className='font-medium text-xl mt-2'>{job.title}</h4>
            <div className='flex items-center gap-3 mt-2 text-xs'>
                <span className='bg-blue-50 dark:bg-blue-300 border border-blue-200 dark:border-blue-400 px-4 py-1.5 rounded dark:text-black'>{job.location}</span>
                <span className='bg-red-50 dark:bg-red-300 border border-red-200 dark:border-red-400 px-4 py-1.5 rounded dark:text-black'>{job.level}</span>
            </div>
            <p className='text-gray-500 dark:text-gray-100 text-sm mt-4' dangerouslySetInnerHTML={{__html:job.description.slice(0,150)}}></p>
            <div className='mt-4 flex gap-4 text-sm'>
                <button onClick={()=>{navigate(`/applyJobs/${job._id}`); scrollTo(0,0)}} className='bg-blue-400 text-white px-4 py-2 rounded'>Apply Now</button>
                <button onClick={()=>{navigate(`/applyJobs/${job._id}`); scrollTo(0,0)}} className='text-gray-500 dark:text-gray-200 border border-gray-500 dark:border-gray-400 rounded px-4 py-2'>Learn More</button>
            </div>
        </div>
    )
}

export default JobCard
