import React from 'react';
import './rass.css'
import '../Adaptive/adaptive.css'

const Rass = () => {
    return (
        <div className='rass'>
            <h1 className='rass__title'>Рассрочка</h1>
            <p className='rass__subtitle'>Товары в нашем интернет-магазине стали еще более доступными! Теперь любой покупатель может воспользоваться услугой «в рассрочку» — без переплаты и <br/> первоначального взноса.</p>
            <p className='rass__subtitle'>Что необходимо для предоставления рассрочки:</p>
            <ul className='rass__list'>
                <li className='rass__list-item'>Возраст от 18 до 69 лет</li>
                <li className='rass__list-item'>Паспорт гражданина РФ</li>
                <li className='rass__list-item'>Постоянная регистрация по месту жительства на территории РФ или временная регистрация</li>
            </ul>
            <p className='rass__subtitle'>Связаться можно по номеру:</p>
            <a className='rass__number' href="tel: +78005055461 ">+7 (800) 505-54-61</a>
        </div>
    );
};

export default Rass;