import React from 'react'
import JobCard from './JobCard'
import GetData from '../assets/data'
import Link from 'next/link';

const JobList = () => {
    const data = GetData();

    return (
        <div className='pl-28 pr-52 pt-12'>
        <div className="header flex justify-between">
            <div>
                <h1 className='text-3xl font-black font-Poppins'>Opportunities</h1>
                <span className='text-sm text-mygray'>Showing 73 results</span>
            </div>
            <div className='text-sm'>
                <span className='mr-3 text-mygray '>Sort by:</span>
                <div className="select inline-block border-r-2 border-gray-500 ">
                <select >
                    <option >Most relevant</option>
                    <option>Most recent</option>
                </select>
                </div>
            </div>
        </div>
        <div>
            {data.map((job) => 
                <Link href={`/jobs/${job.id}`} key={job.id}>
                    <JobCard image={job.image} title={job.title} location={job.about.location} description={job.description} />
                </Link>)}
        </div>
    </div>
  )
}

export default JobList