import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './index.css'
import layer1 from '../../images/main/Asset1.png'
import layer2 from '../../images/main/Asset2.png'
import layer3 from '../../images/main/Asset3.png'
import layer4 from '../../images/main/Asset4.png'
import layer5 from '../../images/main/Asset5.png'



export default function StartSwiper() {
        return (
            <>
            
                <Carousel 
                width={'100vw'}
               
                dynamicHeight={true}
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={true}
                    showArrows={false}
                    swipeScrollTolerance={5}
                    preventMovementUntilSwipeScrollTolerance={false}

                    // renderIndicator={() => {return(<></>)}}
                >
                    <img  src={layer1} />
                        
                    
                    
                        <img  src={layer2} />
                    
                  
                        <img  src={layer3} />
                   
                        <img src={layer4} />
                    
                  
                        <img  src={layer5} />
                    
                </Carousel>
            </>
        );
};


