import React, { useEffect, useRef, useState } from 'react';
import projectListData from '../data/projectList'
import ProjectCard from './ProjectCard'



function Projects() {
    const [projects] = useState([...projectListData])
    const slideTrack = useRef<HTMLDivElement | null>(null)
    const currentVer = useRef<HTMLDivElement | null>(null)
    const nonVal = useRef<HTMLDivElement | null>(null)

    const [translateVal, setTranslateVal] = useState(0)
    const moveSlideTrack = (direction: string) => {

        if (direction === 'previous') {
            setTranslateVal(translateVal - 1)
        } else {
            if (translateVal === 50) {
                setTranslateVal(0)

            } else {
                setTranslateVal(translateVal + 1)
            }
        }
    }

    useEffect(() => {
        if (slideTrack.current && currentVer.current) {
            slideTrack.current.style.transform = `translateX(-${translateVal * 18}%)`


            // slideTrack.current.style.animation = 'scaleIn 1s linear'
            slideTrack.current.style.transitionDuration = '1s'
            console.log(slideTrack.current)
        }
    }, [translateVal])
    return (

        <section className='bg-blacktext-white flex flex-col overflow-hidden relative gap-16 px-24 bg-[#E7E7E0] py-[10vh]'>
                            <h2 id='card' className='font-semibold mb-10 text-[6vw] lg:text-[2vw] text-center'>Recent projects</h2>

            {/* <button className='bg-red-500'>
                Hello
            </button> */}
            {/* <button className={`${translateVal === 0 ? 'visible' : 'visible'} text-7xl font-extrabold previous-arrow-btn cursor-pointer animate-pulse`} disabled={translateVal === 0 ? true : false} onClick={() => moveSlideTrack('previous')}>
            {`<`}
            // </button> */}
   
            <div className='container'>
                <article className="flex flex-col container items-center gap-8" ref={slideTrack}>
                    {
                        projects.map((project, index) => {
                            // const { id, name, description, languagesUsed, liveLink, repoLink, className } = project
                            return (
                                <ProjectCard
                                    key={index}
                                    project={project}
                                    refProp={index+1===translateVal ? currentVer : nonVal}
                                    />
                            )
                        })
                    }
                </article>
            </div>
          
        </section>
        // <section id='projects' className='bg-[#f9f9f9] py-[10vh]'>
        //     <div className='flex flex-col items-center justify-center'>
        //         <h2 id='card' className='font-semibold mb-10 text-[6vw] lg:text-[2vw] text-center'>Recent projects</h2>

        //         <div className='flex gap-4'>
        //             <button className={`${translateVal === 0 ? 'invisible' : 'visible'} previous-arrow-btn cursor-pointer animate-pulse`} disabled={translateVal === 0 ? true : false} onClick={() => moveSlideTrack('previous')}>
        //                 <Image src="/left-arrow.svg" alt="Vercel Logo" layout="intrinsic" width="100" height="100" />
        //             </button>
        //             <div className='flex flex-col gap-4 w-full whitespace-normal overflow-hidden'>

        //                 <article className="flex bg-red-500 gap-8" ref={slideTrack}>
        //                     {
        //                         projects.map((project, index) => {
        //                             // const { id, name, description, languagesUsed, liveLink, repoLink, className } = project
        //                             return (
        //                                 <ProjectCard
        //                                     key={index}
        //                                     project={project} />
        //                             )
        //                         })
        //                     }
        //                 </article>

        //                 <div className='flex gap-4 justify-center'>
        //                     <button className={`${translateVal === 0 ? 'invisible' : 'visible'} previous-arrow-btn cursor-pointer animate-pulse`} disabled={translateVal === 0 ? true : false} onClick={() => moveSlideTrack('previous')}>
        //                         <Image src="/left-arrow.svg" alt="Vercel Logo" layout="intrinsic" width="100" height="100" />
        //                     </button>
        //                     <button className={`${translateVal === 7 ? 'invisible' : 'visible'} next-arrow-btn cursor-pointer animate-pulse`} onClick={() => moveSlideTrack('next')}>
        //                         <Image src="/right-arrow.svg" alt="Vercel Logo" layout="intrinsic" width="100" height="100" />
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>

        //         {/* <div className='flex flex-col gap-4 justify-center items-center'>
        //                 <div className='overflow-hidden py-4 w-full'>
        //                     <article className="whitespace-nowrap" ref={slideTrack}>
        //                         {
        //                             projects.map((project, index) => {
        //                                 // const { id, name, description, languagesUsed, liveLink, repoLink, className } = project
        //                                 return (
        //                                     <ProjectCard
        //                                         key={index}
        //                                         project={project} />
        //                                 )
        //                             })
        //                         }
        //                     </article>
        //                 </div>
        //                 <div className='flex gap-4'>
        //                     <button className={`${translateVal === 0 ? 'invisible' : 'visible'} previous-arrow-btn cursor-pointer animate-pulse`} disabled={translateVal === 0 ? true : false} onClick={() => moveSlideTrack('previous')}>
        //                         <Image src="/left-arrow.svg" alt="Vercel Logo" layout="intrinsic" width="100" height="100" />
        //                     </button>
        //                     <button className={`${translateVal === 7 ? 'invisible' : 'visible'} next-arrow-btn cursor-pointer animate-pulse`} onClick={() => moveSlideTrack('next')}>
        //                         <Image src="/right-arrow.svg" alt="Vercel Logo" layout="intrinsic" width="100" height="100" />
        //                     </button>
        //                 </div>
        //             </div> */}




        //         {/* <div className='flex container flex-col max-w-lg gap-12 lg:gap-y-16'>
        //             {
        //                 projects.map((project, index) => {
        //                     // const { id, name, description, languagesUsed, liveLink, repoLink, className } = project
        //                     return (

        //                         <ProjectCard
        //                             key={index}
        //                             project={project} />
        //                     )
        //                 })
        //             }
        //         </div> */}
        //     </div>
        // </section>
    );
}
export default Projects;