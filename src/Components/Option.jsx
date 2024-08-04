import { Link } from "react-router-dom";

function Option() {
  return (
    <div className={` bg-gray-900 h-[30rem] w-[80rem] mt-[4rem]  font-bold text-5xl text-white pt-[3rem] space-y-10 pl-[3rem] md:hidden`}>
      <p><Link to={"/Home"}>HOME</Link></p>
      <p><Link to={"/about"}>ABOUT</Link></p>
      <p><Link to={"/Education"}>EDUCATION</Link></p>
      <p><Link to={"/Project"}>Project</Link></p>
    </div>
  );
}

export default Option;
