import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

function About() {
    return (
        <section id='about' className='flex flex-col pt-[10vh]'>

            {/* <h1 className='text-5xl text-red-500'>{arrayOfText.filter((text, index)=>index===currentNumber)}</h1> */}
            <div className='flex max-w-6xl container flex-col'>
                <h2 className='font-semibold mt-10 mb-12 text-[6vw] lg:text-[3vw]'>About Me?</h2>
                <div className=''>
                    <p className='text mb-4 leading-6 md:text-lg font-normal dark:text-brand-grey-alt'>{`I'm a user-minded, detail-oriented frontend engineer and creative problem solver who is passionate about transforming ideas and user-interface designs into web applications that make people's lives easier and bring the future closer to the present.`}</p>

                    <p className='text quote mb-4 leading-6 md:text-lg font-normal dark:text-brand-grey-alt'>{`Using tools and technologies such as Javascript, React, Typescript, Next, Redux, Github etc.,  I strive to build and deliver applications that stand out in performance, usability, responsiveness, accessibility and aesthetics. I have an insatiable desire to improve my skills and I'm currently exploring the field of computer and web security as well as learning to create immersive web animations.`}</p>

                    <p className='text mb-4 leading-6 md:text-lg font-normal dark:text-brand-grey-alt'>{`When I'm not in front of a computer writing code, I spend my time playing the piano, seeing and reading about visual art (for example, paintings and sculptures). I also enjoy reading fictional and mythological pieces and playing video games.`}</p>

                    <p className='text mb-4 leading-6 md:text-lg font-normal dark:text-brand-grey-alt'>{`I'm always up for new adventures and I would like to work with you😉. If you think we're a good fit, you can always reach me `}<br></br> <a target="_blank" rel="noopener noreferrer" href='mailto:adeposi60@gmail.com' className='dark:text-white text-black font-bold text-2xl animate-pulse'>via email</a></p>
                </div>
                <div className='flex flex-col gap-5 pt-[8vh] pb-[8vh]'>
                    <h3 className="font-bold text-[5vw] lg:text-[2.5vw]">
                        {`Wondering what's next?`}
                    </h3>
                    <p className='font-semibold'>Get In Touch</p>

                    {/* <a target="_blank" rel="noopener noreferrer" href='mailto:adeposi60@gmail.com' className="font-bold text-center text-2xl lg:text-4xl py-[14px] dark:text-white text-dark-text animate-pulse">adeposi60@gmail.com</a> */}
                    {/* <a target="_blank" rel="noopener noreferrer" href='mailto:adeposi60@gmail.com' className="rounded-lg self-center px-7 font-semibold text-center py-3 dark:bg-transparent dark:border-white border dark:text-white bg-dark-text text-white w-[250px] h-[50px]">Contact me</a> */}
                    <div className='grid grid-cols-3 gap-8 mt-2'>
                        <a target="_blank" rel="noopener noreferrer" href='mailto:adeposi60@gmail.com' className="btn-flip group"><i className='group-hover:rotate-180 duration-500'><AiOutlineMail /></i>Email</a>
                        <a target="_blank" rel="noopener noreferrer" href='mailto:adeposi60@gmail.com' className="btn-flip group"><i className='group-hover:rotate-180 duration-500'><FaGithub /></i>Github</a>
                        <a target="_blank" rel="noopener noreferrer" href='mailto:adeposi60@gmail.com' className="btn-flip group"><i className='group-hover:rotate-180 duration-500'><FaLinkedin /></i>LinkedIn</a>
                        <a target="_blank" rel="noopener noreferrer" href='mailto:adeposi60@gmail.com' className="btn-flip group"><i className='group-hover:rotate-180 duration-500'><FaTwitter /></i>Twitter</a>
                        <a target="_blank" rel="noopener noreferrer" href='mailto:adeposi60@gmail.com' className="btn-flip group"><i className='group-hover:rotate-180 duration-500'><FaInstagram /></i>Instagram</a>
                    </div>
                </div>


            </div>

            <div className='py-4 footer flex items-center justify-center flex-col gap-3'>
                <h3>Designed and Built with ❤️ by Sydney Idundun</h3>
                <p>© 2022 Sydney Idundun</p>
            </div>

        </section>
    )
}

export default About