import React, { useState, useEffect } from 'react';
import Me from "/ImageForHome/Rocket.png";

function Middle() {
  const [rotate, setRotate] = useState(true);

  useEffect(() => {
    // Remove the rotation animation after 1 complete rotation
    const timer = setTimeout(() => {
      setRotate(false);
    }, 1000); // 1000ms = 1 second, adjust as needed

    return () => clearTimeout(timer);
  }, []); 

  return (
    <>
     {/* <div className='md:text-[12rem] text-[8rem] text-white absolute mt-60 opacity-10 ml-36'>HARSHIT HERE</div> */}
      <div className="absolute mt-[11rem] ml-16 flex lg:w-[80rem]   md:w-[90rem] w-[71rem] h-[50rem] overflow-x-hidden"  style={{ zIndex: 1 }}>
        <div>
          {/* <div className="text-black text-3xl font-bold rounded-3xl border-[0.2rem] p-2 bg-[#C0C0C0] w-[25rem]">Welcome to my Portfolio</div> */}
<h1 className="font-harshit text-5xl text-white font-bold mt-8 relative w-[max-content] typing-animation text-shadow-2xl shadow-white" style={{ wordSpacing: '1rem' }}>
  Hii! I am Harshit Frontend <br />Developer..
</h1>
          <p className=" font-roboto text-wrap w-[40rem] text-slate-500 mt-10 font-bold">"I'm someone who's always really excited and full of energy. I put all my focus and effort into whatever I'm doing. I love sports and being active, and I enjoy coming up with new ideas and being creative. Overall, I'm a hardworking and enthusiastic person who likes to try new things and work with others to get stuff done."</p>
        </div>
        <div>
          <img
            src={Me}
            className={`lg:h-[30rem] md:h-[25rem] mt-[-3rem] mr-[10rem] lg:ml-[13rem] md:ml-[11rem] ${rotate ? 'animate-spin' : 'transition duration-300 ease-in-out transform hover:scale-110'}`}
            alt="Your image"
          />
        </div>
      </div>
    </>
  );
}

export default Middle;

