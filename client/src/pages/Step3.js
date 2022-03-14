import React from "react";
import Popup from "../components/Popup";
import Step1Swiper from "../components/Step1Swiper";
import BottomPanel from "../components/BottomPanel";
import {Container} from "react-bootstrap";
import {Step3Swiper} from "../components/Step3Swiper";
import Step2ColorCarousel from "../components/Step2ColorCarousel";

import color1 from '../images/Color1.svg'
import color2 from '../images/Color2.svg'
import color3 from '../images/Color3.svg'
import color4 from '../images/Color4.svg'
import color5 from '../images/Color5.svg'
import Question from "../components/Question";
import Help from "../components/Help";

const colors = [color1, color2, color3, color4, color5]

export default function Step3() {

    const hidePopup = () => {
        document.querySelector('.popup').classList.remove('popup_opened')
    }

    const handleOpenHelp = () => {
        const help = document.querySelector('.help')
        help.classList.add('help_opened')
        console.log(help)
    }

    const handleCloseHelp = () => {
        const help = document.querySelector('.help')
        help.classList.remove('help_opened')
    }

 

    return(
        <Container style={{margin: 0, display: "flex", alignItems: "center", padding: 0}}>
            <Question click={handleOpenHelp} />
            <Help handleClose={handleCloseHelp} title='Подсказки к шагу 3' text='Еще один полный комплект сменных элементов.
Можно добавить цвета, которые будут сочетаться с выбранными на предыдущем шаге.
Или что-то контрастное!
' />
            <Popup
                number='Шаг 3'
                title='Дизайн и цвет кармана и капюшона'
                text='второй комплект'
            />
            <Step3Swiper />
            <BottomPanel
                carousel={<Step2ColorCarousel array={colors} />}
                title='Цвет элементов'
                linkBack='step2'
                linkNext='/checkout'
                children={
                    <>
                        <div className='stripe2 stripe2_active'></div>
                        <div className='stripe2'></div>
                        <div className='stripe2'></div>
                        <div className='stripe2'></div>
                        <div className='stripe2'></div>
                    </>
                }/>
        </Container>
    )
}