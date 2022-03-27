import React, {useEffect, useState} from 'react';
import '../Adaptive/adaptive.css'
import './header.css'
import {NavLink, Link, useNavigate, useParams} from "react-router-dom";
import Logo from '../../assets/Logo.png'
import axios from "axios";
import '../Adaptive/adaptive.css'


const Header = () => {
    const [product, setProduct] = useState({});
    const [searchVal, setSearchVal] = useState('');
    const {path, id} = useParams();
    useEffect(()=> {
        axios(`http://localhost:8080/${path}/${id}`).then(({data})=> setProduct(data));
    }, []);
    const [active, setActive] = useState(false);
    const navigate = useNavigate();
    const [search, setSearch] = useState(false);
    const [all, setAll] = useState([]);
    const [cart, setCart] = useState(false);

    const searchHandler = (text) => {
        if (text){
            axios('http://localhost:8080/all').then(({data})=> setAll(Object.values(data).reduce((acc, rec)=> {
                return [...acc, rec.filter((item)=> item.title.toUpperCase().startsWith(text.toUpperCase()))]
            }, []).flat()))
        }else {
            setAll([])
        }
    };
    return (
        <header className='header'>
            <div className="container__header">
                <div  className='header__head'>
                    <div className='header__head-left'>
                        <ul className='header__head-list'>
                            <li className='header__head-list-item'>
                                <NavLink  className='header__head-left-adress' to='/service'>Сервис</NavLink>
                            </li>
                            <li className='header__head-list-item'>
                                <div className='header__head-list-item-group'>
                                    <a className='header__head-adr' href="https://api.whatsapp.com/send/?phone=%2B996556991089&text&app_absent=0"><svg width="20" height="20" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M6.49678 0.503909C3.18503 0.504612 0.500895 3.1899 0.501597 6.50165C0.501832 7.6484 0.83091 8.77103 1.44976 9.73646L0.516823 12.157C0.467141 12.2858 0.531228 12.4304 0.659965 12.4801C0.688752 12.4912 0.71932 12.4969 0.750169 12.4968C0.778793 12.497 0.807206 12.4921 0.834119 12.4823L3.33265 11.5904C6.14377 13.3412 9.84194 12.4816 11.5927 9.67045C13.3435 6.85931 12.4839 3.16116 9.6728 1.41038C8.71988 0.816872 7.61946 0.502808 6.49678 0.503909Z" fill="#5D6C7B"/>
                                            <path d="M9.35709 7.52457C9.35709 7.52457 8.74496 7.22475 8.36168 7.02487C7.92795 6.8015 7.41825 7.21976 7.17839 7.45762C6.80509 7.31422 6.46413 7.09779 6.17548 6.82099C5.89864 6.53239 5.6822 6.19144 5.53885 5.81809C5.77672 5.57774 6.19396 5.06853 5.9716 4.63479C5.77421 4.25102 5.47191 3.63889 5.47191 3.63889C5.42949 3.55471 5.34331 3.50156 5.24903 3.50146H4.74933C4.02161 3.62716 3.49249 4.26212 3.50008 5.00058C3.50008 5.78511 4.43902 7.29223 5.07216 7.92584C5.7053 8.55945 7.2124 9.49792 7.99742 9.49792C8.73587 9.50551 9.37084 8.97637 9.49653 8.24866V7.74897C9.4966 7.65368 9.44254 7.56666 9.35709 7.52457Z" fill="#F7F7F7"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3296_1817">
                                                <rect width="12" height="12" fill="white" transform="translate(0.5 0.5)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    </a>
                                    <a className='header__head-adr' href="https://t.me/KGBooster"><svg width="20" height="20" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.70859 7.0907L4.51009 9.8827C4.79409 9.8827 4.91709 9.76071 5.06459 9.61421L6.39609 8.3417L9.15509 10.3622C9.66109 10.6442 10.0176 10.4957 10.1541 9.8967L11.9651 1.4107L11.9656 1.4102C12.1261 0.662203 11.6951 0.369703 11.2021 0.553203L0.557089 4.6287C-0.169411 4.9107 -0.158411 5.3157 0.433589 5.4992L3.15509 6.3457L9.47659 2.3902C9.77409 2.1932 10.0446 2.3022 9.82209 2.4992L4.70859 7.0907Z" fill="#5D6C7B"/>
                                    </svg>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                        <a className='header__head-right' href="tel: +78005055461">+7 (800) 505-54-61</a>
                </div>
                <div className='header__middle'>
                    <Link className='burger__menu' onClick={()=> setActive(!active)} to='#'>Список</Link>
                    <div className={active ? 'burger__popup active' : 'burger__popup'}>
                        <NavLink className='header__bottom-item-link' to='/aboutUs'>О магазине</NavLink>
                        <NavLink className='header__bottom-item-link header__bottom-spans' to='/deliveryInformation'><span>Доставка и оплата</span></NavLink>
                        <NavLink className='header__bottom-item-link' to='/test-drive'>Тест-драйв</NavLink>
                        <NavLink className='header__bottom-item-link' to='/soon'>Блог</NavLink>
                        <NavLink className='header__bottom-item-link header__bottom-spans2' to='/sale'>Акции</NavLink>
                    </div>
                    <NavLink to='/'><img className='header__middle-logo' src={Logo} alt="Kugoo"/></NavLink>
                    <NavLink className='header__center-link' to='/cart'>Корзина</NavLink>
                    <div>
                        <input style={{display: `${search ? 'inline-block' : 'none'}`}} type="search" placeholder='Искать самокат KUGOO' className='header__search-input' onChange={(e)=>{
                            searchHandler(e.target.value);
                            setSearchVal(e.target.value);
                        } }/>
                        <button className='header__search-btn' onClick={()=> setSearch(!search)} type='button'>
                            <svg className='header__loop' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g >
                                    <path d="M29.8169 28.9331L20.6888 19.805C22.5848 17.6999 23.75 14.9244 23.75 11.875C23.75 5.32717 18.4229 0 11.875 0C5.32717 0 0 5.32717 0 11.875C0 18.4229 5.32717 23.75 11.875 23.75C14.9244 23.75 17.6999 22.5848 19.805 20.6888L28.9331 29.8169C29.0552 29.9389 29.2151 30 29.375 30C29.5349 30 29.6948 29.9389 29.817 29.8169C30.0611 29.5727 30.0611 29.1772 29.8169 28.9331ZM11.875 22.5C6.01688 22.5 1.25004 17.7337 1.25004 11.875C1.25004 6.01629 6.01688 1.24998 11.875 1.24998C17.7332 1.24998 22.5 6.01623 22.5 11.875C22.5 17.7338 17.7332 22.5 11.875 22.5Z" fill="#A4ACAD"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_4_29">
                                        <rect width="30" height="30" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <ul className='header__search-list'>
                            {all.map((item, idx)=> (
                                <li key={idx} className='header__search-list-item'>
                                    <Link to={`/${item.category}/product/${item.id}`} onClick={()=>{
                                        setSearch(false);
                                         setAll([]);
                                         setSearchVal('');
                                    }}


                                          className='header__search-list-item-info'>
                                        <h2 className='header__search-list-item-title'>{item.title}</h2>
                                        <p className='header__search-list-item-subtitle'>{item.price} Rub</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='header__bottom'>
                <ul className='header__bottom-list'>
                    <li className='header__bottom-list-item'>
                        <NavLink className='header__bottom-item-link' to='/aboutUs'>О магазине</NavLink>
                    </li>
                    <li className='header__bottom-list-item'>
                        <NavLink className='header__bottom-item-link header__bottom-spans' to='/deliveryInformation'><span>Доставка и оплата</span><span className='header__item-span'>Доступна рассрочка</span></NavLink>
                    </li>
                    <li className='header__bottom-list-item'>
                        <NavLink className='header__bottom-item-link' to='/test-drive'>Тест-драйв</NavLink>
                    </li>
                    <li className='header__bottom-list-item'>
                        <a className='header__bottom-item-link' href="https://www.instagram.com/kugoo_russia/">Блог</a>
                    </li>
                    <li className='header__bottom-list-item'>
                        <NavLink className='header__bottom-item-link header__bottom-spans2' to='/sale'>Акции <span className='header__sale-span'>%</span></NavLink>
                    </li>
                </ul>

            </div>


        </header>
    );
};

export default Header;