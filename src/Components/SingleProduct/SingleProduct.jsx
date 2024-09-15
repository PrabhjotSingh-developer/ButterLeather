import React from 'react'
// import shoesImg from '../../assets/shoes.png'
const SingleProduct = ({name,imgSource}) => {
  return (
    <div className='h-[540px] bg-[#FAFAFA] rounded-[20px] flex flex-col  pt-[10px] px-[30px]'>
         <div className='bg-white py-[6px] px-[12px] gap-[6px] flex items-center w-[fit-content] font-[Roboto] text-[19px] font-[700] rounded-[40px] '>
              <div className='w-[9px] h-[9px] rounded-full bg-[#A8894D]'></div>
              <p>{name}</p>
         </div>
         <div className="img mt-[100px] w-[100%] justify-center items-center">
             <img src={imgSource} alt=""  className='w-auto mx-auto'/>
         </div>
    </div>
  )
}

export default SingleProduct