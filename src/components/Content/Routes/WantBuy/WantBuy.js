import React, {useContext} from 'react';
import {CustomContext} from "../../../Context";

const WantBuy = ({item}) => {
    const {addItem} = useContext(CustomContext);
    return (
        <div>
            <button type='button' className='product__main-btn' onClick={()=> addItem(item)}>Купить</button>
        </div>
    );
};

export default WantBuy;