export interface ProjectList {
    id: number,
    name: string,
    description: string,
    languagesUsed: String[],
    liveLink: string,
    repoLink?: string,
    className: string
}

const projectListData:ProjectList[] = [
    {
        id:1,
        name:'EnglishEasy',
        description:'I designed and developed the website of EnglishEasy, an international English language teaching agency based in Germany.',
        languagesUsed:["Gatsby.js", "SCSS"],
        liveLink:"https://english-easy.net/",
        className:"card-1"
    },
    {
        id:2,
        name:"Recrowdly",
        description:"A landing page for an animation studio focused on helping businesses create stories that resonate with customers.",
        languagesUsed:["Next.js", "Typescript", "SCSS"],
        liveLink:"https://recrowdly-redesign.vercel.app/",
        repoLink:"https://github.com/PoseyXyz/recrowdly",
        className:"card-2"
    },
    {
        id:3,
        name:"Play.rus",
        description:"A web-based video game discovery platform equipped with detailed information on over 100, 000 games and a library where players can keep track of their favourite video games. The application is powered by the RAWG gaming API and database.",
        languagesUsed:["React", "TailwindCSS", "Context API"],
        liveLink:"https://playrus.netlify.app/",
        repoLink:"https://github.com/PoseyXyz/game/",
        className:"card-3"
    },
    {
        id:4,
        name:"Gloreya",
        description:"An e-commerce application for a fast food restaurant",
        languagesUsed:["React", "TailwindCSS", "ContextAPI"],
        liveLink:"https://gloreya-restaurant.netlify.app/",
        repoLink:"https://github.com/PoseyXyz/gloreya",
        className:"card-4"
    },
    {
        id:5,
        name:"Proofers",
        description:"A website for an online research and proofreading agency.",
        languagesUsed:["Gatsby.js", "TailwindCSS"],
        liveLink:"https://proofers.netlify.app/",
        className:"card-5"
    },
    {
        id:6,
        name:"MediAid",
        description:"A fullstack web application built for the purpose of online self-diagnosis. By means of the Javascript web speeach API, the application also features a read-aloud functionality to assist users with special needs.",
        languagesUsed:["React", "SCSS", "Node.js", "Express", "MongoDB"],
        liveLink:"https://poseyxyz.github.io/mediAid/#/",
        className:"card-6"
    }
]

export default projectListData