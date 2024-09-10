import React, { useState } from 'react'
import logo from '../../assets/loginLight.png'
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "../../index.css"
import { RxCross2 } from "react-icons/rx";
const data = [
    {
        name: "Home",
        path: "",
        id: "home"
    },
    {
        name: "Our Company",
        path: "",
        id: ""
    },
    {
        name: "Selecting Suppliers",
        path: "",
        id: ""
    },
    {
        name: "Market Research",
        path: "",
        id: ""
    },
    {
        name: "Ethical and Sustainable Manufacturing",
        path: "",
        id: ""
    },
    {
        name: "Products",
        path: "",
        id: ""
    },
    {
        name: "Contact Us",
        path: "",
        id: ""
    },

]
const Navbar = ({toggleMenubar,isMenubar}) => {
   
 
    return (
        <nav className='flex bg-[#000000] py-[20px] px-[20px] sm:px-[60px] lg:px-[20px]  xxl:px-[120px] items-center justify-between xl:static relative font-[Roboto] w-[100%] '>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="links ">
                <ul className={`flex gap-5 xl:gap-5 xl:flex-row flex-col absolute xl:static bg-[#000000] w-[100%] left-0 sm:items-center px-5 py-[20px] top-[100%] h-[100vh] lg:h-[auto] font-[Roboto]  font-normal z-[5]  ${isMenubar ? "left-0" : "left-[-100%] xl:left-0"} `} style={{ transition: ".2s linear" }}>
                    {data.map((item) => {

                        return <li className='text-white text-[16px] leading-[18px]' key={item.id}>{item.name}</li>
                    })

                    }
                </ul>
            </div>
            <div className='searchBar  border-[#343434] border-2  h-[fit-content] items-center py-[10px] px-[20px] gap-[10px] rounded-[60px] hidden sm:flex xl:hidden xxl:flex w-[40%] justify-between items-center'>
                <input type="text" placeholder='Search' id="" className='bg-transparent  border-none outline-none text-white ' />
                <FaSearch className='text-white' />
            </div>
            <div className="menuBtn xl:hidden">
                { isMenubar ? <RxCross2 className='text-white' onClick={toggleMenubar }/>:<GiHamburgerMenu className='text-white' onClick={() =>toggleMenubar()} />

                }
                
            </div>
        </nav>
    )
}

export default Navbar