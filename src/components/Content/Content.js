import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import Main from "./Routes/Main";
import Accessories from "./Routes/Accessories";
import Scooters from "./Routes/Scooters";
import Header from "../Header/Header";
import MainSwiper from "../MainSwiper/MainSwiper";
import Information from "../Information/Information";
import Product from "./Product/Product";
import Footer from "../Footer/Footer";
import AboutUs from '../AboutUs/AboutUs';
import Delivery from "../Delivery/Delivery";
import Error from "../Error/Error";
import TestDrive from "../TestDrive/TestDrive";
import Service from "../Service/Service";
import Soon from "../Soon/Soon";
import Cart from "../Header/Cart/Cart";
import Order from '../Header/Order/Order'
import Rass from '../Rass/Rass'
import Politic from "../Politic/Politic";
import Sale from '../Sale/Sale'

const Content = () => {
    const [cartItems, setCartItems] = useState([]);


    return (

            <section className='home__content'>
                <Header/>
                <MainSwiper/>
                <Information/>
                <div className="container">
                    <Routes>
                        <Route path='/' element={<Main/>}/>
                        <Route path='/accessories' element={<Accessories/>}/>
                        <Route path='/scooters' element={<Scooters/>}/>
                        <Route path='/:path/product/:id' element={<Product/>}/>
                        <Route path='/deliveryInformation' element={<Delivery/>}/>
                        <Route path='/aboutUs' element={<AboutUs/>}/>
                        <Route path='/error' element={<Error/>}/>
                        <Route path='/test-drive' element={<TestDrive/>}/>
                        <Route path='/service' element={<Service/>}/>
                        <Route path='/soon' element={<Soon/>}/>
                        <Route path='/cart' cartItems={cartItems} element={<Cart/>}/>
                        <Route path='/cart/order' element={<Order/>}/>
                        <Route path='/rass' element={<Rass/>}/>
                        <Route path='/politic' element={<Politic/>}/>
                        <Route path='/sale' element={<Sale/>}/>
                        <Route path='*'
                               element={<Error/>}
                        />
                    </Routes>

                </div>
                <Footer/>
            </section>
    );
};

export default Content;