import React from 'react';
import {useNavigate} from "react-router-dom";
import './error.css'
const Error = () => {
    const navigate = useNavigate();
    return (
        <div className='error'>
                <h1 className='error__title'>Страница не найдена :(</h1>
                <p className='error__back' onClick={()=> navigate(-1)}>Назад</p>
        </div>
    );
};

export default Error;