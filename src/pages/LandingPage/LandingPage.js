import React , {useState } from 'react'
import Carousel from '../../components/Carousel/Carousel'

export default function LandingPage() {

  const [slides , setSlides] = useState(4);
  const [infinite , setInfinite] = useState(true);

  return (
    <>
    <Carousel slides={slides} infinite={infinite} />
    </>
  )
}
