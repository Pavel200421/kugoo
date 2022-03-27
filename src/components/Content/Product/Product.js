import React, {useEffect, useState, useContext} from 'react';
import {useParams, Link, useNavigate} from 'react-router-dom'
import {CustomContext} from "../../Context";
import axios from "axios";
import safe from '../../../assets/E-Scooters_Thumb_63e9c687-3e93-4ac9-b7a6-9d9953ba9696_1000x 1.png'
import './product.css'
import WantBuy from '../Routes/WantBuy/WantBuy'
import '../../Adaptive/adaptive.css'

const Product = () => {

    const [product, setProduct] = useState({});
    const {path, id} = useParams();
    const navigate = useNavigate();
    useEffect(()=> {
        axios(`http://localhost:8080/${path}/${id}`).then(({data})=> setProduct(data));
    }, [path, id]);
    const {cart, plusOne, minOne, deleteItem} = useContext(CustomContext);
    return (
        <div className='product'>
                <Link className='product__header-back' to='#' onClick={()=> navigate(-1)}>Назад</Link>
                <div className='product__main'>
                    <div className='product__main-block1'>
                        <img className='product__img' src={product.imageUrl} alt={product.title}/>
                    </div>
                    <div className='product__main-block2'>
                        <h2 className='product__main-title'>{product.title}</h2>
                        <p className='product__main-price'>{product.price} RUB</p>

                        <p className='product__main-gifts'>
                           <span className='product__main-gifts-span'>{product.gift}</span>
                            <span className='product__main-gifts-span'>{product.gift2}</span>
                        </p>
                        <ul className='product__main-list'>
                            <li className='product__main-list-item'>Самовывоз из магазинов – бесплатно</li>
                            <li className='product__main-list-item'>Доставка по Москве в течение 2 часов*</li>
                            <li className='product__main-list-item'>Доставка курьером по Москве – 0 руб. <span className='product__main-list-item-span'>390 руб.</span></li>
                        </ul>
                        <WantBuy item={product}/>
                    </div>
                </div>
            <div className='product__quality'>
                    <img className='product__quality-image' src={safe} alt="png"/>
                <div className='product__quality-info'>
                    <h1 className='product__quality-title'>Контроль качества</h1>
                    <p className='product__quality-subtitle'>На нашем складе происходит полная техническая проверка самоката перед отправкой к вам.</p>
                    <p className='product__quality-subtitle'>Фирменная наклейка, которая разместится на вашем самокате, будет означать, что самокат был вскрыт и проверен перед отправкой.</p>
                    <div className='product__stats'>
                        <h1 className='product__stats-title'>{product.mainTitle}</h1>
                        <div className='product__stats-block'>
                            <ul className='stats__list'>
                                <li className='stats__list-item'>{product.weight}</li>
                                <li className='stats__list-item'>{product.maxWeight}</li>
                                <li className='stats__list-item'>{product.power}</li>
                                <li className='stats__list-item'>{product.acc}</li>
                            </ul>
                            <ul className='stats__list'>
                                <li className='stats__list-item'>{product.maxSpeed}</li>
                                <li className='stats__list-item'>{product.fullCharge}</li>
                                <li className='stats__list-item'>{product.gear}</li>
                                <li className='stats__list-item'>{product.garanty}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;