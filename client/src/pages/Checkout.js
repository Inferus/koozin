import React from 'react';
import {firstComplect} from "../components/Step2Swiper";
import {secondComplect} from "../components/Step3Swiper";
import BasketItem from "../components/BasketItem";
import {Link} from "react-router-dom";

const Checkout = () => {
    return (
        <div className='checkout'>
            <div className='checkout__red-box'>
                <h2 className='checkbox__red-box-title'>Оформление</h2>
                <div className='checkout__red-box-row'>
                    <p className='checkbox__red-box-subtitle'>комплект</p>
                    <p className='checkout__red-box-price'>15000 ₽</p>
                </div>
                <BasketItem image={firstComplect} />
                <BasketItem image={secondComplect} />
            </div>
            <p className='checkout__title'>контакты</p>
            <form className='checkout__form'>
                <input className='checkout__input' type='text' placeholder='имя'></input>
                <input className='checkout__input' type='text' placeholder='номер телефона'></input>
            </form>
            <p className='checkout__title'>оплата</p>
            <div style={{padding: '12px 0 12px 56px', color: '#FBF9F6', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <input style={{marginRight: '16px'}} type='radio' name='payment' />Онлайн через Ю Кассу
            </div>
            <div style={{padding: '12px 0 12px 56px', color: '#FBF9F6', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <input style={{marginRight: '16px'}} type='radio' name='payment' />Курьеру при получении
            </div>
            <div style={{padding: '12px 0 12px 56px', color: '#FBF9F6', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <input style={{marginRight: '16px'}} type='radio' name='payment' />В рассрочку от банка
                «Тинькофф»
            </div>
            <div style={{padding: '12px 0 12px 56px', color: '#FBF9F6', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <input style={{marginRight: '16px'}} type='radio' name='payment' />Покупай со Сбербанком
            </div>
            <Link style={{textDecoration: 'none', color: '#ED5A51', margin: '68px', alignSelf: 'flex-end'}} to='/'>подтвердить</Link>
        </div>
    );
};

export default Checkout;