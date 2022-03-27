import React from 'react';
import './Soon.css'
import {useNavigate} from 'react-router-dom'
const Soon = () => {
    const navigate = useNavigate();
    return (
        <div className='soon'>
            <h1 className='soon__title'>Совсем скоро :)</h1>
            <p className="soon__back" onClick={()=> navigate(-1)}>Назад</p>
        </div>
    );
};

export default Soon;