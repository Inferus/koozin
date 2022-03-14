import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import glow from '../images/glow.webp'
import black from '../images/hoodies/A/a__black_false_disabled_base-only.webp'
import white from '../images/hoodies/A/a__white_false_disabled_base-only.webp'
import grey from '../images/hoodies/A/a__grey_false_disabled_base-only.webp'
import desc1 from '../images/black.svg'
import desc2 from '../images/white.svg'
import desc3 from '../images/grey.svg'
import ProductStore from '../store/ProductStore';
import { setBaseColor } from '../store/actionCreators';
import { useDispatch, useSelector} from 'react-redux';
import { setBackground } from '../store/actionCreators';

export let selector = ''

export default function Step1Swiper() {

    let clientXStart = ''
    let clientXEnd = ''



   const selectedItem = useSelector(state => state.swiper.selectedItem)
    const handleCol = () => {
        let colslides = []
        let slides = document.querySelectorAll('.slide')
        for (let i = 0; i < slides.length / 2; i++) {
            console.log(slides.length);
            colslides[i] = slides[slides.length/2 + i]
        }
        for (let i = 0; i < colslides.length; i++) {
            if (colslides[i].classList.contains('selected')) {
                colslides[i].classList.add('slidecolor')
            } else {
                colslides[i].classList.remove('slidecolor')
            }
        }
    }

    const handleBack = () => {
        let back = document.querySelector('.backgrounds')
        let texts = document.querySelectorAll('.colortexts')
        console.log(document.querySelector('.selected'))
        let selectedColor = document.querySelector('.selected').children[0].children[0].alt
       
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

    const leftClick = () => {
        let buttons = document.querySelectorAll('.control-arrow')
        buttons[2].click()
        setTimeout(handleCol, 300)
        setTimeout(handleBack, 300)
        setTimeout(handleSelectColor, 300)
        setTimeout(handleStripes, 300)
    }

    const rightClick = () => {
        let buttons = document.querySelectorAll('.control-arrow')
        buttons[3].click()
        setTimeout(handleCol, 300)
        setTimeout(handleBack, 300)
        setTimeout(handleSelectColor, 300)
        setTimeout(handleStripes, 300)
    }

    const handleSelectColor = () => {
        let selectedColor = document.querySelector('.selected').children[0].children[0].alt
        let buttons = document.querySelectorAll('.control-arrow')
        buttons[0].addEventListener('click', leftClick)
        buttons[1].addEventListener('click', rightClick)
        selector = selectedColor
    }

    const handleStripes = () => {
        let hoodSlides = []
        let slides = document.querySelectorAll('.slide')
        const stripes = document.querySelectorAll('.stripe')
        for (let i = 0; i < slides.length / 2; i++) {
            hoodSlides[i] = slides[i]
        }
        for (let i = 0; i < hoodSlides.length; i++) {
            if (hoodSlides[i].classList.contains('selected')) {
                if (stripes && stripes[i])
                    stripes[i].classList.add('stripe_active')
            } else {
                if (stripes && stripes[i])
                    stripes[i].classList.remove('stripe_active')
            }
        }
    }

    setTimeout(handleSelectColor, 2000)

    const dispatch = useDispatch()

    const setProductColor = (type)=>{
       dispatch(setBaseColor(type))
    }

   const setBackgroundColor = (color)=>{
    dispatch(setBackground(color))
    }

    return (
        <>
            <div className='backgrounds backgrounds-black' style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0, width: '100%'}}></div>
            <Carousel
           
            width={'100%'}
            selectedItem={selectedItem}
           
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                showArrows={true}
                onChange={(index)=> {
                    if (index === 0) {
                        setProductColor('black')
                        setTimeout(()=>setBackgroundColor('black'),300)}
                    if (index === 1) {
                        setTimeout(()=>setBackgroundColor('white'),300)
                        setProductColor('white')}
                    if (index === 2) {
                         setProductColor('grey')
                         setTimeout(()=>setBackgroundColor('black'),300)}
                   
                }}
                onSwipeStart={(event) => {
                    
                   
                    clientXStart = event.changedTouches[0].screenX
                }}
               
                onSwipeEnd={(event) => {
                    
                    let buttons = document.querySelectorAll('.control-arrow')
                    clientXEnd = event.changedTouches[0].screenX
                    console.log(clientXStart,clientXEnd)
                    if (clientXStart - clientXEnd > -9 && clientXStart - clientXEnd < 9) return
                    if (clientXEnd > clientXStart) {
                        buttons[2].click()
                    } else {
                        buttons[3].click()
                    }
                    setTimeout(handleCol, 300)
                    setTimeout(handleBack, 300)
                    setTimeout(handleSelectColor, 300)
                    setTimeout(handleStripes, 300)

                }}
              
                  
                    
                
            >
                <div style={{height: 'calc(100vh - 100px)', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                    <img style={{width: '60%', position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', left: '50%', zIndex: 3}} src={black} alt='black' />
                    <img style={{width: '80%', position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', left: '50%'}} src={glow} />
                    <img className='colortexts colortexts_active' src={desc1} alt='black' />
                </div>
                <div style={{height: 'calc(100vh - 100px)', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                    <img style={{width: '60%', position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', left: '50%', zIndex: 3}} src={white} alt='white' />
                    <img style={{width: '80%', position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', left: '50%'}} src={glow} />
                    <img className='colortexts colortexts_active' src={desc2} alt='white' />
                </div>
                <div style={{height: 'calc(100vh - 100px)', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                    <img style={{width: '60%', position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', left: '50%', zIndex: 3}} src={grey} alt='grey' />
                    <img style={{width: '80%', position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', left: '50%'}} src={glow} />
                    <img className='colortexts colortexts_active' src={desc3} alt='grey' />
                </div>
            </Carousel>

        </>
    );
};