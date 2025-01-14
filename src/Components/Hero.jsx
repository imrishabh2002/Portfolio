import profile from "../assets/portfolio-image.jpg"
const Hero = () => {
  return (
    <div className="w-full h-auto ">
      <div className="flex flex-wrap">
        <div className="flex flex-col w-full lg:w-1/2  items-center lg:items-start">
         <h1 className="text-6xl pb-8 font-thin tracking-tight lg: mt-16 lg:text-8xl">Rishabh Jangra</h1>
          <span className="text-4xl bg-gradient-to-r from-red-400 via-slate-500 to-purple-500 bg-clip-text text-transparent tracking-tight">Full Stack Developer </span>
         <p className=" tracking-tight font-thin max-w-xl my-2 py-6">Dedicated Full Stack Developer with a passion for creating efficient, scalable, and user-friendly applications. Proficient in both front-end and back-end technologies, I bring a strong problem-solving mindset, attention to detail, and a commitment to delivering high-quality solutions. My resilience, adaptability, and proactive approach make me a reliable team player, ready to contribute meaningfully to innovative projects and exceed expectations.</p> 
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src = {profile} className="rounded-2xl "></img>

          </div>
        </div>


      </div>
    </div>
  )
}

export default Hero;