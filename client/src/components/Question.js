import React from 'react';
import {Button} from "react-bootstrap";
import { useSelector } from 'react-redux';

const Question = ({click}) => {

    const background = useSelector(state=> state.global.background)
    return (
     background === 'black' ? <div onClick={click} className='question'>?</div>:
       <div onClick={click} className='question question_dark'>?</div>
       
    );
};

export default Question;