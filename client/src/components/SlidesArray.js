import React, { useEffect } from 'react';
import glow from "../images/glow.webp";
import {Carousel} from "react-responsive-carousel";

import { useSelector } from 'react-redux';

const SlidesArray = ({changeArray}) => {
    const twoColored = useSelector(state=>state.global.twoColoredHoodie)
    const normWidth = () => {
        const carousel = document.querySelector('.carousel')
        carousel.style.width = '100vw'
    }

    const slider = () => {
        const sliders = document.querySelector('.carousel-slider')
        const slide = document.querySelectorAll('.slide')
        const buttons = document.querySelectorAll('.control-arrow')
        for (let i = 0; i < slide.length/2; i++) {
            slide[i].style.height='40vh'
        }
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.transform='translateY(10vh)'
        }
        sliders.style.height = '59vh'
        sliders.style.overflow = 'visible'
    }
    const sliderFull = () => {
        const sliders = document.querySelector('.carousel-slider')
        const slide = document.querySelectorAll('.slide')
        const buttons = document.querySelectorAll('.control-arrow')
       
        for (let i = 0; i < slide.length/2 -2; i++) {
            slide[i].style.height='40vh'
        }
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.transform='translateY(10vh)'
        }
        sliders.style.height = '40vh'
        sliders.style.overflow = 'visible'
    }
    const sliderChoose =()=> {
        !twoColored ? slider() : sliderFull()
    }
useEffect(()=>{
    normWidth()
    sliderChoose()
},[])
   

    return (
        <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            showArrows={true}
            onChange={changeArray}
            infiniteLoop={true}
        >
            <div style={{
                        height: 'calc(100vh - 120px)',
                        width: '100vw',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
            }}>
                <img style={{
                            width: '60%',
                            position: 'absolute',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            left: '50%',
                            zIndex: 3
                        }} src='' />
            </div>
            <div style={{
                height: 'calc(100vh - 120px)',
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
            }}>
                <img style={{
                    width: '60%',
                    position: 'absolute',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    left: '50%',
                    zIndex: 3
                }} src='' />
            </div>

        </Carousel>
    );
};

export default SlidesArray;

