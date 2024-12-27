import React from 'react'
import Background from '../../images/background.jpg';
import HeroImage from '../../assets/hero-image.jpg'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='grid md:grid-cols-2 items-center justify-center hero relative -z-10'>
      <div className='min-h-screen relative -z-10  flex flex-col px-8 justify-center'>
        <h1 className='text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-semibold text-wrap leading-none md:leading-normal text-white'>
          Your Financial Digest
        </h1>
        <p className='text-sm md:text-xl lg:text-sm xl:text-lg mt-8 rounded-xl text-gray-300'>Xponent Media stands as a beacon for insightful and reliable financial information. We are dedicated to empowering individuals and businesses by delivering clarity in a world of complexities. With a commitment to integrity and innovation, we transform financial data into actionable insights. Whether you're seeking to grow, protect, or manage your assets, Xponent Media ensures you have the knowledge and tools to navigate confidently in an ever-evolving financial landscape.</p>

      </div>

      <img src={HeroImage} alt="" className='rounded-xl hidden md:block border-4 m-[auto] w-3/5 object- border-gray-300' />
      
    </div>
  )
}

export default Hero