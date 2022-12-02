import React from 'react';


function Hero() {
    return (
        <section className="container flex flex-col text-center justify-center items-center h-[84vh]">
            <div className='flex flex-col gap-8 items-center'>
                <h1 className='text-black text-4xl sm:text-5xl font-bold md:text-6xl lg:text-8xl'>Meet your next <span className='underline animate-pulse'>creative</span> developer</h1>
                <p className='max-w-3xl leading-6 md:text-lg font-normal dark:text-brand-grey-alt'>Hi, my name's Sydney, a pragmatic <strong className='animate-pulse'>fullstack software developer</strong> with experience creating REST API's using django and drf to create<strong className='animate-pulse'>interactive</strong> and <strong className='animate-pulse'>scalable</strong> web solutions and experiences that <strong className='animate-pulse'>solve problems</strong> and <strong className='animate-pulse'>drive innovation</strong>.</p>
                {/* <div className='flex mt-2 gap-4'><Link href="/#projects"><a className="hero-link">View My Projects</a></Link><span>or</span><Link href="/#about"><a className="hero-link before:right-0">Read About Me</a></Link></div> */}
                <a target="_blank" rel="noopener noreferrer" href='mailto:adeposi60@gmail.com' className="bg-black text-white rounded-md py-3 px-10 text-xl hover:bg-white hover:text-black border hover:animate-pulse hover:border-black border-black duration-200">Reach Out</a>

            </div>
        </section>
    );
}

export default Hero