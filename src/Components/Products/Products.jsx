import React from 'react'
import WorkWithUs from '../WorkWithUs/WorkWithUs'
import { FaCaretDown,FaCaretLeft, FaCaretRight  } from "react-icons/fa";
import { p1, p2, p3, p4, p5, p6 } from "./index.js"
import SingleProduct from '../SingleProduct/SingleProduct';
const data = [{ name: "Shoes", imgSource: p1 },
{ name: "Jackets", imgSource: p2 },
{ name: "Key Box", imgSource: p3 }, 
{ name: "Bags", imgSource: p4 },
{ name: "Purse", imgSource: p5 },
{ name: "Watches", imgSource: p6 }
]
const Products = () => {
    return (
        <div className=' py-[100px] px-[15px] sm:px-[30px] md:px-[60px] xl:px-[120px]  font-[Roboto]'>
            <div className='flex justify-between sm:items-end sm:flex-row flex-col items-center'>
                <div className="heading">
                    <WorkWithUs name={"Work With Us"}/>
                    <h2 className='text-[50px] font-[700]'>Our Products</h2>
                </div>

                <button className='py-[10px] sm:py-[20px] px-[30px] border-2 border-black flex items-baseline rounded-[60px] gap-[4px] text-[18px] font-[700]'>All Products <FaCaretDown /> </button>

            </div>
            <div className='products sm:grid-cols-2 grid lg:grid-cols-3 md:gap-x-10 md:gap-y-20 gap-y-5 mt-10'>
                  {
                     data.map((item,index)=>{
                        return <SingleProduct name={item.name} imgSource={item.imgSource} key={item.name+index}/>
                     })
                  }
            </div>
             <div className="btns flex gap-[30px] items-center justify-center my-[30px]">
                 <button className='border-2 border-black py-[8px] px-[15px] rounded-[60px]'><FaCaretLeft/></button>
                   <p className='border-2 border-black py-[8px] px-[30px] rounded-[60px]'>1/12</p>
                 <button className='border-2 border-black py-[8px] px-[15px] rounded-[60px]'><FaCaretRight/></button>
             </div>
        </div>
    )
}

export default Products