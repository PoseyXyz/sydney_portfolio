import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaEye, FaCodeBranch } from 'react-icons/fa'
import { AiOutlineFolder } from 'react-icons/ai'
import { projectListInterface } from '../inferfaces/interfaces';

type Props = {
    project:projectListInterface
}

function ProjectCard({ project }:Props) {

    return (
        // <section className='max-w-4xl p-12 project-card rounded-3xl'>
        //     {/* <div className='m-0 inline-flex border col-span-1 clear-both border-white rotor gap-4'>
        //         <span className='language-tag'>Python</span>
        //         <span>MySQl</span>
        //         <span>TailwindCSS
        //     </div> */}
        //     <div className='lg:grid flex flex-col grid-cols-2 gap-8'>
        //         {/* <div className='m-0 inline-flex border col-span-1 clear-both border-white rotor gap-4'>
        //             <span>Python</span>
        //             <span>MySQl</span>
        //             <span>TailwindCSS</span>
        //         </div> */}

        //         <div className='rounded-3xl gap-0 border'>

        //             <div className='card-image border m-0 border-green-500 flex'>
        //                 <Image src="/banner1.gif" alt="Vercel Logo" width={600} height={100} />
        //             </div>
        //         </div>
        //         <div className='flex flex-col justify-center gap-4'>

        //             <h3 className='lg:text-6xl text-4xl font-semibold'>{project.name}</h3>

        //             <p>{project.description}</p>

        //             {/* <div className='inline-flex border col-span-1 clear-both border-white gap-4'c>
        //                 <span className='language-tag'>Python</span>
        //                 <span className='language-tag'>MySQl</span>
        //                 <span className='language-tag'>TailwindCSS</span>
        //             </div> */}

        //             <div className='inline-flex border col-span-1 clear-both border-white gap-4'>
        //                 {project.languagesUsed.map((language:string, index:number)=>{
        //                     return (
        //                         <span key={index} className='language-tag'>{language}</span>
        //                     )
        //                 })}
        //             </div>


        //             <div className='flex mt-7 gap-4'><Link href="/#projects" className='hero-link group'><i className='group-hover:rotate-180 group-hover:text-red-500 duration-700'><FaEye /></i> View Live</Link><span>or</span><Link href="/#about" className="hero-link group"><i className='group-hover:rotate-180 group-hover:text-red-500 duration-700'><FaCodeBranch /></i>View Code</Link></div>
        //         </div>

        //     </div>
        // </section>
        <div className='rounded-md hover:-translate-y-4 group cursor-pointer duration-700 flex flex-col gap-8 bg-[#112240] p-8'>
            <span className='flex justify-between items-center'>
                <span className='text-5xl text-[#62F9D6]'>
                    <AiOutlineFolder />
                </span>
                <span className='flex gap-5 text-xl text-[#9BA6C4]'>
                    <i className='hover:text-[#62F9D6] duration-500 hover:rotate-180'><FaCodeBranch /></i>
                    <i className='hover:text-[#62F9D6] duration-500 hover:rotate-180'><FaEye /></i>
                </span>
            </span>
            <div className='flex flex-col gap-2'>
                <h3 className='font-bold text-[#9BA6C4] duration-200 group-hover:text-[#62F9D6] text-lg'>Integrating Algolia Search with WordPress Multisite</h3>
                <p className='text-[#9BA6C4]'>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>

                <div className='inline-flex text-sm border mt-4 col-span-1 clear-both border-white gap-4'>
                    <span className='text-[#9BA6C4]'>Python</span>
                    <span className='text-[#9BA6C4]'>MySQl</span>
                    <span className='text-[#9BA6C4]'>TailwindCSS</span>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;