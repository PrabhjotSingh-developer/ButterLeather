import React from 'react'
import logo from '../../assets/loginLight.png'
import toscroll from '../../assets/toscroll.png'
const usefulLinks = [
    {
        path: "",
        name: "Our Company"
    },
    {
        path: "",
        name: "Selecting Suppliers"
    },
    {
        path: "",
        name: "Market Research"
    },
    {
        path: "",
        name: "Ethical Manufacturing"
    },
    {
        path: "",
        name: "Products"
    },
    {
        path: "",
        name: "Contact Us"
    }

]
const socialMediaLinks = [
    {
        path: "",
        name: "Instagram"
    },
    {
        path: "",
        name: "Twitter"
    },
    {
        path: "",
        name: "Linkedin"
    },
]
const Footer = () => {
    return (
        <footer className='bg-black pt-[100px] pb-[20px] px-[40px] sm:px-[50px] lg:px-[40px] xl:px-[120px] text-white font-[Roboto] w-[100%]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-[100px]'>
                <div className='flex justify-between sm:flex-row flex-col gap-[40px] '>
                    <div className='flex gap-[30px] flex-col'>
                        <img src={logo} alt="" className='w-[130px] ' />
                        <p className='text-[20px] font-normal '>Bring your designs to life with Butler Leather’s Prototyping services for private labels</p>
                        <button className='px-[25px] py-[12px] font-bold rounded-[60px] border-white border-2 w-[fit-content]'>Explore More</button>
                    </div>
                    <div >
                        {/* go to top */}
                        <img src={toscroll} alt="" />
                    </div>
                </div>
                <div className='flex justify-between sm:flex-row flex-col gap-[40px]'>
                    <div className='flex flex-col gap-3 '>
                        {/* use fill links */}
                        <h2 className='text-[28px] font-[500]'>Use Full Links</h2>
                        {
                            usefulLinks.map((item) => (
                                <a>{item.name}</a>
                            ))
                        }

                    </div>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-[28px] font-[500]'>Social Media Links</h2>

                        {
                            socialMediaLinks.map((item) => (
                                <a>{item.name}</a>
                            ))
                        }
                    </div>
                </div>

            </div>
             <hr className='mt-5'/>
             <div className='flex justify-between mt-2 font-[Roboto] md:flex-row flex-col'>
                <div className='flex  sm:gap-2 sm:flex-row flex-col'>
                     <span>Copyrights 2024 All Rights Reserved </span>
                 <span className='sm:visible hidden'>|</span>
                 <span>Policy Terms</span>
                </div>
                <div className='mt-2 sm:mt-0'>
                    <span>Powered By Butler Leather</span>
                </div>
             </div>
        </footer>
    )
}

export default Footer