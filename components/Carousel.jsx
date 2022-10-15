import {Splide,SplideSlide,SplideTrack} from "@splidejs/react-splide"
import Image from "next/image"
import '@splidejs/react-splide/css';
const Carousel = () => {
  return (
    <Splide hasTrack={false} aria-label="My Favorite Images"
    options={{
        rewind: true,
        perPage: 1,
        gap: '1rem',
        pagination: true,
        type: 'loop',
        autoplay: true,
        interval: 3000,
        pauseOnHover: true,
        pauseOnFocus: true,
        resetProgress: true,
        // arrows: false,
    }}
    >
        <SplideTrack>
  <SplideSlide className="flex justify-center">
   <Image src="/1.jpg" alt="Image 1"  height="400" width="800"/>  
  </SplideSlide>
  <SplideSlide className="flex justify-center">
  <Image src="/2.jpg" alt="Image 2" height="400" width="800"/>

  </SplideSlide>
  </SplideTrack>
  <div className="splide__arrows">
    <button className="splide_arrow splide__arrow--prev" 
    >Prev</button>
    <button className="splide_arrow splide__arrow--next" 
    >Next</button>
  </div>
</Splide>
  )
}

export default Carousel