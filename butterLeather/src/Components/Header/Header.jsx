import React from 'react'
import lines from '../../assets/Lines.png'
import { FaInstagramSquare, FaFacebookSquare, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { BiMessageRoundedDots } from "react-icons/bi";
import scroll from '../../assets/Scroller.png'

const Header = () => {
    return (
        <div className=' bg-cover w-[100%] py-[100px] flex justify-center font-[Inter] relative flex-col' style={{ background: `url(${lines})` }}>
            <div className="w-[96%] md:w-[795px] font-[Inter ] mx-auto flex justify-center flex-col items-center gap-[20px] ">
                <h2 className='text-[16px] bg-[#A8894D] leading-[18px] w-[fit-content] px-[16px] py-[8px] rounded-[30px] font-bold'>Butler Leather (INDIA)</h2>
                <h1 className='text-[55px] sm:text-[95px] '>Butler Leather</h1>
                <h3 className='text-[16px] sm:text-[24px] font-semibold text-center'>The Creative Space Enables Our Customers To Collaborate And co-Create Wonderful Products With Us.</h3>

                <div className="flex gap-[16px] font-[Roboto] mt-[5px]">
                    <button className='px-[25px] py-[12px] font-bold rounded-[60px] border-[#000000] border-2'>Know More</button>
                    <button className='px-[25px] py-[12px] font-bold rounded-[60px] border-[#000000] border-2'>Contact Us</button>
                </div>


            </div>
            <div className="flex lg:justify-between w-[100%]  mx-auto lg:items-baseline mt-10 flex-col items-center justify-center lg:flex-row lg:px-[120px] ">
                <div className="  socialLinks flex gap-3  py-[14px] px-[10px]  rounded-[40px] items-center bg-[#A8894D]">
                    <span>Social Links: </span>
                    <FaInstagramSquare className='text-[20px]' />
                    <FaFacebookSquare className='text-[20px]' />
                    <FaLinkedin className='text-[20px]' />
                    <FaYoutube className='text-[20px]' />
                </div>
                <div className="scroller ">
                    <img src={scroll} alt="" />
                </div>
                <div className="socialMedia flex gap-5 mt-4 lg:mt-0">
                    <FaWhatsapp className='w-[50px] h-[50px] rounded-[60px] bg-[#A8894D] p-[10px]' />
                    <BiMessageRoundedDots className='w-[50px] h-[50px] rounded-[60px] bg-[#A8894D] p-[10px]' />
                </div>
            </div>
        </div>
    )
}

export default Header