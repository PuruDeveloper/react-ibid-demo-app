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
                    <h5>Orange Fiat 500</h5>
                    <p>Auction Ended</p>
                </div>
                <div className="home__auction__car" >
                    <img src="https://ibid.modeltheme.com/automotive/wp-content/uploads/2017/06/jonathan-chng-cDUiVsPMxMk-unsplash-400x400.jpg" alt="first_car" />
                    <h5>Red Mercedes AMG</h5>
                    <p>Starting bid: <h5>$21750.00</h5></p>
                </div>
                <div className="home__auction__car" >
                    <img src="https://ibid.modeltheme.com/automotive/wp-content/uploads/2017/06/jamie-dacus-HPcvR6olL9Y-unsplash-300x300.jpg" alt="first_car" />
                    <h5>Black Vintage Car</h5>
                    <p>Auction Ended</p>
                </div>
                <div className="home__auction__car" >
                    <img src="https://ibid.modeltheme.com/automotive/wp-content/uploads/2017/06/tuce-dus_-8CyBJ8-unsplash-400x400.jpg" alt="first_car" />
                    <h5>Classic American Car</h5>
                    <p>Current Bid: <h5>$ 6505.00</h5></p>
                </div>
            </div>
        </div>
    )
}

export default Home
