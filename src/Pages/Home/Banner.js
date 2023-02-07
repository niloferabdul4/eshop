import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { BannerContainer,BannerImage } from './style';
const Banner = () => {
    return (
        <BannerContainer>
            <BannerImage>
            <Carousel   autoPlay
                        infiniteLoop
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        interval={5000}
                        
             >
                    <div> 
                        <img loading='lazy' src='https://m.media-amazon.com/images/I/61D9533FtUL._SX1500_.jpg'  alt=''  />
                    </div>          
                        
                    <div>
                        <img loading='lazy' src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg'  alt='' />
                    </div>
                    
                    <div>
                       <img loading='lazy' src='https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg'  alt=''   />
                    </div>
                    
                    <div>
                       <img loading='lazy'  src='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71tIrZqybrL._SX3000_.jpg' alt=''  />
                    </div>
            </Carousel>        
             </BannerImage>
        </BannerContainer>
    );
}

export default Banner;
