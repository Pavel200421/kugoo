import React from 'react';
import './information.css'
import 'animate.css';
import  'wowjs/dist/wow.min'
import {useNavigate} from 'react-router-dom'
const Information = () => {
const navigate = useNavigate();
    return (
        <div className='information'>
            <div className='container__information'>
                <ul className='information__list animate__animated animate__zoomIn animate__delay-0.5s'>
                    <li className='information__list-item'>
                        <div className='wow information__item-block'>
                            <h2 className='information__item-title'>Гарантия 1 год</h2>
                            <p className='information__item-subtitle'>на весь ассортимент</p>
                        </div>
                    </li>
                    <li className='information__list-item'>
                        <div className='information__item-block'>
                            <h2 className='information__item-title'>рассрочка</h2>
                            <p className='information__item-subtitle'>от 6 месяцев</p>
                        </div>
                    </li>
                    <li className='information__list-item'>
                        <div className='information__item-block'>
                            <h2 className='information__item-title'>Подарки</h2>
                            <p className='information__item-subtitle'>и бонусы к покупкам </p>
                        </div>
                    </li>
                    <li className='information__list-item'>
                        <div  className='information__item-block-last'>
                            <div className='information__item-background'> </div>
                            <div className='information__item-block-mark'>
                                <a className='information__item-review' href="https://yandex.ru/profile/82896924780?intent=reviews&utm_source=badge&utm_medium=rating&utm_campaign=v1" target='_blank'>Яндекс отзывы</a>
                                <p className='information__item-mark'>
                                    <span><svg width="20" height="20" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L8.84741 4.45726L13.6574 4.83688L9.98917 7.97124L11.1145 12.6631L7 10.143L2.8855 12.6631L4.01083 7.97124L0.342604 4.83688L5.15259 4.45726L7 0Z" fill="#FFD12E"/>
                                    </svg></span>
                                    <span className='information__item-mark-number'>4,9</span>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    );
};

export default Information;