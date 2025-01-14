import certificate1 from "../assets/web.jpg"
import certificate2 from "../assets/react.png"
import certificate3 from "../assets/android.jpg"

const Certifications = () => {
    const certificates = [certificate1, certificate2, certificate3];

  return (
    <div className="pb-24">
     <h1 className="text-4xl lg:text-5xl text-center my-24">CERTIFICATIONS</h1>
     <div className="flex h-full justify-start items-center overflow-x-scroll gap-16 no-scrollbar">

        {certificates.map((certificate,index) => (

            <div className="border border-gray-100 p-2 w-[65%] shrink-0 h-[600px]" key={index}>
              <img src = {certificate} className="h-full w-full"></img>
            </div>

        ) )}

     </div>
    </div>
  )
}

export default Certifications;

