import React from 'react'
import ManImg from '../../assets/suppliers.png'
import WorkWithUs from '../WorkWithUs/WorkWithUs.jsx'
const Manufacturing = () => {
  return (
    <div className={`w-[100%] h-[100vh] bg-cover items-center flex text-white font-[Roboto]`} style={{background:`url(${ManImg}) `}}>
        <div className='text-white w-[95%] md:w-[80%]  lg:w-[70%] mx-auto flex flex-col gap-[20px] items-start md:items-center font-[Roboto] '>

           <WorkWithUs name={"Ethical & Sustainable Manufacturing"} />
           <h2 className='text-[40px]'>Ethical & Sustainable Manufacturing</h2>
           <p>At Butler Leather Goods Factory, sustainable manufacturing is at the core of all our operations and it starts right at the procurement stage of raw materials. We strive to create ethical products using economically sound processes, minimizing the negative environmental impacts on society, while conserving energy and natural resources.</p>
           <button className='px-[25px] py-[12px] font-bold rounded-[60px] border-white border-2'>Know More</button>

        </div>


    </div>
  )
}

export default Manufacturing