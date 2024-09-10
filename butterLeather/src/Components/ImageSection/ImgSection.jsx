import React from 'react'
import WorkWithUs from '../WorkWithUs/WorkWithUs'

const ImgSection = () => {
  return (
    <div className='w-[100%] bg-[#000000] font-[inter] px-[20px] md:px-[100px] py-[120px] gap-[30px] flex flex-col justify-center items-center '>
        <div className='flex flex-col justify-center items-center gap-[12px] w-[100%]'>
        <WorkWithUs name={"Work With Us"}/>
         <h2 className='text-[35px] md:text-[50px] text-white'>Work With Butler Leather</h2>
         
        </div>
        <div className='flex flex-col justify-center items-center gap-[12px] lg:w-[60%] mx-auto'>
             <p className='text-[24px] text-white lg:text-center '>Bring your designs to life with Butler Leather’s Prototyping services for private labels. <br/> This step is crucial to developing a new bag & accessories collection before making a production order.</p>
        <button className='px-[25px] py-[12px] font-bold rounded-[60px] border-[#FFFFFF] border-2 text-white mt-[10px]'>Know More</button>
        </div>
       

    </div>
  )
}

export default ImgSection