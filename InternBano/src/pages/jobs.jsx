// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import JobCard from '../components/jobCard.jsx';
// import { assets } from '../assets/assets';

// function ApiJobs() {
//     const [apiJobs, setApiJobs] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);

//     useEffect(() => {
//         axios.get('/api/apijobs/jobs')
//             .then(res => {
//                 console.log("API Response:", res.data);
//                 if (Array.isArray(res.data)) {
//                     setApiJobs(res.data);
//                 } else if (Array.isArray(res.data.jobs)) {
//                     setApiJobs(res.data.jobs);
//                 } else {
//                     console.error('Invalid data format:', res.data);
//                 }
//             })
//             .catch(err => console.error(err));

//         setCurrentPage(1);
//     }, []);

//     return (
//         <div className="p-6">
//             <h1 className="text-2xl font-bold mb-4">Current Jobs & Internships</h1>

//             {apiJobs.length === 0 ? (
//                 <p className="text-gray-500">No jobs found or still loading...</p>
//             ) : (
//                 <>
//                     <div id="job-list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                         {apiJobs.slice((currentPage - 1) * 6, currentPage * 6).map((job, index) => (
//                             <JobCard key={index} job={job} />
//                         ))}
//                     </div>

//                     {apiJobs.length > 0 && (
//                         <div className="flex items-center justify-center space-x-2 mt-10">
//                             <a href="#job-list">
//                                 <img
//                                     onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
//                                     src={assets.left_arrow_icon}
//                                     alt="Previous"
//                                     className="cursor-pointer w-6"
//                                 />
//                             </a>

//                             {Array.from({ length: Math.ceil(apiJobs.length / 6) }).map((_, index) => (
//                                 <a key={index} href="#job-list">
//                                     <button
//                                         onClick={() => setCurrentPage(index + 1)}
//                                         className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage === index + 1 ? 'bg-blue-100 text-blue-500' : 'text-gray-500'}`}
//                                     >
//                                         {index + 1}
//                                     </button>
//                                 </a>
//                             ))}

//                             <a href="#job-list">
//                                 <img
//                                     onClick={() => setCurrentPage(Math.min(currentPage + 1, Math.ceil(apiJobs.length / 6)))}
//                                     src={assets.right_arrow_icon}
//                                     alt="Next"
//                                     className="cursor-pointer w-6"
//                                 />
//                             </a>
//                         </div>
//                     )}
//                 </>
//             )}
//         </div>
//     );
// }

// export default ApiJobs;