import Img3 from "/ImgForAboutMe/Myimg.jpeg";
import Gw from "/Project/Gw.png"


function AboutMe() {
  return (
    <>
      <div className="lg:w-[94.9rem] md:w-[94.9rem] w-[75rem] pt-[10rem] flex justify-evenly ">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" className="ml-9">
  <ol class="carousel-indicators" className="w-[20rem] ">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={Img3} alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Gw} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
             
                
        

        <div className="flex flex-col mr-[5rem] ml-12">
          <h1 className="text-white mt-4 ml-4 md:mt-[-19rem] md:ml-[20rem] text-5xl font-bold font-cinzel">
            About Me
          </h1>
          <p className="text-white mt-4 md:mt-[-19rem]  font-bold  text-xl font-quu">
            My self Harshit Rai. I am from Badlapur currently pursuing BSC-IT
            from Vedanta college and I completed my HSC from New English High
            School-(Ulhasnagar) and I completed my SSC from Holy Family Convent
            school-(Badlapur). I have 3+ Months Experience in Business
            Development in STUDENT ALLIANCE Firm. And I also have 1+ Year
            Experience in (Operation Department, Student Support Department, and
            IT Department) in PAT (Placement Assistance Team) of my College
            Vedanta college where I am studying.
          </p>
          <p className="text-white mt-4 md:mt-4  font-bold text-xl font-quu">
            In Extra curriculum Activities, I have Taken A WORKSHOP on AI Tools
            with certification with my Team. I have also Participated in 3D
            Model Competition in First Year and I Created a 3D Model of
            Microprocessor.
          </p>
          {/* <p className="text-white text-5xl mt-8 ml-8 font-bold text-center">...</p> */}
        </div>
      </div>
    </>
  );
}
export default AboutMe;
