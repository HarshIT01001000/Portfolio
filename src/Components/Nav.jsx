import { FaInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { RiMenu3Line } from "react-icons/ri";
import { AiFillFacebook } from "react-icons/ai";
import { useState } from "react";
import Option from "./Option";
import { Link } from "react-router-dom";

function Nav() { 
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  }
  return (
    <>
    <div className="flex justify-between absolute lg:w-[94.8rem]   md:w-[99rem] w-[80rem] h-[3rem] bg-[#C0C0C0] overflow-x-hidden font-cinzel items-center">

         <h1 className="text-black text-xl md:text-3xl  font-bold mt-2 ml-3">H-RAI</h1>

         <div className="sm:block hidden mr-8">
    <div className="text-black text-xl flex space-x-[4rem]">
        <p className="mt-3 hover:bg-white  hover:text-black h-7 w-[4.3rem] font-bold transition duration-300 ease-in-out transform hover:scale-110">
            <Link className="text-black no-underline" to={"/"}>HOME</Link>
        </p>
        <p className="mt-3 hover:bg-white hover:text-black h-7 w-[4.8rem] font-bold transition duration-300 ease-in-out transform hover:scale-110">
            <Link className="text-black no-underline" to={"/about"}>ABOUT</Link>
        </p>
        <p className="mt-3 hover:bg-white hover:text-black h-7 w-30 font-bold transition duration-300 ease-in-out transform hover:scale-110">
            <Link className="text-black no-underline" to={"/Education"}>EDUCATION</Link>
        </p>
        <p className="mt-3 hover:bg-white hover:text-black h-7 w-30 font-bold transition duration-300 ease-in-out transform hover:scale-110">
            <Link className="text-black no-underline" to={"/Project"}>PROJECT</Link>
        </p>

        <div className="flex space-x-2 mt-1">
            <Link to={"https://www.instagram.com/harshitrai01?igsh=a2RnZjZjN3lmZjRl"} className="   items-center transition duration-300 ease-in-out transform hover:scale-110">
                <FaInstagram className="m-[0.7rem] text-4xl mt-[0.5rem] text-pink-700"/>
            </Link>
            <Link to={"https://www.linkedin.com/in/harshit-rai-038261255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} className=" items-center transition duration-300 ease-in-out transform hover:scale-110">
                <BsLinkedin className="m-[0.7rem] text-3xl text-blue-600"/>
            </Link>
            <Link to={""} className=" items-center transition duration-300 ease-in-out transform hover:scale-110">
                <AiFillFacebook className="m-[0.7rem] text-4xl text-blue-600 mt-[0.5rem]"/>
            </Link>
        </div>
    </div>
</div>


      <div className="text-5xl text-white mt-3 sm:hidden fixed top-0 right-0 " onClick={toggleMenu}><RiMenu3Line /></div>

       {
        isOpen && <Option></Option>
       }
    </div>
    
    </>
  
  );
}

export default Nav;