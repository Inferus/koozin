import React, {useContext, useEffect} from "react";
import Popup from "../components/Popup";
import {Context} from "../index";
import {fetchProducts} from "../http/productAPI";
import ProductList from "../components/ProductList";
import {Container} from "react-bootstrap";
import Step1Swiper from '../components/Step1Swiper'
import BottomPanel from "../components/BottomPanel";
import Step1ColorCarousel from "../components/Step1ColorCarousel";
import Help from "../components/Help";
import question from '../images/question.svg'
import Question from "../components/Question";
import Step2ColorCarousel from '../components/Step2ColorCarousel'
import color1 from '../images/Circles/black.svg'
import color2 from '../images/Circles/white.svg'
import color3 from '../images/Circles/grey.svg'
import ProductStore from "../store/ProductStore";
import { ProgressLine } from "../components/ProgressLine";

const colors = [color1, color2, color3]

function Step1() {
    
    const {product} = useContext(Context)

    useEffect(() => {
        
        fetchProducts().then(data => product.setProducts(data))
    }, [])

    const hidePopup = () => {
        console.log('first')
        document.querySelector('.popup').classList.remove('popup_opened')
    }

    const handleOpenHelp = () => {
        const help = document.querySelector('.help')
        help.classList.toggle('help_opened')
        
    }

  
   

    return(
        <Container style={{margin: 0, display: "flex", alignItems: "center", padding: 0, flexDirection: 'column'}}>
            <Question click={handleOpenHelp} />
            <Help handleClose={handleOpenHelp} title='Подсказки к шагу 1' text='Для базы доступны 3 основных цвета.
На следующем шаге можно выбрать дизайн сменных элементов, там будут доступны другие цвета' />
            <Popup
            hidePopup={hidePopup}
                number='Шаг 1'
                title='Цвет базы'
                text='такого цвета будет вещь без кармана и капюшона'
                changeInterface='black'
            />
            <Step1Swiper />
            {/* <ProductList /> */}
            <BottomPanel
                carousel={<Step1ColorCarousel />}
                // carousel={<Step2ColorCarousel array={colors} />}
                linkNext='/step2'
                title='Выбери цвет основы'
                backButton={false}
                />
                <ProgressLine></ProgressLine>
        </Container>
    )
}

export {Step1};