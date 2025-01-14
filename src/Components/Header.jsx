import logo from "../assets/RJ (2).png";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";


const Header = () => {
  return (
   <nav className="w-full flex justify-between pt-5 mb-20">
    <div>
      <img className = "w-12" src= {logo} ></img>
    </div>

    <div className="text-2xl text-white flex gap-4 m-2 items-center ">
        <FaInstagram/>
        <FaGithub/>
        <FaLinkedin/>

    </div>




   </nav>
  )
}

export default Header;