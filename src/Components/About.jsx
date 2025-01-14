import about from "../assets/about.png"
const About = () => {
  return (
    <div className="w-full pb-4">
        <h2 className="text-4xl text-center my-24 py-4 lg:text-5xl">ABOUT<span className="text-gray-500 text-4xl lg:text-5xl"> ME</span></h2>
        <div className="flex flex-wrap">
            <div className="flex w-full lg:w-1/2 p-8">
             <div className="flex justify-center w-full">
                <img src = {about} alt="about" className="rounded-2xl h-5/6"></img>
             </div>
            </div>

            <div className="flex w-full lg:w-1/2">
               <div className="flex justify-center lg:justify-start">
                <p className="my-2 py-8 max-w-xl leading-relaxed">I am a proficient Full Stack Developer with expertise in a wide range of technologies, including ReactJS, NodeJS, NextJS, TailwindCSS, and MongoDB. My hands-on experience is highlighted by the successful development and deployment of a live working project named <span className="text-2xl  bg-gradient-to-r from-red-400 via-slate-500 to-purple-500 text-transparent bg-clip-text font-semibold">7 Grounds </span> where I utilized my full-stack development skills to create a seamless and impactful application. I am passionate about building scalable, efficient, and user-centric solutions. My comprehensive understanding of both front-end and back-end development enables me to take on complex challenges, delivering high-quality results that exceed expectations. I am eager to contribute my technical knowledge and project experience to drive innovation and success in any development team</p>
               </div>
            </div>

        </div>
    </div>
  )
}

export default About;