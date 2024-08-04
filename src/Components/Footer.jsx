
function Footer(){
    return(
        <>
        <div className=" bg-black lg:w-[94.9rem] md:w-[94.9rem] w-[75rem] h-[30rem] overflow-x-hidden">
             {/* white div */}
             <div className=" bg-[#C0C0C0] text-black text-center text-5xl rounded-3xl font-bold md:w-[60rem] w-[40rem] md:h-[29rem] h-[25rem] shadow-lg shadow-gray-500 items-center ml-64"> <h1 className="">Skills</h1>
                 
                  <div className="md:flex justify-evenly mt-24 flex  ">

                  {/* border-solid border-black border-l-t border-t border-r-t animate-spin animate-spin-slow */}

                       <div className=" md:w-60 w-40 md:h-60 h-40 bg-white rounded-full border-[1rem] text-3xl border-black text-black">Skills</div>
                       <div className=" md:w-60 w-40 md:h-60 h-40 bg-white rounded-full  border-[1rem] text-3xl border-black text-black">Projects</div>
                       <div className=" md:w-60 w-40 md:h-60 h-40 bg-white rounded-full border-[1rem] text-3xl border-black text-black">Education</div>

                 </div>
            </div>
        </div>
        
        </>
    )
}
export default Footer
  