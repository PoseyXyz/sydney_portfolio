import React from 'react'

function About() {
    return (
        <section id='about' className='container flex flex-col justify-center items-center'>
            {/* <h1 className='text-5xl text-red-500'>{arrayOfText.filter((text, index)=>index===currentNumber)}</h1> */}
            <h2 className='dark:text-white font-semibold mb-8 text-[6vw] lg:text-[2vw] text-center'>About Me?</h2>
            <div className='mb-8'>
                <p className='text text-center mb-4 leading-6 md:text-lg font-normal dark:text-brand-grey-alt'>{`I'm a user-minded, detail-oriented frontend engineer and creative problem solver who is passionate about transforming ideas and user-interface designs into web applications that make people's lives easier and bring the future closer to the present.`}</p>

                <p className='text quote text-center mb-4 leading-6 md:text-lg font-normal dark:text-brand-grey-alt'>{`Using tools and technologies such as Javascript, React, Typescript, Next, Redux, Github etc.,  I strive to build and deliver applications that stand out in performance, usability, responsiveness, accessibility and aesthetics. I have an insatiable desire to improve my skills and I'm currently exploring the field of computer and web security as well as learning to create immersive web animations.`}</p>

                <p className='text text-center mb-4 leading-6 md:text-lg font-normal dark:text-brand-grey-alt'>{`When I'm not in front of a computer writing code, I spend my time playing the piano, seeing and reading about visual art (for example, paintings and sculptures). I also enjoy reading fictional and mythological pieces and playing video games.`}</p>

                <p className='text text-center mb-4 leading-6 md:text-lg font-normal dark:text-brand-grey-alt'>{`I'm always up for new adventures and I would like to work with you😉. If you think we're a good fit, you can always reach me at `}<br></br> <a target="_blank" rel="noopener noreferrer" href='mailto:adeposi60@gmail.com' className='dark:text-white text-black font-bold text-2xl animate-pulse'>adeposi60@gmail.com</a></p>
            </div>
            <div className='self-center flex flex-col gap-4'>
                <h3 className="text-center text-sm lg:max-w-lg text-dark-text dark:text-[#c4c4c4]">
                    Have any questions, a proposal, project(s) or want to collaborate? Feel free to reach out.
                </h3>
                {/* <a target="_blank" rel="noopener noreferrer" href='mailto:adeposi60@gmail.com' className="font-bold text-center text-2xl lg:text-4xl py-[14px] dark:text-white text-dark-text animate-pulse">adeposi60@gmail.com</a> */}
                {/* <a target="_blank" rel="noopener noreferrer" href='mailto:adeposi60@gmail.com' className="rounded-lg self-center px-7 font-semibold text-center py-3 dark:bg-transparent dark:border-white border dark:text-white bg-dark-text text-white w-[250px] h-[50px]">Contact me</a> */}
                <a target="_blank" rel="noopener noreferrer" href='mailto:adeposi60@gmail.com' className="btn-flip" data-back="Contact me" data-front="Contact me"></a>
            </div>
        </section>
    )
}

export default About