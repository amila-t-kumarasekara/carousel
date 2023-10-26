import React , {useState } from 'react'
import Carousel from '../../components/Carousel/Carousel'

export default function LandingPage() {

  const [slides , setSlides] = useState(4);
  const [infinite , setInfinite] = useState(true);

  return (
    <>
      <div className='bg-black'>
        <div className='container mx-auto py-10'>
          <div className='flex gap-4 items-center justify-center'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => {
              setSlides(1);
              setInfinite(false);
              }}>
              Slide 1
            </button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => {
              setSlides(4);
              setInfinite(true);
              }}>
              Slide 4
            </button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => {
              setSlides(10);
              setInfinite(false);
              }}>
              Slide 10
            </button>
          </div>
        </div>
      </div>
      <Carousel slides={slides} infinite={infinite} />
    </>
  )
}
