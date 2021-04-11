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
            
        </div>
    )
}

export default Auctions
