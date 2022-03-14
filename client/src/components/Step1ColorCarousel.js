import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import hider from "../images/pngwing.com.png";
import {selector} from "./Step1Swiper";
import { useDispatch } from 'react-redux';

const Step1ColorCarousel = () => {
const dispatch = useDispatch()
    let clientXStart = ''
    let clientXEnd = ''

    const handleBack = () => {
        let back = document.querySelector('.backgrounds')
        let texts = document.querySelectorAll('.colortexts')
        let selectedColor = document.querySelector('.selected').children[0].children[0].alt
        console.log(selectedColor)
        if (selectedColor === 'white') {
            back.classList.remove('backgrounds-black')
            back.classList.remove('backgrounds-grey')
            back.classList.add('backgrounds-white')
            for (let i = 0; i < texts.length; i++) {
                if (texts[i].alt === 'white') {
                    texts[i].classList.add('colortexts_active')
                } else {
                    texts[i].classList.remove('colortexts_active')
                }
            }
        } else if (selectedColor === 'black') {
            back.classList.remove('backgrounds-white')
            back.classList.remove('backgrounds-grey')
            back.classList.add('backgrounds-black')
            for (let i = 0; i < texts.length; i++) {
                if (texts[i].alt === 'black') {
                    texts[i].classList.add('colortexts_active')
                } else {
                    texts[i].classList.remove('colortexts_active')
                }
            }
        } else if (selectedColor === 'grey') {
            back.classList.remove('backgrounds-black')
            back.classList.remove('backgrounds-white')
            back.classList.add('backgrounds-grey')
            for (let i = 0; i < texts.length; i++) {
                if (texts[i].alt === 'grey') {
                    texts[i].classList.add('colortexts_active')
                } else {
                    texts[i].classList.remove('colortexts_active')
                }
            }
        } else {
            console.log('sss')
        }
    }

    const handleCar = () => {
        let carousel = document.querySelectorAll('.carousel')
        let wrapper = document.querySelectorAll('.slider-wrapper')
        let root = document.querySelectorAll('.carousel-root')
        let correctSlides = []
        let slide = document.querySelectorAll('.slide')
        for (let i = 0; i < slide.length / 2; i++) {
            correctSlides[i] = slide[slide.length / 2 + i]
        }
        for (let i = 0; i < correctSlides.length; i++) {
            correctSlides[i].style.display = 'flex'
            correctSlides[i].style.justifyContent = 'center'
            correctSlides[i].style.alignItems = 'center'
        }
        root[1].style.margin = 'auto'
        root[1].style.width = '15vw'
        root[1].style.display = 'flex'
        root[1].style.justifyContent = 'center'
        carousel[1].classList.add('carousels')
        wrapper[1].classList.add('carousels')
    }

    const handleCol = () => {
        let colslides = []
        let slides = document.querySelectorAll('.slide')
        const stripes = document.querySelectorAll('.stripe')
        for (let i = 0; i < slides.length / 2; i++) {
            colslides[i] = slides[slides.length/2 + i]
        }
        for (let i = 0; i < colslides.length; i++) {
            if (colslides[i].classList.contains('selected')) {
                colslides[i].classList.add('slidecolor')
                if (stripes && stripes[i])
                    stripes[i].classList.add('stripe_active')
            } else {
                colslides[i].classList.remove('slidecolor')
                if (stripes && stripes[i])
                    stripes[i].classList.remove('stripe_active')
            }
        }
    }

    const handleHider = () => {
        const panel = document.querySelector('.color-changer')
        const arrow = document.querySelector('.color-changer__button-hider')
        panel.classList.toggle('color-changer_hide')
        arrow.classList.toggle('color-changer__button-hider_rotate')
    }
    
useEffect(()=>{
    handleBack()
    handleCar()
    handleCol()
},[])
    

    return (
        <div className='color-changer '>
            {/*<button className='color-changer__button-hider' onClick={handleHider} />*/}
            <Carousel
                style={{overflow: 'hidden'}}
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                className='colCarousel'
                onClickItem={(event) => {
                    console.log(event)
                    let buttons = document.querySelectorAll('.control-arrow')
                    let colslides = []
                    console.log(buttons)
                    let slides = document.querySelectorAll('.slide')
                    for (let i = 0; i < slides.length / 2; i++) {
                        colslides[i] = slides[slides.length/2 + i]
                    }
                   console.log(colslides)
                    if (event === 0 && colslides[2].classList.contains('selected')) {
                        console.log('2000')
                        buttons[0].click()
                        setTimeout(()=>buttons[0].click(), 0)  
                        
                }
                if (event === 1 && colslides[2].classList.contains('selected')) {
                    
                    buttons[0].click()
                    
                    
            }
            if (event === 2 && colslides[1].classList.contains('selected')) {
                    
                buttons[1].click()
                
                
        }
        if (event === 2 && colslides[0].classList.contains('selected')) {
                    
            buttons[1].click()
            setTimeout(()=>buttons[1].click(), 0)  
            
    }
    if (event === 0 && colslides[1].classList.contains('selected')) {
                    
        buttons[0].click()
        
        
}
if (event === 1 && colslides[0].classList.contains('selected')) {
                    
    buttons[1].click()
    
    
}
            
            
            }}
             
                onSwipeStart={(event) => {
                    clientXStart = event.changedTouches[0].screenX
                }}
                onSwipeEnd={(event) => {
                    let buttons = document.querySelectorAll('.control-arrow')
                    clientXEnd = event.changedTouches[0].screenX
                    console.log(clientXEnd)
                    if (clientXStart === clientXEnd)
                        return;
                    if (clientXEnd > clientXStart) {
                        buttons[0].click()
                    } else {
                        buttons[1].click()
                    }
                    setTimeout(handleBack, 300)
                    setTimeout(handleCol, 300)
                }}
               
            >
                <div className='color-changer__item' style={{background: '#161616'}}></div>
                <div className='color-changer__item' style={{background: '#F2F2F2'}}></div>
                <div className='color-changer__item' style={{background: '#36363D'}}></div>
            </Carousel>
            </div>
    );
};

export default Step1ColorCarousel;