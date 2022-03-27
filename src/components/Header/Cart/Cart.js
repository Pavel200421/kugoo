import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom'
import './cart.css'
import {CustomContext} from "../../Context";
import {useNavigate} from "react-router-dom";
import '../../Adaptive/adaptive.css'


const Cart = () => {
    const navigate = useNavigate();
    const {cart, plusOne, minOne, deleteItem} = useContext(CustomContext);
    return (
        <div className='home__cart'>
            {cart.length !== 0 ? <div className='cart__basket'>
                    <div className='cart__basket-title'>
                        Корзина
                    </div>
                    <ul className='cart__list'>
                        {cart.map((item)=> (
                            <li className='cart__list-item' key={item.title}>
                                <img className='cart__item-img' src={item.imageUrl} alt={item.title}/>
                                <div className='cart__item-info'>
                                    <h3 className='cart__item-title'>{item.title}</h3>
                                    <div className='cart__item-buy'>
                                        <div className='cart__item-count'>
                                            <span className='cart__item-count-span-minus' onClick={()=> minOne(item)}>-</span>{item.count}
                                            <span className='cart__item-count-span-plus' onClick={()=> plusOne(item)}>+</span></div>
                                        <span className='cart__item-price'>{item.price} Рублей</span>
                                        <button className='cart__delete' onClick={()=> deleteItem(item)}>X</button>
                                    </div>

                                </div>

                            </li>
                        ))}
                    </ul>
                    <div className='cart__bot'>
                            <span className='cart__bot-price'>{cart.reduce((acc, rec)=> {
                                return acc + (rec.price * rec.count)
                            }, 0)} Rub</span>
                        <button onClick={()=> navigate('/cart/order')} type='button' className='cart__bot-btn'>Оформить</button>
                    </div>
                </div>
                : <div className="cart__card">
                    <div className='home__cart-goods'>
                        <h2 className='home__cart-goods-title'>Ваша корзина пуста.</h2>
                        <p className='home__cart-goods-subtitle'>Добавьте же скорее что-нибудь!</p>
                        <Link className='home__cart-catalog' to='/scooters'>Перейти в каталог</Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default Cart;