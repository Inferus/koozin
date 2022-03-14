import React from "react";
import Popup from "../components/Popup";
import Step1Swiper from "../components/Step1Swiper";
import BottomPanel from "../components/BottomPanel";
import {Container} from "react-bootstrap";
import {Step2Swiper} from "../components/Step2Swiper";
import Step2ColorCarousel from "../components/Step2ColorCarousel";

import apricot from '../images/element/colors/Apricot.svg'
import banana from '../images/element/colors/Banana.svg'
import caribbean from '../images/element/colors/Caribbean.svg'
import heavenly from '../images/element/colors/Heavenly.svg'
import ibiza from '../images/element/colors/Ibiza.svg'
import mango from '../images/element/colors/Mango.svg'
import pale_pink from '../images/element/colors/Pale_pink.svg'
import pink_happiness from '../images/element/colors/Pink_happiness.svg'
import poppy from '../images/element/colors/Poppy.svg'
import tarragon from '../images/element/colors/Tarragon.svg'

import color1 from '../images/Color1.svg'
import color2 from '../images/Color2.svg'
import color3 from '../images/Color3.svg'
import color4 from '../images/Color4.svg'
import color5 from '../images/Color5.svg'
import Question from "../components/Question";
import Help from "../components/Help";
import { useSelector } from "react-redux";

const colors = [color1, color2, color3, color4, color5]

export default function Step2() {
    const selector = useSelector(state=> state.product.baseColor)
    const fullColors = [banana ,apricot ,mango ,ibiza ,pale_pink,heavenly,pink_happiness,caribbean,tarragon,poppy]

    
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
            <Help handleClose={handleCloseHelp} title='Подсказки к шагу 2' text='Карман и капюшон пристегиваются с помощью молний. Их легко отстегнуть и заменить.
В комплект входит база и 2 полноценных набора сменных элементов.
Второй набор можно будет выбрать на следующем шаге.
Для каждого комплекта есть несколько вариантов:
карман и капюшон одного цвета
дизайн из двух разных цветов
вариант с оригинальным принтом' />
            <Popup
                number='Шаг 2'
                title='Дизайн и цвет кармана и капюшона'
                text=''
                changeInterface='white'
            />
            <Step2Swiper />
            <BottomPanel
                carousel={<Step2ColorCarousel array={colors} fullColors={fullColors} />}
                backButton={true}
                title='Цвет элементов'
                linkBack='/step1'
                linkNext='/step3'
              ></BottomPanel>
        </Container>
    )
}