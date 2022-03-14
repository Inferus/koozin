import React, { useEffect } from 'react';
import {Carousel} from "react-responsive-carousel";
import glow from "../images/glow.webp";
import desc from '../images/Vector.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setTwoColored } from '../store/actionCreators';
const SlidesCards = ({array, onChange}) => {
    const twoColored = useSelector(state=>state.global.twoColoredHoodie)

    const normWidth = () => {
        const carousel = document.querySelector('.carousel')
        carousel.style.width = '100vw'
    }

    const slider = () => {
        const slide = document.querySelectorAll('.slide')
        const buttons = document.querySelectorAll('.control-arrow')
        const root = document.querySelectorAll('.carousel-root')
        let bottomSlides = []
        let bottomButtons = []
        for (let i = 0; i < slide.length / 2; i++) {
            bottomSlides[i] = slide[slide.length/2 + i]
        }
        root[1].style.transform = 'translateY(-40vh)'
        root[0].style.zIndex = 3
        for (let i = 0; i < buttons.length/2; i++) {
            bottomButtons[i] = buttons[buttons.length/2 + i]
            bottomButtons[i].style.transform='translateY(10vh)'
        }
    }
    const sliderFull = () => {
        const slide = document.querySelectorAll('.slide')
        const buttons = document.querySelectorAll('.control-arrow')
        const root = document.querySelectorAll('.carousel-root')
        let bottomSlides = []
        let bottomButtons = []
        for (let i = 0; i < slide.length / 2; i++) {
            bottomSlides[i] = slide[slide.length/2 + i]
        }
        
        root[1].style.transform = 'translateY(-40vh)'
        root[0].style.zIndex = 3
        for (let i = 0; i < buttons.length/2; i++) {
            bottomButtons[i] = buttons[buttons.length/2 + i]
            bottomButtons[i].style.transform='translateY(10vh)'
        }
    }
const sliderChoose =()=> {
    !twoColored ? slider() : sliderFull()
}
useEffect(()=>{
    normWidth()
    sliderChoose()
},[])

const dispatch = useDispatch()
   const fullColoredHandler = (i)=>{
       if (i === 1) return dispatch(setTwoColored(false))
       dispatch(setTwoColored(true))
   }

    return (
        <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            showArrows={true}
            onChange={(i)=>{onChange() 
                fullColoredHandler(i)  }}
        >
            {array.map(item =>
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
                    }} src={item} />
                    <img style={{
                        width: '80%',
                        position: 'absolute',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        left: '50%'
                    }} src={glow}/>
                    <img style={{
                        width: '80%',
                        position: 'absolute',
                        bottom: '0',
                        right: '0',
                        zIndex: 3
                    }} src={desc}/>
                </div>
            )}
        </Carousel>
    );
};

export default SlidesCards;