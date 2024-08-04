import Procard from "./Resuable/Procard";
import Img4 from  "/ImageForHome/bgimage.jpeg";
import Gw from "/Project/Gw.png"
import Port from "/Project/Portfolio.png"
import ama from "/ImgForAboutMe/Amazon.jpeg"
function Project(){
    return( 
        <>

 <div className=" lg:w-[94.8rem]   md:w-[99rem] w-[80rem] md:pt-[10rem] pt-[20rem] space-x-5 p-12">
    <div className=" text-center text-white font-cinzel text-5xl font-bold pb-8">Project</div>
<div class="card-group" >
    {/* 1st */}
     <Procard 
     item1={"Amazon Clone"}
     item2={"I have used 2 languages in this HTML & CSS"}
     item3={"I have used VS Code compiler for coding. I have learned this from APNA COLLEGE YouTube channel. I have completed this project in 6-7 days because I faced many difficulties as it was my first project."}
     item4={ama}
     ></Procard>
     {/* 2nd */}
      <Procard 
     item1={"GW Website"}
     item2={"I have used React vite and Tailwind Css"}
     item5={"Link:"}
     item3={"My Second project is my clothing Brand frontend website.This project is my Personal website of my own Brand of clothing I have done this project with my one friend she is also my Business Partner."}
     item4={Gw}
     ></Procard>
     {/* 3rd */}
      <Procard 
     item1={"My Portfolio"}
     item2={"I have used React Vite,Tailwind Css, Bootstrap Link:"}
     item3={"My Third project is Portfolio Website. I have used REACT VITE framework and I have used VS Code compiler for coding. I have completed this project in 4-5 days. "}
     item4={Port}
     ></Procard>
  
  </div>
</div>
        </>
    )
}
export default Project