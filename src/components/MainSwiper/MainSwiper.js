
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {useNavigate, Link} from "react-router-dom";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './mainSwiper.css'
import zoomIcon from '../../assets/zoomIcon.png'
import { Autoplay, Pagination, Navigation } from "swiper";
import '../Adaptive/adaptive.css'
const MainSwiper = () => {
    const navigate = useNavigate();
    return (
            <>
                <Swiper
                    spaceBetween={100}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='owl__background'>
                            <h1 className='swiper__block-new'>Новинка</h1>
                            <div className='swiper__info-block'>
                                <h2 className='swiper__block-title'>Электросамокаты Kugoo Kirin от официального дилера</h2>
                                <p className='swiper__block-subtitle'>с бесплатной доставкой по РФ от 1 дня</p>
                            </div>
                            <button onClick={()=> navigate('/scooters')} className='swiper__block-catalog'>Перейти в каталог</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='owl__delivery'>
                            <h2 className='owl__delivery-title'>Акция</h2>
                            <p className='owl__delivery-subtitle'>Бесплатная доставка <br/> электросамокатов <br/> по России до 25.02</p>
                            <button onClick={()=> navigate('/deliveryInformation')} className='owl__delivery-btn'>Подробнее</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='owl__repair'>
                            <div className='owl__repair-img'>
                                <img className='owl__repair-zoom-icon' src={zoomIcon} alt="zoomIcon"/>
                            </div>
                            <div className='owl__repair-info'>
                                <h2 className='owl__repair-title'>Услуга</h2>
                                <p className='owl__repair-subtitle'>Определим причину неисправности удаленно или на диагностике!</p>

                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
    );
};

export default MainSwiper;