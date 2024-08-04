
import Img from "/ImageForHome/Education.jpg";
import Img2 from "/ImageForHome/Education2.jpg";
import EdTable from "./Resuable/EdTable";
import Educard from "./Resuable/Educard";
// import clgS from "./ImgForAboutMe/Scollege.jpeg"
function Education(){
    return(




<div className= " lg:w-[94.8rem]   md:w-[99rem] w-[80rem] absolute mt-56 flex justify-center items-center flex-col space-y-12">
  <div className=" font-cinzel font-bold text-4xl text-white">Education</div>
  <Educard
  item1={"Holy family convent school"}
  item2={"2018-19 HSC"}
  item3={"Percentage:81.20%"}
  
  ></Educard>
  <Educard
  item1={"New English high school"}
  item2={"2021-2022 SSc"}
  item3={"Percentage:61.11%"}
  ></Educard>
  <Educard
  item1={"Vedanta College"}
  item2={"2023-2024 Bsc.It Pursuing"}
  item3={"CGP:8.8"}
  ></Educard>
  </div>


    )
}
export default Education