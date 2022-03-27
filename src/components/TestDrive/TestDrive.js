import React from 'react';
import {Link} from "react-router-dom";
import './testDrive.css'
import scooter from '../../assets/E-Scooters_Thumb_63e9c687-3e93-4ac9-b7a6-9d9953ba9696_1000x 1 (1).png'
import woman from '../../assets/E-Scooters_Thumb_63e9c687-3e93-4ac9-b7a6-9d9953ba9696_1000x 1.png'
import '../Adaptive/adaptive.css'
const TestDrive = () => {
    return (
        <div className='testDrive'>
            <div className="container__testDrive">
                <div className='testDrive-part-1'>
                    <p className='testDrive__subtitle'><span><svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9464 1.84193C9.75865 0.654143 8.17937 0 6.49965 0C4.81991 0 3.24069 0.654114 2.05284 1.84193C0.865081 3.02969 0.210938 4.60886 0.210938 6.2886C0.210938 7.96834 0.865081 9.54757 2.05284 10.7354L6.18893 14.8713C6.27474 14.9571 6.38721 15 6.49965 15C6.61213 15 6.7246 14.9571 6.81038 14.8713L10.9463 10.7354C12.1341 9.5476 12.7882 7.96837 12.7883 6.28863C12.7882 4.60883 12.1341 3.02966 10.9464 1.84193ZM8.47462 8.26351C7.9471 8.79103 7.24573 9.08157 6.49968 9.08157C5.75364 9.08157 5.05227 8.79106 4.52477 8.26354C3.99722 7.73602 3.70671 7.03465 3.70671 6.2886C3.70671 5.54258 3.99722 4.84121 4.52477 4.31366C5.05227 3.78614 5.75364 3.49563 6.49968 3.49563C7.24573 3.49563 7.9471 3.78614 8.47462 4.31366C9.00214 4.84115 9.29268 5.54252 9.29268 6.28857C9.29265 7.03462 9.00211 7.73602 8.47462 8.26351Z" fill="white"/>
</svg></span> Восточно-Кругликовская улица, 86 <span className='testDrive__subtitle-span'>Вт - Сб 10:00 - 20:00</span></p>
                    <h1 className='testDrive__title'>Запишитесь на бесплатный <br/> тест-драйв электросамокатов</h1>
                    <p className='testDrive__subtitle2'>в Москве без ограничения по времени</p>
                    <div className='testDrive__blocks'>
                        <div className='testDrive__block'>
                            <div className='testDrive__svg'>
                                <svg  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.9414 10.847L10.3164 1.86258L12.082 1.67196C12.4477 1.63133 12.7133 1.30321 12.6727 0.937581C12.632 0.571956 12.307 0.303206 11.9383 0.346956L6.84141 0.896956C6.47578 0.937581 6.21016 1.26571 6.25078 1.63133C6.28828 1.97196 6.57578 2.22508 6.91328 2.22508C6.93828 2.22508 6.96016 2.22508 6.98516 2.22196L8.97266 2.00946L11.6477 11.1845C11.1195 11.4938 10.7227 11.9938 10.5477 12.5876H5.45391C5.16016 11.5845 4.22578 10.847 3.11328 10.847C1.76641 10.847 0.675781 11.9251 0.675781 13.2532C0.675781 14.5813 1.76641 15.6595 3.11328 15.6595C4.22578 15.6595 5.16016 14.9251 5.45391 13.9188H10.5445C10.8383 14.922 11.7727 15.6595 12.8852 15.6595C14.232 15.6595 15.3227 14.5813 15.3227 13.2532C15.3227 11.9407 14.2633 10.8751 12.9414 10.847Z" fill="white"/>
                                </svg>
                            </div>
                            <p className='testDrive-block-subtitle'>Поймете, какая <br/> модель вам подходит</p>
                        </div>
                        <div className='testDrive__block'>
                            <div className='testDrive__svg'>
                                <svg  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.2002 0H6.20002L3.80078 8.63849H6.20491L4.16075 16H4.88086L11.8397 7.36114H8.3144L12.2002 0Z" fill="white"/>
                                </svg>
                            </div>

                            <p className='testDrive-block-subtitle'>Проверите лучшие <br/> самокаты в деле</p>
                        </div>
                    </div>
                    <a className='testDrive__note' href='#last'>Записаться</a>
                </div>
                <div className='testDrive__part-2'>
                    <div className='testDrive__part-2-block'>
                        <h1 className='testDrive__part-2-title'>Определите максимально <br/> подходящую вам модель <br/>
                            не теоретически, а на практике</h1>
                        <p className='testDrive__part-2-subtitle'>Тест-драйв поможет:</p>
                        <ul className='testDrive__part-2-list'>
                            <li className='testDrive__part-2-list-item'>Понять подходит ли вам конкретная модель;</li>
                            <li className='testDrive__part-2-list-item'>Испытать самокат в «реальной жизни»;</li>
                            <li className='testDrive__part-2-list-item'>Оценить удобство хранения и эксплуатации;</li>
                            <li className='testDrive__part-2-list-item'>Узнать реальные характеристики и возможности модели.</li>
                        </ul>
                    </div>
                    <img src={scooter} alt="scooter" className='testDrive__part-2-scooter'/>
                </div>
                <div className='testDrive__part-3'>
                    <img src={woman} alt="woman" className='testDrive__part-3-woman'/>
                    <div className='testDrive__part-3-block'>
                        <h1 className='testDrive__part-3-title'>Научим правильной <br/> и безопасной езде в городе <br/> вас или вашего ребенка</h1>
                        <p className='testDrive__part-3-subtitle'>На обучении специалист расскажет:</p>
                        <ul className='testDrive__part-3-list'>
                            <li className='testDrive__part-3-list-item'>Как подготовить самокат к поездке;</li>
                            <li className='testDrive__part-3-list-item'>Как «завести» самокат;</li>
                            <li className='testDrive__part-3-list-item'>Как вести себя во время поездки и обезопасить себя и окружающих;</li>
                            <li className='testDrive__part-3-list-item'>Как складывать и раскладывать электросамокат;</li>
                            <li id={'last'} className='testDrive__part-3-list-item'>Как ухаживать за своим девайсом.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestDrive;