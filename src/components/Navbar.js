import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
    const [home, setHome] = useState(false);
    const [auctions, setAuctions] = useState(false);
    const onHomeChange = (e) => {
        e.preventDefault()
        setHome(!home)
    }
    const onAuctionsChange = (e) => {
        e.preventDefault()
        setAuctions(!auctions)
    }
    return (
                <div className="navbar" >
                    <div className="navbar__categories__menu" >
                        <i className="fas fa-bars" ></i>
                        <p>CATEGORIES</p>
                    </div>
                    <div >
                        <ul className="navbar__menu" >
                            <li className="navbar__item">
                            <Link to="/" className="navbar__home">
                            Home
                            </Link>
                            <button className="navbar__home__dropdown__button" onClick={onHomeChange} ><i className="fas fa-angle-down" ></i></button>
                            </li>
                            <div className={home ? "navbar__home__dropdown active" : "navbar__home__dropdown"} >
                                <p><a href="#" >Art Auctions</a></p>
                                <p><a href="#" >Antiques & Collectibles</a></p>
                                <p><a href="#" >Automotive Auctions</a></p>
                                <p><a href="#" >Books & Comics</a></p>
                                <p><a href="#" >Cattle Auctions</a></p>
                                <p><a href="#" >Memorabilia Auctions</a></p>
                                <p><a href="#" >Militaria Auctions</a></p>
                                <p><a href="#" >Freelancer Mode</a></p>
                                <p><a href="#" >Coins Auctions</a></p>
                                <p><a href="#" >Electronics Auctions</a></p>
                                <p><a href="#" >Fundraising Auctions</a></p>
                                <p><a href="#" >Machinery Auctions</a></p>
                                <p><a href="#" >Domain Auctions</a></p>
                                <p><a href="#" >Laboratory Auctions</a></p>
                                <p><a href="#" >Organic Food</a></p>
                                <p><a href="#" >Self Storage Auctions</a></p>
                                <p><a href="#" >Real Estate Auctions</a></p>
                                <p><a href="#" >Shop (No Auctions)</a></p>
                                <p><a href="#" >Countdown Auctions</a></p>
                                <p><a href="#" >List Auctions</a></p>
                                <p><a href="#" >Fashion Shop</a></p>
                                <p><a href="#" >Handmade Auctions</a></p>
                                <p><a href="#" >Tours Vacantions</a></p>
                            </div>
                            <li className="navbar__item">
                                <Link to="/auctions" className="navbar__auctions">
                                Auctions
                                </Link>
                                <button className="navbar__home__dropdown__button" onClick={onAuctionsChange} ><i className="fas fa-angle-down" ></i></button>
                            </li>
                            <div className={auctions ? "navbar__auctions__dropdown active" : "navbar__auctions__dropdown"} >
                                <div className="navbar__auctions__column" >
                                    <h5>SHOP SHORTCODES</h5>
                                    <div className="navbar__auctions__column__items" >
                                        <i class="fas fa-percent"></i>
                                        <p><a href="#" >Sale Banners</a></p>
                                    </div>
                                    <div className="navbar__auctions__column__items" >
                                        <i class="fas fa-th"></i>
                                        <p><a href="#" >Categories Grid</a></p>
                                    </div>
                                    <div className="navbar__auctions__column__items" >
                                        <i class="fas fa-sliders-h"></i>
                                        <p><a href="#" >Clients Slider</a></p>
                                    </div>
                                    <div className="navbar__auctions__column__items" >
                                        <i class="fas fa-table"></i>
                                        <p><a href="#" >Pricing Tables</a></p>
                                    </div>
                                    <div className="navbar__auctions__column__items" >
                                        <i class="fas fa-cart-arrow-down"></i>
                                        <p><a href="#" >Shop Features</a></p>
                                    </div>
                                </div>
                                <div className="navbar__auctions__column" >
                                    <h5>SHOP PAGES</h5>
                                    <div className="navbar__auctions__column__items" >
                                        <i class="fas fa-chart-line"></i>
                                        <p><a href="#" >Best Selling</a></p>
                                    </div>
                                    <div className="navbar__auctions__column__items" >
                                        <i class="far fa-star"></i>
                                        <p><a href="#" >Featured</a></p>
                                    </div>
                                    <div className="navbar__auctions__column__items" >
                                        <i class="fas fa-box-open"></i>
                                        <p><a href="#" >By Category</a></p>
                                    </div>
                                    <div className="navbar__auctions__column__items" >
                                        <i class="far fa-clock"></i>
                                        <p><a href="#" >Recent Added</a></p>
                                    </div>
                                    <div className="navbar__auctions__column__items" >
                                        <i class="fas fa-bolt"></i>
                                        <p><a href="#" >Sales Now</a></p>
                                    </div>
                                </div>
                                <div className="navbar__auctions__column" >
                                    <h5>MORE PAGES</h5>
                                    <div className="navbar__auctions__column__items" >
                                        <i class="fas fa-cart-arrow-down"></i>
                                        <p><a href="#" >Main Shop</a></p>
                                    </div>
                                    <div className="navbar__auctions__column__items" >
                                        <i class="fas fa-link"></i>
                                        <p><a href="#" >Single Product</a></p>
                                    </div>
                                    <div className="navbar__auctions__column__items" >
                                        <i class="far fa-user-circle"></i>
                                        <p><a href="#" >My Account</a></p>
                                    </div>
                                    <div className="navbar__auctions__column__items" >
                                        <i class="fas fa-shopping-basket"></i>
                                        <p><a href="#" >My Basket</a></p>
                                    </div>
                                    <div className="navbar__auctions__column__items" >
                                        <i class="far fa-credit-card"></i>
                                        <p><a href="#" >Checkout</a></p>
                                    </div>
                                </div>
                                
                            </div>
                            <li className="navbar__item">
                                <Link to="/vendors" className="navbar__auctions">
                                Vendors
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/shortcodes" className="navbar__auctions">
                                Shortcodes
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/blog" className="navbar__auctions">
                                Blog
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/media" className="navbar__auctions">
                                Media
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/about" className="navbar__auctions">
                                About
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/contact" className="navbar__auctions">
                                Contact
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/pages" className="navbar__auctions">
                                Pages
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar__signin" >
                    <button className="navbar__signin__button" ><p>Sign In</p></button>
                        
                    </div>
                </div>
    )
}

export default Navbar
