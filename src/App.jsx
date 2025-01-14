import About from "./Components/About"
import Certifications from "./Components/Certifications"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Technologies from "./Components/Technologies"

const App = () => {
  return (
  <div className="overflow-x-hidden selection:text-violet-700 selection:bg-white text-white">
    <div className="fixed top-0 -z-10 h-full w-full">
     <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    </div>

     <div className="mx-auto px-14 container lg:px-32">
      <Header/>
      <Hero/>
      <About/>
      <Technologies/>
      <Certifications/>
     </div>
  </div>
  )
}

export default App