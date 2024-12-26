import React from 'react'
import Background from '../../images/background.jpg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='min-h-screen relative -z-10 hero bg-co grayscale flex flex-col pl-8 justify-center text-gray-300'>
        <h1 className='text-[8rem] font-semibold w-1/ text-wrap'>
            Lorem ipsum
        </h1>
        <p className='w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aperiam quam omnis voluptates. A sit expedita ipsam mollitia, similique eum. Quas labore, culpa aliquid assumenda, fuga illum dolorum rerum saepe, ea aperiam necessitatibus. Accusamus id tenetur eius earum! Laudantium numquam impedit, veritatis commodi provident, corporis porro et ullam, iusto deserunt eveniet repellendus laborum quaerat adipisci beatae quia! Beatae, sapiente cumque!</p>
        
    </div>
  )
}

export default Hero