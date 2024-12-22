import React from 'react'
import img1 from '../../assets/Hero_img/fast-delivery.png'
import img2 from '../../assets/Hero_img/original.png'
import img3 from '../../assets/Hero_img/shield.png'
export const Hero_banner = () => {
  return (
    <div className='my-5 md:my-0 md:mt-20 flex relative z- items-center space-x-3 md:space-x-20 justify-center mx-20'>
        <div className='flex hover:scale-105 duration-300 cursor-pointer bg-white shadow-md ring-1 rounded-md ring-gray-400 px-5 md:px-16 py-2 md:py-3 flex-col text-center justify-center'>
            <img src={img1} alt="" className='w-10 md:w-20 transform translate-x-4'/>
            <h1 className='md:text-xl'>Fast delivery</h1>
        </div> 
        <div className='flex hover:scale-105 duration-300 cursor-pointer bg-white shadow-md ring-1 rounded-md ring-gray-400 px-5 md:px-16 py-2 md:py-3 flex-col text-center justify-center'>
            <img src={img2} alt="" className='w-10 md:w-20 transform translate-x-4'/>
            <h1 className='md:text-xl'>100% original</h1>
        </div>
        <div className='flex hover:scale-105 duration-300 cursor-pointer bg-white shadow-md ring-1 rounded-md ring-gray-400 px-5 md:px-16 py-2 md:py-3 flex-col text-center justify-center'>
            <img src={img3} alt="" className='w-10 md:w-20'/>
            <h1 className='md:text-xl'>100% Safe</h1>
        </div>
    </div>
  )
}
