import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {Button, Nav, Navbar} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import Menu from "./Menu";
import Basket from "./Basket";
import Logo from '../images/logo.svg'
import basketLogo from '../images/cart-button.svg'
import {render} from "react-dom";
import { useSelector } from "react-redux";
import LOGOBLACK from '../images/element/icon/LOGOBLACK.svg'
import BLACKCARTLOGO from '../images/element/icon/CARDLOGOBLACK.svg'

const Header = observer(() => {
    const {user} = useContext(Context)
 

    const [isOpened, setIsOpened] = useState(false)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    const handlerMenu = () => {
        document.querySelector('.menu').classList.toggle('menu_opened')
    }

    const handlerBasket = () => {
        setIsOpened(prev => !prev)
        document.querySelector('.basket').classList.toggle('basket_opened')
    }

  const background = useSelector(state=> state.global.background)
    return (
    <div className='header'>
        <Menu handleClose={handlerMenu} />
        <Basket isOpened={isOpened} handleClose={handlerBasket} />
        <div className='header__left'>
          {background === 'black' ? <button onClick={handlerMenu} className='header__menu-button' />:
          <button onClick={handlerMenu} className='blackMenuBtn'  />
          }  
            <Link to='/' className='header__logo' />
            <Link className='header__link header__link_selected' to=''>Конструктор</Link>
            <Link className='header__link' to=''>Отдельные детали</Link>
            <Link className='header__link' to=''>Как это работает</Link>
        </div>
        {background === 'black' ? <Link to='/'><img style={{height: '14px'}} src={Logo} /></Link>:
          <Link to='/'><img style={{height: '14px'}} src={LOGOBLACK} /></Link>
          } 
        
        {/*{user.isAuth ?*/}
        {/*    <div>*/}
        {/*        <Button className='header__link' onClick={() => history.push(ADMIN_ROUTE)}>Админка</Button>*/}
        {/*        <Button className='header__link' onClick={() => logOut()}>Выйти</Button>*/}
        {/*    </div>*/}
        {/*    : <div>*/}
        {/*        <Button className='header__link' onClick={() => history.push(LOGIN_ROUTE)}>Войти</Button>*/}
        {/*    </div>*/}
        {/*}*/}
       {background === 'black' ? <img style={{height: '25px', marginRight: 12}} className="he" onClick={handlerBasket}  src={basketLogo} />:
       <img style={{height: '25px', marginRight: 12}} className="he" onClick={handlerBasket}  src={BLACKCARTLOGO} />
       } 
    </div>
    );
})

export default Header