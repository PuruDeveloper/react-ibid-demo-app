import React from 'react'
import '../styles/Home.css'
import HomeCarImage from '../images/home__car__image.jpg'

function Home() {
    return (
        <div className="home" >
            {/* <img src={HomeCarImage}  alt="home image car" ></img> */}
            <div className="home__heading" >
                <p className="home__heading__1" >Find your dream car</p>
                <p className="home__heading__2" >& give it a try</p>
                <p className="home__heading__3" >Vivamus id ligula non turpis aliquam dignissim.
                Fusce tempor vulputate urna, quis malesuada.</p>
                <button className="view__auctions__button" >VIEW AUCTIONS</button>
            </div>
            {/* Latest Auctions Part */}
            <div className="home__latest__auctions" >
                <h5>LATEST AUCTIONS</h5>
            </div>
            <div className="home__auction__cars" >
                <div className="home__auction__car" >
                    <img src="https://ibid.modeltheme.com/automotive/wp-content/uploads/2017/06/tahsin-cebel-Dwdg8h3yz8g-unsplash-400x400.jpg" alt="first_car" />
                    <h4>Orange Fiat 500</h4>
                    <p>Auction Ended</p>
                </div>
                <div className="home__auction__car" >
                    <img src="https://ibid.modeltheme.com/automotive/wp-content/uploads/2017/06/jonathan-chng-cDUiVsPMxMk-unsplash-400x400.jpg" alt="first_car" />
                    <h4>Red Mercedes AMG</h4>
                    <p>Starting bid: <h4>$21750.00</h4></p>
                </div>
                <div className="home__auction__car" >
                    <img src="https://ibid.modeltheme.com/automotive/wp-content/uploads/2017/06/jamie-dacus-HPcvR6olL9Y-unsplash-300x300.jpg" alt="first_car" />
                    <h4>Black Vintage Car</h4>
                    <p>Auction Ended</p>
                </div>
                <div className="home__auction__car" >
                    <img src="https://ibid.modeltheme.com/automotive/wp-content/uploads/2017/06/tuce-dus_-8CyBJ8-unsplash-400x400.jpg" alt="first_car" />
                    <h4>Classic American Car</h4>
                    <p>Current Bid: <h4>$ 6505.00</h4></p>
                </div>
            </div>
            <div className="home__bottom__need__help" >
                <h5>NEED HELP? CONTACT US</h5>
                <div className="need__help" >
                    <img src="https://ibid.modeltheme.com/automotive/wp-content/uploads/2019/10/ibid-automotive-contact-map.png" alt="world" />
                    <form className="need__help__form" tpe="submit" >
                    <div className="need__help__form__" >
                        <div className="need__help__form__1" >
                            <label>First Name</label>
                            <input></input>
                            <label>Email Adress</label>
                            <input></input>
                        </div>
                        <div className="need__help__form__2" >
                            <label>Last Name</label>
                            <input></input>
                            
                            <label>Subject</label>
                            <input></input>
                        </div>
                    </div>
                        
                        <label>Your Message</label>
                        <textarea></textarea>
                        <button>Send Your Message</button>
                    </form>
                </div>
            </div>
            <div className="home__bottom__latest__news" >
                <h5>LATEST NEWS</h5>
            </div>
            <div className="home__bottom" >
                <h5>AUCTIONS BY BRAND</h5>
                <div className="home__bottom__brands" >
                    <img className="home__bottom__brands__1" src="https://ibid.modeltheme.com/automotive/wp-content/uploads/2015/04/client2-s2-1-300x90.png" alt="tech" />
                    <img className="home__bottom__brands__2" src="https://ibid.modeltheme.com/automotive/wp-content/uploads/2015/04/client2-s2-2-300x90.png" alt="tech"/>
                    <img className="home__bottom__brands__3" src="https://ibid.modeltheme.com/automotive/wp-content/uploads/2015/04/client2-s2-1-300x90.png" alt="tech" />
                    <img className="home__bottom__brands__4" src="https://ibid.modeltheme.com/automotive/wp-content/uploads/2015/04/client2-s2-2-300x90.png" alt="tech" />
                    <img className="home__bottom__brands__5" src="https://ibid.modeltheme.com/automotive/wp-content/uploads/2015/04/client2-s2-1-300x90.png" alt="tech" />
                </div>
            </div>
        </div>
    )
}

export default Home
