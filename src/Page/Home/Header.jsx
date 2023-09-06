import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const Header = () => {
    return (
        <div className='md:h-[420px] h-full'>
            <Carousel showThumbs={false}>
                <div >
                    <img className='object-cover md:h-[420px] h-full' src="https://media.licdn.com/dms/image/C5612AQFPn-iHrsiLXw/article-cover_image-shrink_600_2000/0/1520104785425?e=2147483647&v=beta&t=xtVH5FQw8cFXZt42qEBeOwdCSzK0XHmbZir2AEtBRPY" />
                    <p className="legend">Legend 1</p>
                </div>
                <div >
                    <img className='object-cover md:h-[420px] h-full' src="https://media.licdn.com/dms/image/C5612AQFPn-iHrsiLXw/article-cover_image-shrink_600_2000/0/1520104785425?e=2147483647&v=beta&t=xtVH5FQw8cFXZt42qEBeOwdCSzK0XHmbZir2AEtBRPY" />
                    <p className="legend">Legend 1</p>
                </div>
                
                
            </Carousel>

        </div>
    )
}

export default Header