import React from 'react';
import {Link, NavLink} from "react-router-dom";
import Logo from '../../assets/Logo.png'
import Google from '../../assets/googlePlay.png'
import Apple from '../../assets/Badge.png'
import Vk from '../../assets/vk.png'
import instagram from '../../assets/insta.png'
import youtube from '../../assets/youtube.png'
import telegram from '../../assets/telegram.png'
import googlePay from '../../assets/googlePay.png'
import ApplePay from '../../assets/apple.png'
import visa from '../../assets/visa.png'
import masterCard from '../../assets/masterCard.png'
import fakeMasterCard from '../../assets/what.png'
import webMoney from '../../assets/webMoney.png'
import qiwi from '../../assets/qiwi.png'
import './footer.css'
import '../Adaptive/adaptive.css'
const Footer = () => {
    return (
        <div id={'footer'} className='footer'>
            <div className="container">
                <div className='footer__part-1'>
                    <div className='footer__twice'>
                        <div className='footer__part-1-goods'>
                            <h1 className='footer__part-1-goods-title'>Каталог товаров</h1>
                            <ul className='footer__part-1-goods-list'>
                                <li className='footer__part-1-goods-list-item'><NavLink className='footer__link' to='/scooters'>Электросамокаты</NavLink></li>
                                <li className='footer__part-1-goods-list-item'><NavLink className='footer__link' to='/accessories'>Аксессуары</NavLink></li>
                            </ul>
                        </div>
                        <div className='footer__part-1-visitors'>
                            <h1 className='footer__part-1-visitors-title'>Покупателям</h1>
                            <ul className='footer__part-1-visitors-list'>
                                <li className='footer__part-1-visitors-list-item'>
                                    <div className='footer__part-1-visitors-list-item-block1'>
                                        <NavLink className='footer__link' to='/service'>Сервисный центр</NavLink>
                                        <a className='footer__link footer__link-blog' target='_blank' href="https://www.instagram.com/kugoo_russia/">Блог</a>
                                    </div></li>
                                <li className='footer__part-1-visitors-list-item'>
                                    <div className='footer__part-1-visitors-list-item-block2'>
                                        <NavLink className='footer__link' to='/deliveryInformation'>Доставка и оплата</NavLink>
                                        <NavLink className='footer__link footer__link-special2' to='/soon'>Сотрудничество</NavLink>
                                    </div>
                                </li>
                                <li className='footer__part-1-visitors-list-item'>
                                    <div className='footer__part-1-visitors-list-item-block3'>
                                        <NavLink className='footer__link' to='/rass'>Рассрочка</NavLink>
                                        <NavLink className='footer__link footer__link-special4' to='/sale'>Акции</NavLink>
                                    </div></li>
                                <li className='footer__part-1-visitors-list-item'>
                                    <div className='footer__part-1-visitors-list-item-block4'>
                                        <NavLink className='footer__link' to='/test-drive'>Тест-драйв</NavLink>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer__part-1-contact'>
                        <h1 className='footer__part-1-contact-title'>Контакты</h1>
                        <ul className='footer__part-1-contact-list'>
                            <li className='footer__part-1-contact-list-item'>
                                <div className='footer__part-1-contact-list-item-block'>
                                    <h2 className='footer__part-1-contact-list-item-block-title'>Call-центр</h2>
                                    <a className='footer__part-1-contact-list-item-adress' href="tel: +78005055461">+7 (800) 505-54-61</a>
                                    <p className='footer__part-1-contact-list-item-subtitle'>Пн-Вс 10:00 - 20:00</p>
                                </div>
                            </li>
                            <li className='footer__part-1-contact-list-item'>
                                <div className='footer__part-1-contact-list-item-block'>
                                    <h2 className='footer__part-1-contact-list-item-block-title'>Сервисный центр</h2>
                                    <a className='footer__part-1-contact-list-item-adress' href="tel: +74993507692">+7 (499) 350-76-92</a>
                                    <p className='footer__part-1-contact-list-item-subtitle'>Пн-Вс 10:00 - 20:00</p>
                                </div>
                            </li>
                        </ul>
                        <ul className='footer__part-1-contact-list'>
                            <li className='footer__part-1-contact-list-item'>
                                <div className='footer__part-1-contact-list-item-block'>
                                    <h2 className='footer__part-1-contact-list-item-block-title'>Магазин в Москве <br/> ул. Ткацкая, 5 стр. 16</h2>
                                    <a className='footer__part-1-contact-list-item-adress' href="tel: +74994061587">+7 (499) 406 15 87</a>
                                </div>
                            </li>
                                <li className='footer__part-1-contact-list-item'>
                                    <div className='footer__part-1-contact-list-item-block'>
                                        <h2 className='footer__part-1-contact-list-item-block-title'>Магазин в Санкт-<br/>Петербурге <br/> ул. Фрунзе, 2</h2>
                                        <a className='footer__part-1-contact-list-item-adress' href="tel: +74994061587">+7 (499) 406 15 87</a>
                                    </div>
                                </li>
                            <li className='footer__part-1-contact-list-item'>
                                    <div className='footer__part-1-contact-list-item-block'>
                                        <h2 className='footer__part-1-contact-list-item-block-title'>Магазин в Краснодаре <br/>
                                            ул. Восточно-Кругликовская, 86</h2>
                                        <a className='footer__part-1-contact-list-item-adress' href="tel: +78005055461">+ 7 (800) 505 54 61</a>
                                    </div>
                                </li>
                        </ul>
                    </div>
                </div>
                <div className='footer__part-2'>
                    <div className='footer__part-2-block'>
                        <Link to='/'><img className='footer__part-2-block-img' src={Logo} alt="Kugoo"/></Link>
                        <a target='_blank' href="https://play.google.com/store/apps/details?id=com.kugoo.v2&hl=ru&gl=US" target='_blank'><img className='footer__part-2-block-img' src={Google} alt="google"/></a>
                        <a target='_blank' href="https://apps.apple.com/gb/app/kugoo-mobility/id1456095362"><img className='footer__part-2-block-img' src={Apple} alt="apple"/></a>
                    </div>
                    <div className='footer__part-2-block-2'>
                        <div className='footer__part-2-block-2-adr-1'>
                            <a href="https://vk.com/kugoo_russia"><img className='footer__part-2-block-img-2' src={Vk} alt="vk"/></a>
                            <a target='_blank' href="https://www.instagram.com/kugoo_russia/"><img className='footer__part-2-block-img-2' src={instagram} alt="insta"/></a>
                        </div>
                       <div className='footer__part-2-block-2-adr-2'>
                           <a href="https://www.youtube.com/channel/UCp6IQJIPs2aEWfMZmouvrmA/featured"><img className='footer__part-2-block-img-2' src={youtube} alt="youtube"/></a>
                           <a target='_blank' href="https://t.me/KGBooster"><img className='footer__part-2-block-img-2' src={telegram} alt="telegram"/></a>
                       </div>
                    </div>
                </div>
                <div className='footer__part-3'>
                        <Link to='/politic' className='footer__part-3-block-text footer__part-3-block-text2'>Политика конфиденциальности</Link>
                    <div className='footer__part-3-block2'>
                        <img className='footer__part-3-payment' src={googlePay} alt="googlePay"/>
                        <img className='footer__part-3-payment' src={ApplePay} alt="applePay"/>
                        <img className='footer__part-3-payment' src={visa} alt="visa"/>
                        <img className='footer__part-3-payment' src={masterCard} alt="masterCard"/>
                        <img className='footer__part-3-payment' src={fakeMasterCard} alt="masterCard"/>
                        <img className='footer__part-3-payment' src={webMoney} alt="webMoney"/>
                        <img className='footer__part-3-payment' src={qiwi} alt="qiwi"/>
                    </div>
                    <div className='footer__part-3-block3'>
                        <p className='footer__part-3-online'>Online чат:</p>
                        <div className='footer__part-3-block3-adrs'>
                            <a target='_blank' href="https://api.whatsapp.com/send/?phone=%2B996556991089&text&app_absent=0"><svg className='chat' width="17" height="22" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M7.99571 0.00488666C3.58004 0.0058236 0.00119302 3.58621 0.00212996 8.00188C0.00244228 9.53088 0.441214 11.0277 1.26635 12.3149L0.0224304 15.5424C-0.0438116 15.714 0.0416378 15.9069 0.213286 15.9731C0.25167 15.9879 0.292427 15.9955 0.333559 15.9955C0.371724 15.9956 0.409608 15.9891 0.445493 15.9761L3.77686 14.7868C7.52502 17.1212 12.4559 15.9751 14.7903 12.2269C17.1247 8.47875 15.9786 3.54788 12.2304 1.21352C10.9598 0.422171 9.49261 0.00341878 7.99571 0.00488666Z" fill="#5D6C7B"/>
                                    <path d="M11.8055 9.36609C11.8055 9.36609 10.9894 8.96633 10.4783 8.69983C9.90002 8.40201 9.22042 8.95968 8.90061 9.27683C8.40288 9.08563 7.94827 8.79705 7.5634 8.42799C7.19428 8.04319 6.9057 7.58858 6.71456 7.09078C7.03172 6.77031 7.58805 6.09137 7.29156 5.51306C7.02838 5.00136 6.6253 4.18519 6.6253 4.18519C6.56874 4.07294 6.45384 4.00208 6.32813 4.00195H5.66187C4.69157 4.16954 3.98608 5.01617 3.9962 6.00077C3.9962 7.04681 5.24812 9.0563 6.0923 9.90112C6.93649 10.7459 8.94596 11.9972 9.99265 11.9972C10.9773 12.0073 11.8239 11.3018 11.9915 10.3316V9.66529C11.9916 9.53824 11.9195 9.42221 11.8055 9.36609Z" fill="#F7F7F7"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_4155_14115">
                                        <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            </a>
                            <a target='_black' href="https://t.me/KGBooster"><svg className='chat' width="17" height="22" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M6.27812 10.1211L6.01345 13.8438C6.39212 13.8438 6.55612 13.6811 6.75279 13.4858L8.52812 11.7891L12.2068 14.4831C12.8815 14.8591 13.3568 14.6611 13.5388 13.8624L15.9535 2.54777L15.9541 2.5471C16.1681 1.54977 15.5935 1.15977 14.9361 1.40443L0.742785 6.83843C-0.225881 7.21443 -0.211215 7.75443 0.578119 7.9991L4.20679 9.12777L12.6355 3.85377C13.0321 3.5911 13.3928 3.73643 13.0961 3.9991L6.27812 10.1211Z" fill="#5D6C7B"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_4155_14118">
                                        <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;