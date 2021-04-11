import React from 'react'
import Navbar from './Navbar'
import '../styles/Header.css'

function Header() {
    return (
        <div className="header" >
            <div className="header__top" >
                <div className="header__top__left" >
                <div className="header__top__left__dropdowns" >
                    <p>EN</p>
                    <i class="fas fa-angle-down"></i>
                    <p>USD</p>
                    <i class="fas fa-angle-down"></i>
                </div>
                    
                    <p>Call us toll free: +1-541-754-3010</p>
                    <p>Send us an email: contact@example.com</p>
                </div>
                <div className="header__top__right" >
                    <i class="fas fa-truck-pickup"></i>
                    <p>Order Tracking</p>
                    <i class="far fa-heart"></i>
                    <p>Wishlist</p>
                </div>
            </div>
            <div className="header__center" >
                <img src="https://ibid.modeltheme.com/automotive/wp-content/uploads/2019/10/logo-ibid-automotive.png" alt="ibid logo" />
                <div className="header__center__center" >
                    <p>Category</p>
                    <i class="fas fa-angle-down"></i>
                    <input placeholder="Search products.." type="text" ></input>
                    <button className="header__center__center__button" ><i class="fas fa-search"></i></button>
                </div>
                <div className="header__center__right" >
                    <div className="header__center__right__cart" >
                        <p>My Cart</p>
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                    <p>0 items $0.00</p>
                </div>
            </div>
            <div className="header__bottom" >
                <Navbar />
            </div>
        </div>
    )
}

export default Header
