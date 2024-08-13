import React from 'react';
import Image from 'next/image';
import GetData from '@/app/assets/data';
import AboutDetail from '@/app/components/AboutDetail';

const JobDetailPage = ({ params }: { params: { id: string } }) => {

    const styles = ['mr-4 px-3 py-1 rounded-full bg-bgGreen text-mygreen bg-opacity-10 font-Epilogue', 'mr-4 px-3 py-1 rounded-full bg-myorange text-myorange bg-opacity-10 font-Epilogue', 'mr-4 px-3 py-1 rounded-full bg-mypurple text-mypurple bg-opacity-10 font-Epilogue' ]
    const highlightText = (text:string) => {
    const parts = text.split(':');
    if (parts.length > 1) {
        const [boldPart, ...rest] = parts;
        return (
        <>
            <span className='font-bold'>{boldPart}:</span>
            {rest.join(':')}
        </>
        );
    } else {
        return text;
    }
    };
    const { id } = params;
    const data = GetData();
    const job = data[parseInt(id, 10)];

    if (!job) {
        return <div>Job not found</div>;
    }

    return (
        <div className='grid grid-cols-11 gap-14 p-10'>
        <div className='col-span-8'>
            <div className='mb-14'>
            <h1 className='subHeading mb-3'>Description</h1>
            <p className='font-Epilogue leading-6'>{job.description}</p>
            </div>
            <div className='mb-14'>
            <h1 className='subHeading my-4'>Responsibilities</h1>
            <ul>
                {job.responsibilities.map((r) => 
                <div className='flex gap-2 mb-2'>
                <Image width={25} height={10} src='/bullets/bullet.png' alt='bullet'></Image>
                <li>{r}</li>
                </div>)}
            </ul>
            </div>
            <div className='mb-14'>
            <h1 className='subHeading'>Ideal Candidate we want</h1>
            <ul className='pl-6 leading-6 mt-3'>
                <li className='list-disc font-Epilogue'>Young ({job.ideal_candidate.age}) {job.ideal_candidate.gender} {job.title}</li>
                {job.ideal_candidate.traits.map((trait) => 
                <li className='list-disc'>{highlightText(trait)}</li>)}
            </ul>
            </div>
            <div>
            <h1 className='subHeading mb-6'>When & Where</h1>
            <div className='flex'>
                <div>
                <Image width={44} height={44} src='/icons/location.png' alt='location icon'></Image>
                </div>
                <div className='flex items-center'>
                <span className='ml-4'>{job.when_where}</span>
                </div>
            </div>

            </div>
        </div>
        <div className='col-span-3'>
            <h1 className='subHeading'>About</h1>
            <div className='border-b border-gray-300 pb-5'>
                {<AboutDetail title="Posted On" content={job.about.posted_on}/>}
                {<AboutDetail title="Deadline" content={job.about.deadline}/>}
                {<AboutDetail title="Location" content={job.about.location}/>}
                {<AboutDetail title="Start Date" content={job.about.start_date}/>}
                {<AboutDetail title="End Date" content={job.about.end_date}/>}
            </div>
            <div className='py-4 border-b border-gray-300'>
            <h1 className='subHeading mb-5'>Catagories</h1> 
            {job.about.categories.map((c, idx) => <button className={styles[idx%3]}>{c}</button>)}
            </div>
            <div className=''>
            <h1 className='subHeading my-5'>Required Skills</h1> 
            <div className='flex flex-wrap'>
            {job.about.required_skills.map((r) => <div className='m-1 px-3 py-1 bg-graybg text-mypurple font-Epilogue'>{r}</div>)}
            </div>
            </div>

        </div>
        </div>
  );
};

export default JobDetailPage