import React from 'react';
import {Link} from 'react-router-dom'
import './main.css'
import halmet from '../../../assets/halm.png'
import '../../Adaptive/adaptive.css'


const Main = () => {
    return (
        <div className="main">
          <div className='main__block-row'>
              <div className='main__block-1'>
                    <h2 className='main__block-title'>Подбор модели <br/> электросамоката</h2>
                  <p className='main__block-subtitle'>Перейдите в каталог и выберите <br/> Ваш самокат уже сейчас!</p>
                  <Link className='main__link' to='/scooters'><span>Подобрать модель</span><span><svg width="15" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4596 5.45962C11.7135 5.20578 11.7135 4.79422 11.4596 4.54038L7.32304 0.403806C7.0692 0.149965 6.65765 0.149965 6.40381 0.403806C6.14997 0.657647 6.14997 1.0692 6.40381 1.32304L10.0808 5L6.40381 8.67696C6.14997 8.9308 6.14997 9.34235 6.40381 9.59619C6.65765 9.85003 7.0692 9.85003 7.32304 9.59619L11.4596 5.45962ZM0 5.65H11V4.35H0V5.65Z" fill="#6F73EE"/>
</svg>
</span></Link>
              </div>
              <div className='main__block-2'>
                    <h2 className='main__block-title'>Сервисное обслуживание</h2>
                  <p className='main__block-subtitle'>Крупнейший сервисный центр <br/> в России для продуктов Kugoo</p>
                  <Link className='main__link' to='/service'><span>Написать нам</span><span><svg width="15" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4596 5.45962C11.7135 5.20578 11.7135 4.79422 11.4596 4.54038L7.32304 0.403806C7.0692 0.149965 6.65765 0.149965 6.40381 0.403806C6.14997 0.657647 6.14997 1.0692 6.40381 1.32304L10.0808 5L6.40381 8.67696C6.14997 8.9308 6.14997 9.34235 6.40381 9.59619C6.65765 9.85003 7.0692 9.85003 7.32304 9.59619L11.4596 5.45962ZM0 5.65H11V4.35H0V5.65Z" fill="#6F73EE"/>
</svg>
</span></Link>
              </div>
          </div>
          <div className='main__block-3'>
              <h2 className='main__block-title'>Подбор <br/> аксессуаров для Вашего самоката</h2>
              <p className='main__block-subtitle'>Поможет обезопасить Ваши поездки</p>
                <Link className='main__link' to='/accessories'><span>Скорее же</span><span><svg width="15" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4596 5.45962C11.7135 5.20578 11.7135 4.79422 11.4596 4.54038L7.32304 0.403806C7.0692 0.149965 6.65765 0.149965 6.40381 0.403806C6.14997 0.657647 6.14997 1.0692 6.40381 1.32304L10.0808 5L6.40381 8.67696C6.14997 8.9308 6.14997 9.34235 6.40381 9.59619C6.65765 9.85003 7.0692 9.85003 7.32304 9.59619L11.4596 5.45962ZM0 5.65H11V4.35H0V5.65Z" fill="#6F73EE"/>
</svg>
</span>

                </Link>
              <img className='halmet' src={halmet} alt="halm"/>
          </div>
        </div>
    );
};

export default Main;