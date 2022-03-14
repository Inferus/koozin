import React from 'react';
import {firstComplect} from "./Step2Swiper";

const BasketItem = ({image}) => {
    return (
        <div style={{width: '100%', height: '132px', padding: '0 16px', borderTop: '1px solid #898885', borderBottom: '1px solid #898885', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <img style={{width: '71px', height: '114px'}} src={image} />
            <h2 style={{paddingLeft: '16px', alignSelf: 'flex-end'}}>NAME</h2>
        </div>
    );
};

export default BasketItem;