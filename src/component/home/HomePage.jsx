import React from 'react'
import { useState } from 'react';
const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  const images = [
    {
        src: 'https://media.gq-magazine.co.uk/photos/5fc8a778ea31983340383042/16:9/w_2560%2Cc_limit/03112020_Drake_02.jpg',
        alt: 'Carousel 1',
    },
    {
        src: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c20f0e63226021.61cb9889bc541.png',
        alt: 'Carousel 2',
    },
    {
        src: 'https://cdn.shopify.com/s/files/1/0270/5326/0848/files/Image_5_copy_1e89c4e1-00f3-4c8d-8fb5-c16106582ade_1024x1024.jpg?v=1674052340',
        alt: 'Carousel 3',
    },
    {
      src: 'https://imboldn.com/wp-content/uploads/2022/08/Stu%CC%88ssy-x-Nike-Air-Max-2013-Collection-Main.jpg',
      alt: 'Carousel 3',
    },
  ];

  return (
    <>
    <div style={{height: 740}}>
              <div className="carousel relative">
        <div className="relative h-full md:h-96" style={{height: 740}}>
            {images.map((image, index) => (
            <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`absolute w-full h-full ${
                    index === activeIndex ? 'opacity-100' : 'opacity-0'
                } duration-1000 ease-in-out`}
                 style={{objectFit:'cover'}}/>
            ))}
            </div>
            <button
            type="button"
            onClick={handlePrevClick}
            className="absolute top-1/2  left-0 z-10 flex items-center justify-center w-8 h-8 text-white bg-transparent rounded-full shadow-md md:w-10 md:h-10 -translate-y-1/2 focus:outline-none"
        >
            <svg
            className="w-8 h-8 fill-current md:w-7 md:h-7"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19l-7-7 7-7"></path>
            </svg>
        </button>
        <button
            type="button"
            onClick={handleNextClick}
            className="absolute top-1/2  right-0 z-10 flex items-center justify-center w-16 h-16 text-white bg-transparent rounded-full shadow-md md:w-10 md:h-10 -translate-y-1/2 focus:outline-none"
        >
            <svg
            className="w-8 h-8 fill-current md:w-7 md:h-7"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M9 5l7 7-7 7"></path>
            </svg>
        </button>
        </div>
    </div>
    <div>
      <h1 className='text-3xl text-center p-8 underline'>COLLABS</h1>
    </div>
    <div className='grid grid-cols-3 p-5 '  >
      <div className='m-2 cursor-pointer'  >
        < >
        <img src="https://www.sneakers-actus.fr/wp-content/uploads/2022/05/Nike-Air-Max-1-x-Travis-Scott-Cactus-Jack-Wheat-Lemon-Drop-DO9392-701.jpg" alt="" className='w-full h-full' style={{objectFit: 'cover'}}  />
        </>
        
        <h1 className='ts'>NIKE X TRAVIS SCOTT</h1>
      </div>
      <div className='m-2 cursor-pointer'>
        <img src="https://footwearnews.com/wp-content/uploads/2021/11/a-ma-maniere-air-jordan-1-5.jpg?w=1024" alt="" className='w-full h-full' style={{objectFit: 'cover'}}/>
        <h1 className='ama'>NIKE X A MA MANIERE </h1>
      </div>
      <div className='m-2 cursor-pointer'>
        <img src="https://pbs.twimg.com/media/E33OiOqWYAAfe-n.jpg" alt="" className='w-full h-full' style={{objectFit: 'cover'}} />
        <h1 className='laylow'>NIKE x LAYLOW</h1>
      </div>
    </div>
    <div className='grid grid-cols-3 p-5 '  >
      <div className='m-2 cursor-pointer'  >
        < >
        <img src="https://media.gqmagazine.fr/photos/63c7d5c64e33405e28ea5fdd/master/pass/NIKE.jpg" alt="" className='w-full h-full'  />
        </>
        
        <h1 className='ts'>NIKE X CORTEIZ</h1>
      </div>
      <div className='m-2 cursor-pointer'>
        <img src="https://static.nike.com/a/images/w_1536,c_limit,f_auto/ee91c0fa-1da3-4817-994b-f3e027331b37/date-de-sortie-de-la-collection-de-v%C3%AAtements-nocta-golf.jpg" alt="" className='w-full h-full' style={{objectFit: 'cover'}}/>
        <h1 className='ama'>NIKE X NOCTA </h1>
      </div>
      <div className='m-2 cursor-pointer'>
        <img src="https://www.booska-p.com/wp-content/uploads/2021/11/Dr-7IumWkAEzUgT.jpg-large.jpg" alt="" className='w-full h-full' style={{objectFit: 'cover'}} />
        <h1 className='laylow'>NIKE x JORDAN</h1>
      </div>
    </div>
    </>
    
  )
}

export default HomePage