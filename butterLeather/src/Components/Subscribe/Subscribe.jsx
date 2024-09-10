import React from 'react'
import WorkWithUs from '../WorkWithUs/WorkWithUs'

const Subscribe = () => {
  return (
    <div className='w-[100%] bg-white my-[30px] text-white'>
         <div className='w-[100%] sm:w-[95%] xl:w-[80%] rounded-[30px] py-[100px] px-[30px] xl:px-[60px] bg-[#5C4921] mx-auto flex items-center justify-between sm:flex-row flex-col'  >
                <div className="content font-[Roboto]">
                     <WorkWithUs name = {"Subscribe To Our Newsletter"}/>
                     <h2 className='text-[40px] font-[700] mt-5'>Subscribe To Our Newsletter</h2>
                </div>
                <div className='lg:bg-white sm:py-[10px] pl-[30px] pr-[5px] rounded-[70px] flex lg:flex-row sm:flex-col flex-row gap-4 sm:bg-transparent bg-white sm:mt-0 mt-7 py-[7px] '>
                     <input type="text" name="" id="" className='border-none outline-none bg-white lg:bg-transparent  text-black sm:py-2 sm:px-5 lg:p-0' placeholder='Enter Your Email'/>
                     <button className='bg-black sm:py-[12px] py-[12px] px-[15px] sm:px-[30px] sm:w-[fit-content] rounded-[60px]'>Subscribe</button>
                </div>
         </div>

    </div>
  )
}

export default Subscribe