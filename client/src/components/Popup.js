import React from "react";
import { useDispatch, useSelector } from "react-redux";
import arrow from '../images/arrow.svg'
import Header from "./Header";
import { ProgressLine } from "./ProgressLine";
import { setBackground } from "../store/actionCreators";
export default function Popup({number, title, text,changeInterface}) {

    const dispatch = useDispatch()

const popupHandler = ()=>{
    document.querySelector('.popup').classList.remove('popup_opened')
    dispatch(setBackground(changeInterface))
}
  


    return(<>
   
        <div id='popup' className='popup popup_opened'>
        <Header></Header>
            <div className='popup__container'>
                <p className='popup__number'>{number}</p>
                <p className='popup__title'>{title}</p>
                <p className='popup__text'>{text}</p>
            </div>
            <button onClick={popupHandler} style={{backgroundColor: 'transparent',
color: "#ED5A51",
width: '200px',
border: 'none',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
backgroundImage: arrow,
backgroundSize: 24,
fontFamily: 'Raleway',
height: 30,
alignText: 'center',
bottom: '13vh',
position:'absolute',
left: '60vw',
fontWeight: 500
}} className='popup__btn'>Далее<img style={
    {
        marginLeft:'13px',
        marginTop:'3px'
    }
} src={arrow} /></button>
<ProgressLine></ProgressLine>
        </div>
       
        </>
    )
}