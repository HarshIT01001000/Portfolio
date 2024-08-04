import Img from '/ImageForHome/Bg.jpg'
function BKImage(){
    return(
    <>
            {/* <div className='lg:w-[80rem]   md:w-[90rem] w-[71rem] md:text-[12rem] text-[8rem] absolute text-white mt-60 opacity-10 ml-36 overflow-x-hidden'>HARSHIT HERE</div> */}

    <div className="lg:w-[94.8rem]   md:w-[90rem] w-[71rem] h-auto overflow-x-hidden" style={{ zIndex: 0 }}>
        <img src={Img} className=''></img>
        </div>

    </>
    )
}
export default BKImage;