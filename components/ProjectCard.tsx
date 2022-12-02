import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


function ProjectCard({ }) {
    return (
        <section className='max-w-4xl  p-12 project-card rounded-3xl '>
            {/* <div className='m-0 inline-flex border col-span-1 clear-both border-white rotor gap-4'>
                <span className='language-tag'>Python</span>
                <span>MySQl</span>
                <span>TailwindCSS
            </div> */}
            <div className='lg:grid flex flex-col grid-cols-2 gap-6'>
                {/* <div className='m-0 inline-flex border col-span-1 clear-both border-white rotor gap-4'>
                    <span>Python</span>
                    <span>MySQl</span>
                    <span>TailwindCSS</span>
                </div> */}

                <div className='rounded-3xl gap-0 border'>

                    <div className='card-image border m-0 border-green-500 flex'>
                        <Image src="/banner1.gif" alt="Vercel Logo" width={600} height={100} />
                    </div>
                </div>
                <div className='flex flex-col justify-center gap-3'>

                    <h3 className='lg:text-6xl text-4xl font-semibold'>Panda</h3>

                    <p>This is a movie api, created with django and python webscrapping. It contains two major end points, the search end point which returns a join containing the needed search name, and the second end point which scrapes specific websites to return the actual download link for the movie</p>

                    <div className='inline-flex border col-span-1 clear-both border-white gap-4'>
                        <span className='language-tag'>Python</span>
                        <span className='language-tag'>MySQl</span>
                        <span className='language-tag'>TailwindCSS</span>
                    </div>


                    <div className='flex mt-6 gap-4'><Link href="/#projects" className='hero-link'> View My Projects</Link><span>or</span><Link href="/#about" className="hero-link">Read About Me</Link></div>
                </div>

            </div>
        </section>
    );
}

export default ProjectCard;