import React from 'react'
import WorkWithUs from '../WorkWithUs/WorkWithUs'
import { MdContactPage, MdOutlineContacts } from "react-icons/md";
import { PiClockCountdownLight } from "react-icons/pi";
import { FaCoins } from "react-icons/fa6";
import g1 from '../../assets/ab1.png'
const About = ({ title, img, desc, delivarables, className }) => {
      console.log(delivarables)
     return (
          <div className={`flex px-[20px] md:px-[50px] xl:px-[120px] py-[30px] lg:py-[100px] gap-[60px] xl:gap-[176px] items-center font-[Roboto] w-[100%] ${className} `}>
               <div className='w-full lg:w-auto'>

                    <img src={img} className='h-[100%] w-[100%]' alt="" />
               </div>
               <div className='flex flex-col items-start gap-[20px] lg:w-[50%]'>
                    <WorkWithUs name={title} />
                    <h1 className='text-[30px] font-bold'>Know Us</h1>
                    <p className='text-[20px] text-[#656565]'>{desc}</p>
                    <button className='px-[25px] py-[12px] font-bold rounded-[60px] border-[#000000] border-2'>Know More</button>
                    {delivarables &&
                         <div className='flex flex-col gap-[5px]'>
                              <h3 className='text-[20px] font-bold'>Our Deliverables</h3>
                              <ul className='flex gap-[15px] flex-col'>
                                   <li className='flex gap-[10px] items-center text-[20px] text-[#656565] font-semibold'><span className='w-[30px] h-[30px] bg-[#A8894D] rounded-full flex items-center justify-center text-black '><MdContactPage /></span>Strict Adherence to Specifications</li>
                                   <li className='flex gap-[10px] items-center text-[20px] text-[#656565] font-semibold'><span className='w-[30px] h-[30px] bg-[#A8894D] rounded-full flex items-center justify-center text-black '><MdOutlineContacts /></span>Stringent Quality Controls</li>
                                   <li className='flex gap-[10px] items-center text-[20px] text-[#656565] font-semibold'><span className='w-[30px] h-[30px] bg-[#A8894D] rounded-full flex items-center justify-center text-black '><PiClockCountdownLight /></span>Reliable On-Time Delivery</li>
                                   <li className='flex gap-[10px] items-center text-[20px] text-[#656565] font-semibold'><span className='w-[30px] h-[30px] bg-[#A8894D] rounded-full flex items-center justify-center text-black '><FaCoins /></span>Lowest Factory Direct Prices</li>
                              </ul>
                         </div>
                    }

               </div>

          </div>
     )
}

export default About