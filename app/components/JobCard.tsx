import React from 'react'
import Image from 'next/image'
import GetData from '../assets/data';

export interface Job {
    image: string,
    title: string,
    location: string,
    description: string,
}


const JobCard = ({image, title, location, description}:Job) => {
  const data = GetData();
  return (
    <div className='grid grid-cols-12 p-6 my-11 border-2 rounded-3xl border-gray-300 font-Epilogue hover:bg-cardHover'>
        <div className='col-span-1'>
          <Image width={70} height={70} src={image} alt='pic'/>
        </div>
        <div className="col-span-11 mx-4" >
            <div>
              <h3 className='font-bold text-xl mb-2'>{title}</h3>
              <span className='text-base text-mygray '>{location}</span>
              <p className='text-gray-700 mt-3 text-base '> {description} </p>
            </div>
            <div className='flex'>
              <div className='border-r-2 mt-5 '>
                <button className='mr-4 px-3 py-1 rounded-full bg-bgGreen text-mygreen bg-opacity-10'>In Person</button>
              </div>
              <button className='ml-4 mt-5 px-3 border-2 rounded-full border-myorange text-myorange'>Education</button>
              <button className='ml-4 mt-5 px-6 border-2 rounded-full border-mypurple text-mypurple'>IT</button>
            </div>
        </div>
    </div>
  )
}

export default JobCard 