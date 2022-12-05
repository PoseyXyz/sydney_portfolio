import Link from 'next/link';
import React from 'react';
import { FaBook, FaBookOpen, FaCodeBranch, FaEye, FaTools } from 'react-icons/fa';


function Hero() {
    return (
        <section className="flex flex-col justify-center items-center h-[92vh]">
            <div className='flex max-w-6xl container flex-col gap-4'>
                <h6 className='font-semibold'>Hi, My name is</h6>
                <h2 className='text-black font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Sydney Idundun.</h2>
                <h2 className='text-[#111111] text-4xl sm:text-5xl font-bold md:text-6xl lg:text-7xl'>Your next <span className='underline animate-pulse'>creative</span> developer</h2>
                <p className='max-w-3xl pt-8 pb-9 leading-6 md:text-lg font-normal dark:text-brand-grey-alt'>{`Hi, my name's Sydney, a pragmatic`} <strong className='animate-pulse'>fullstack software developer</strong> {`with experience creating REST API's using django and drf to create`}<strong className='animate-pulse'>interactive</strong> and <strong className='animate-pulse'>scalable</strong> web solutions and experiences that <strong className='animate-pulse'>solve problems</strong> and <strong className='animate-pulse'>drive innovation</strong>.</p>
                {/* <div className='flex mt-2 gap-4'><Link href="/#projects"><a className="hero-link">View My Projects</a></Link><span>or</span><Link href="/#about"><a className="hero-link before:right-0">Read About Me</a></Link></div> */}
                {/* <a target="_blank" rel="noopener noreferrer" href='mailto:adeposi60@gmail.com' className="bg-black self-start text-white rounded-md py-3 px-10 text-xl hover:bg-white hover:text-black border hover:animate-pulse hover:border-black border-black duration-200">Reach Out</a> */}
                <div className='flex gap-4'><Link href="/#projects" className='hero-link group'><i className='group-hover:rotate-180 group-hover:text-red-500 duration-700'><FaTools /></i>My Projects</Link><span>|</span><Link href="/#about" className="hero-link group hover:scale-100"><i className='group-hover:rotate-180 group-hover:text-red-500 duration-700'><FaBookOpen /></i>About Me</Link></div>

            </div>
        </section>
    );
}

export default Hero