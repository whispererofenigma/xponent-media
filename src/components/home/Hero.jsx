import React from 'react'
import Background from '../../images/background.jpg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='min-h-screen relative -z-10 hero bg-co  flex flex-col px-8 justify-center'>
        <h1 className='text-[calc(10px+15vmin)] font-semibold text-wrap leading-none md:leading-normal bg-gradient-to-br from-violet-700 to-sky-400 bg-clip-text text-transparent'>
            Your Finacial Digest
        </h1>
        <p className='text-sm md:w-1/2 md:text-2xl mt-8 rounded-xl text-gray-400'>Lorem ipsum dolor sit amet. Quas labore, culpa aliquid assumenda, fuga illum dolorum rerum saepe, ea aperiam necessitatibus. Accusamus id tenetur eius earum! Laudantium numquam impedit, veritatis commodi provident, corporis porro et ullam, iusto deserunt eveniet repellendus laborum quaerat adipisci beatae quia! Beatae, sapiente cumque!</p>
        
    </div>
  )
}

export default Hero