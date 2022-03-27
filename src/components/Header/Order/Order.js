import React, {useContext, useState} from 'react';
import './order.css'
import InputMask from 'react-input-mask';
import {Link, useNavigate} from "react-router-dom";
import {CustomContext} from "../../Context";
import axios from "axios";
import '../../Adaptive/adaptive.css'
const Order = () => {
    const navigate = useNavigate();
    const {cart, setCart, plusOne, minOne, deleteItem} = useContext(CustomContext);
    const [data, setData] = useState({
         name: '',
        surname: '',
        number: '',
        email : '',
        adress: '',
    });

    function submit(e){
        e.preventDefault();
        axios.post('http://localhost:8080/order', {
            name: data.name,
            surname: data.surname,
            number: data.number,
            email: data.email,
            adress: data.adress,
            cart: cart,
            sum: cart.reduce((acc, rec) => acc + (rec.price * rec.count), 0)

        }, []).then(({data}) =>  {
            navigate('/');
            setCart([]);
            setData({
                name: '',
                surname: '',
                number: '',
                email : '',
                adress: ''
            })
        } )


    }
    function handle(e) {
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData)
    }
    return (

        <div className='order'>
                <form onSubmit={(e)=> submit(e) || alert(`Спасибо за покупку! Ваши данные приняты. Мы свяжемся с вами в ближайшее время.
                    
                    `)} className='form'>
                    <div className='basicInformation'>
                            <h1 className='title'>Ваши данные</h1>
                    </div>
                    <div className='form-row'>
                        <div className='form-row-first'>
                            <label className='form-label'>Имя</label>
                            <input onChange={(e)=> handle(e)} value={data.name} id='name' required className='text-input' type="text"/>
                        </div>
                        <div className='form-row-second'>
                            <label className='form-label'>Фамилия</label>
                            <input onChange={(e)=> handle(e)} value={data.surname} id='surname'  required className='text-input' type="text"/>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-row-first'>
                            <label className='form-label'>Номер телефона</label>
                            <InputMask onChange={(e)=> handle(e)}  value={data.number} id='number' required className='text-input' mask="+7 (999) 999-99-99"/>

                        </div>
                        <div className='form-row-second'>
                            <label className='form-label'>e-mail</label>
                            <input onChange={(e)=> handle(e)} id='email' value={data.email} required className='text-input' type="email"/>
                        </div>
                    </div>
                    <div className='form-row-third'>
                        <label className='form-label'>Адрес</label>
                        <input onChange={(e)=> handle(e)} id='adress' value={data.adress} required className='text-input'/>
                    </div>
                    <button  className='submit__btn'  type='submit'>Заказать</button>
                </form>
            <div className='block-sum'>
            {cart.map((item)=> (
                <div className='cart__goods'>
                    <ul className='cart__goods-list'>
                        <li  className='cart__goods-list-item'><p className='cart__item-title-2'>Товар:</p><p className='cart__item-title-3'>{item.title}</p></li>
                        <li className='cart__goods-list-item'><p className='cart__item-title-2'>Стоимость:</p><p className='cart__item-title-3'>{item.price} Rub</p></li>
                        <li className='cart__goods-list-item'><p className='cart__item-title-2'>Кол-во:</p><p className='cart__item-title-3'>{item.count}</p></li>
                        <li className='cart__goods-list-item'><p className='cart__item-title-2'>Сумма:</p><p className='cart__item-title-3'>{item.price * item.count} Rub</p></li>
                    </ul>

                </div>
            ))}
                <p className='cart__goods-full'><span className='cart__goods-full-red'>Общая сумма:</span>{cart.reduce((acc, rec)=> {
                    return  acc + ( rec.price *  rec.count)
                 },  0)}  Rub</p>
            </div>
        </div>
    );
};

export default Order;