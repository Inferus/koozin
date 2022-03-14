import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux';

const Step2ColorCarousel = ({ array, fullColors }) => {


const twoColored = useSelector(state=>state.global.twoColoredHoodie)


    const handleCol = () => {
        let colslides = []
        let slides = document.querySelectorAll('.slide')
        
        for (let i = 8; i < slides.length ; i++) {
            colslides[i - 8] = slides[i]
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
        let correctSlides = []
        let slide = document.querySelectorAll('.slide')
        for (let i = 8; i < slide.length; i++) {
            correctSlides[i - 8] = slide[i]
        }
        console.log(slide)
        const colorClasses = ['backgrounds-apricot', 'backgrounds-ibiza', 'backgrounds-hea', 'backgrounds-car', 'backgrounds-pop']
        for (let i = 0; i < correctSlides.length; i++) {
            if (correctSlides[i].classList.contains('selected')) {
                back.classList.remove('backgrounds-apricot')
                back.classList.remove('backgrounds-ibiza')
                back.classList.remove('backgrounds-hea')
                back.classList.remove('backgrounds-car')
                back.classList.remove('backgrounds-pop')
                back.classList.add(colorClasses[i])
                return
            } else {
                console.log('no')
            }
        }
    }

    const handleCar = () => {
        let carousel = document.querySelectorAll('.carousel')
        let wrapper = document.querySelectorAll('.slider-wrapper')
        let root = document.querySelectorAll('.carousel-root')
        let correctSlides = []
        let slide = document.querySelectorAll('.slide')
        console.log(slide)
        for (let i = 8; i < slide.length; i++) {
            correctSlides[i - 8] = slide[i]
        }
        for (let i = 0; i < correctSlides.length; i++) {
            correctSlides[i].style.display = 'flex'
            correctSlides[i].style.justifyContent = 'center'
            correctSlides[i].style.alignItems = 'center'
        }
        root[2].style.margin = 'auto'
        root[2].style.width = '15vw'
        root[2].style.display = 'flex'
        root[2].style.justifyContent = 'center'
        carousel[2].classList.add('carousels')
        wrapper[2].classList.add('carousels')
    }

    const handleHider = () => {
        const panel = document.querySelector('.color-changer')
        const arrow = document.querySelector('.color-changer__button-hider')
        panel.classList.toggle('color-changer_hide')
        arrow.classList.toggle('color-changer__button-hider_rotate')
    }

    setTimeout(handleCol, 2000)
    setTimeout(handleCar, 2000)

    return (
        <div className='color-changer'>
            
          { twoColored ? <Carousel
                style={{overflow: 'visible' }}
                className='colCarousel'
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                selectedItem={0}
                width= "100px"
                onSwipeEnd={(event) => {
                    setTimeout(handleCol, 300)
                    setTimeout(handleBack, 300)

                }}
                onClickItem={(event) => {
                    let buttons = document.querySelectorAll('.control-arrow')
                    let correctSlides = []
                    let slide = document.querySelectorAll('.slide')
                    for (let i = 8; i < slide.length; i++) {
                        correctSlides[i - 8] = slide[i]
                    }
                    console.log(correctSlides)
                    console.log(buttons)
                    if (event = 1) {
                        if (correctSlides[0].classList.contains('previous')) {
                            buttons[5].click()
                        } else {
                            buttons[4].click()
                        }
                    } else if (event = 2) {
                        if (correctSlides[0].classList.contains('previous') || correctSlides[1].classList.contains('previous')) {
                            buttons[5].click()
                        } else {
                            buttons[4].click()
                        }
                    } else if (event = 3) {
                        if (correctSlides[0].classList.contains('previous') || correctSlides[1].classList.contains('previous') || correctSlides[2].classList.contains('previous')) {
                            buttons[5].click()
                        } else {
                            buttons[4].click()
                        }
                    } else if (event = 4) {
                        if (correctSlides[0].classList.contains('previous') || correctSlides[1].classList.contains('previous') || correctSlides[2].classList.contains('previous') || correctSlides[3].classList.contains('previous')) {
                            buttons[5].click()
                        } else {
                            buttons[4].click()
                        }
                    } 
                    setTimeout(handleBack, 300)
                }
                }
            >
                {array.map(item =><img className='color-changer__item' key={item} src={item} alt={item}
                     />
                )}
            </Carousel>:
            <Carousel
            style={{overflow: 'visible' }}
            className='colCarousel'
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            selectedItem={0}
            width= "100px"
            onSwipeEnd={(event) => {
                setTimeout(handleCol, 300)
                setTimeout(handleBack, 300)

            }}
            onClickItem={(event) => {
                let buttons = document.querySelectorAll('.control-arrow')
                let correctSlides = []
                let slide = document.querySelectorAll('.slide')
                for (let i = 8; i < slide.length; i++) {
                    correctSlides[i - 8] = slide[i]
                }
                console.log(event)
                console.log(buttons)
                if (event = 1) {
                    if (correctSlides[0].classList.contains('previous')) {
                        buttons[5].click()
                    } else {
                        buttons[4].click()
                    }
                } else if (event = 2) {
                    if (correctSlides[0].classList.contains('previous') || correctSlides[1].classList.contains('previous')) {
                        buttons[5].click()
                    } else {
                        buttons[4].click()
                    }
                } else if (event = 3) {
                    if (correctSlides[0].classList.contains('previous') || correctSlides[1].classList.contains('previous') || correctSlides[2].classList.contains('previous')) {
                        buttons[5].click()
                    } else {
                        buttons[4].click()
                    }
                } else if (event = 4) {
                    if (correctSlides[0].classList.contains('previous') || correctSlides[1].classList.contains('previous') || correctSlides[2].classList.contains('previous') || correctSlides[3].classList.contains('previous')) {
                        buttons[5].click()
                    } else {
                        buttons[4].click()
                    }
                } else {
                    console.log('000')
                }
                setTimeout(handleBack, 300)
            }
            }
        >
            {fullColors.map(item =><img className='color-changer__item' key={item} src={item} alt={item}
                 />
            )}
        </Carousel>
            
            
            } 
        </div>
    );
};

export default Step2ColorCarousel;