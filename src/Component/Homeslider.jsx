import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Homeslider = () => {
    const settings = {
        dots: true,
        infinity: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    }

    return (
        
           <div className="w-full">
            <Slider {...settings} className='bg-green-700 text-white'>
                <div className='flex items-center justify-center h-64'>
                    <h1 className="text-4xl font-bold">Slide 1</h1>
                </div>
                <div className='flex items-center justify-center h-64'>
                    <h1 className="text-4xl font-bold">Slide 2</h1>
                </div>
                <div className='flex items-center justify-center h-64'>
                    <h1 className="text-4xl font-bold">Slide 3</h1>
                </div>
            </Slider>
        </div>

       
    )
}

export default Homeslider
