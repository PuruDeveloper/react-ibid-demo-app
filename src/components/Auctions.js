import React, { useState, useEffect } from 'react'
import '../styles/Auctions.css'

function Auctions() {

    const [product, setProduct] = useState([]);
    
    useEffect(() => {
        fetch("https://cis-automotive.p.rapidapi.com/getInactiveModels?brandName=Ford", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "220617dc7emsh077595e742124b4p19d1d2jsncf5e0e5d05eb",
		"x-rapidapi-host": "cis-automotive.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
    }, [])
    

    return (
        <div className="auctions" >
            <div className="auctions__top" >
                <p><a href="/" >Home</a></p>
                <p> / </p>
                <p>Shop</p>
            </div>
            <div className="auctions__bottom" >
                <h5>Browse through our products library!</h5>
                <input placeholder="Search products.." type="text" ></input>
                    <button className="auctions__bottom__button" ><i class="fas fa-search"></i></button>
            </div>
        </div>
    )
}

export default Auctions
