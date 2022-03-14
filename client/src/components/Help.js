import React from 'react';
import close from "../images/tap-target.svg";

const Help = ({title, text, handleClose}) => {
    return (
        <div className='help'>

                <button onClick={handleClose} style={{background: 'transparent', width: '48px', height: '48px', border: 'none', padding: 0, position: 'absolute', right: 0}}>
                    <img src={close} />
                </button>
                <h3 className='help__title'>{title}</h3>
                <p className='help__text'>{text}</p>
            </div>

    );
};

export default Help;