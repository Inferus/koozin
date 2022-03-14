import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import arrownext from '../images/arrowWhite.svg'

import arrowback from '../images/element/icon/arrowBack.svg'
import { ProgressLine } from "./ProgressLine";
import { setBackground } from "../store/actionCreators";
import { changeLength } from "../store/actionCreators";
import ProductStore from "../store/ProductStore";
export default function BottomPanel({carousel, linkNext, children, backButton, linkBack}) {
const dispatch = useDispatch()

const biggerProgressLine = ()=>{
dispatch(changeLength('middle'))
dispatch(setBackground('black'))

}
const smallerProgressLine = ()=>{
    dispatch(changeLength('short'))
  
    
    }
  



    return(
        <div style={{background: '#161616', position: 'fixed', bottom: 0, left: 0, width: '100vw', zIndex: '3'}}>
            <div style={{height: '4px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 0}}>
                {children}
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '40px', alignItems: 'center'}}>
            { backButton ? <Link onClick={smallerProgressLine} to={linkBack} style={{border: 'none', background: 'transparent', height: '28px', 
                position:'absolute', bottom: '10px', left: '5px',
                textDecoration: 'none', color:'#fff', fontWeight: 400}}>
                    
                    <img style={{height: '16px'}} src={arrowback}/>   <span>Назад</span> 
                </Link>
            
            : null}
                <Link onClick={biggerProgressLine} to={linkNext} style={{border: 'none', background: 'transparent', height: '28px', 
                position:'absolute', bottom: '10px', right: '5px',
                textDecoration: 'none', color:'#fff'}}>
                    
                   <span>Далее</span> <img style={{height: '28px'}} src={arrownext}/>
                </Link>
            </div>
            {carousel}
            <ProgressLine></ProgressLine>
        </div>
    )
}