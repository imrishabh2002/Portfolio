import { FaReact } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";


const Technologies = () => {
  return (
    <div className="pb-24">
        <h2 className="text-4xl lg:text-5xl text-center my-24">TECHNOLOGIES</h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="rounded-2xl border-neutral-50 border-2 p-4 bg-black ">
                <FaReact className="text-6xl text-cyan-400"/>
            </div>

            <div className="rounded-2xl border-teal-50 border-2 p-4 bg-black">
                <RiNodejsLine className="text-6xl text-green-500"/>
            </div>

            <div className="rounded-2xl border-teal-50 border-2 p-4 bg-black">
                <RiTailwindCssFill className="text-6xl text-white"/>
            </div>

            <div className="rounded-2xl border-teal-50 border-2 p-4 bg-black">
                <RiNextjsLine className="text-6xl text-red-700"/>
            </div>

            <div className="rounded-2xl border-teal-50 border-2 p-4 bg-black">
                <BiLogoPostgresql className="text-6xl text-blue-600 "/>
            </div>

            <div className="rounded-2xl border-teal-50 border-2 p-4 bg-black">
                <SiRedux className="text-6xl text-violet-500 "/>
            </div>

        </div>
    </div>
  )
}

export default Technologies