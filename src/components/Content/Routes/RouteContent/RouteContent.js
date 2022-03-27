import React, {useState, useEffect}from 'react';
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom'
import './routeContent.css'
import 'animate.css';
import WantBuy from '../WantBuy/WantBuy'
import '../../../Adaptive/adaptive.css'
const RouteContent = ({path, title, id}) => {
    const Navigate = useNavigate();
const [arr, setArr] = useState([]);
    useEffect(()=> {
       axios(`  http://localhost:8080/${path}`).then(({data})=> setArr(data))
    }, []);

    return (
        <div className='content'>
            <Link className='content__header-back' to='#' onClick={()=> Navigate(-1)}>Назад</Link>
            <div className='content__header'>
                <h2 className='content__header-title'>{title}</h2>
            </div>
                <div className='content__row'>
                    {arr.map((item)=> (
                            <div className=' wow content__card animate__animated animate__bounceInUp' data-wow-offset="10000" key={item.id}>
                                <Link to={`/${path}/product/${item.id}`}><img className='content__img' src={item.imageUrl} alt={item.title}/></Link>
                                <h2  className='content__title'>{item.title}</h2>
                                <div className='content__info'>
                                    <div className='content__info-block'>
                                        <ul className='content__info-list'>
                                            <li className='content__info-list-item'>{item.acc}</li>
                                            <li className='content__info-list-item'>{item.maxSpeed}</li>
                                        </ul>
                                    </div>
                                    <div className='content__info-block'>
                                        <ul className='content__info-list'>
                                            <li className='content__info-list-item'>{item.power}</li>
                                            <li className='content__info-list-item'>{item.fullCharge}</li>
                                        </ul>
                                    </div>
                                    <p className='content__price'>{item.price} ₽</p>
                                   <WantBuy item={item}/>
                                </div>
                            </div>
                        )
                    )}
                </div>
        </div>
    );
};

export default RouteContent;
