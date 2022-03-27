import React from 'react';
import './aboutUs.css'
import {Link} from 'react-router-dom'
import Delivery from "../Delivery/Delivery";
import '../Adaptive/adaptive.css'
const AboutUs = () => {
    return (
        <div className='aboutUs'>
           <div className='aboutUs-part-1'>
               <div className='aboutUs__img'>
                   <div className='aboutUs__img-block'>
                        <h1 className='aboutUs__img-title'>Тест-драйв в Москве</h1>
                       <p className='aboutUs__img-subtitle'>Оцените все преимущества <br/> самокатов лично</p>
                       <Link className='aboutUs__more' to='/test-drive'>Подробнее <span className='aboutUs__more-arrow'>→</span></Link>
                   </div>
               </div>
               <div className='aboutUs__companyInfo'>
                   <h1 className='aboutUs__companyInfo-title'>kugookirin.ru — первый <br/> официальный дилер <br/> Kugoo Kirin в России</h1>
                   <p className='aboutUs__companyInfo-subtitle'>Наша цель предоставить полный ассортимент современной продукции <br/> Kugoo Kirin, которая улучшает и упрощает жизнь. Стремимся подарить <br/> комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся <br/> к сервисному обслуживанию.</p>
                   <div className='aboutUs__companyInfo-block'>
                       <p className='aboutUs__companyInfo-block-subtitle'>Специализируемся исключительно на бренде Kugoo, поэтому вы получите:</p>
                       <ul className='aboutUs__companyInfo-list'>
                           <li className='aboutUs__companyInfo-list-item'>цены от завода-изготовителя Jilong</li>
                           <li className='aboutUs__companyInfo-list-item'>бесплатный тест-драйв самокатов</li>
                           <li className='aboutUs__companyInfo-list-item'>фирменную гарантию 1 год</li>
                           <li className='aboutUs__companyInfo-list-item'>ремонт и обслуживание от 1 дня в собственном сервисном центре;</li>
                           <li className='aboutUs__companyInfo-list-item'> более 1 000 запчастей и аксессуаров в наличии</li>
                       </ul>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default AboutUs;