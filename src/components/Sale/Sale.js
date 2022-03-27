import React from 'react';
import picture1 from '../../assets/1picture.webp'
import picture2 from '../../assets/2picture.webp'
import picture3 from '../../assets/3picture.webp'
import './sale.css'
import '../Adaptive/adaptive.css'
const Sale = () => {
    return (
        <div className='sale'>
            <h1 className='sale__title'>Акции</h1>
            <div className='sale__blocks'>
                <div className='sale__block'>
                    <img className='sale__img' src={picture1} alt="picture1"/>
                    <div className='sale__block-info'>
                        <h2 className='sale__block-title'>Подарки при покупке</h2>
                        <p className='sale__block-subtitle'>Дарим 2 гарантированных подарка при покупке любого электросамоката</p>
                    </div>
                </div>
                <div className='sale__block'>
                    <img className='sale__img' src={picture2} alt="picture2"/>
                    <div className='sale__block-info'>
                        <h2 className='sale__block-title'>Дарить подарки — это просто!</h2>
                        <p className='sale__block-subtitle'>Электронные подарочные сертификаты от 5000 RUB</p>
                    </div>
                </div>
                <div className='sale__block'>
                    <img className='sale__img' src={picture3} alt="picture3"/>
                    <div className='sale__block-info'>
                        <h2 className='sale__block-title'>Trade-in — выкуп вашего электротранспорта</h2>
                        <p className='sale__block-subtitle'>Программа Trade-in популярна не только в автомобильной сфере, но и в <br/> сфере электротранспорта. Вы с легкостью можете продать свой старый <br/> гаджет и приобрести новый со значительной скидкой.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sale;