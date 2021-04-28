import React, { useState, useEffect } from 'react'
import '../styles/Auctions.css'
import axios from 'axios';
import { Helmet } from 'react-helmet'

function Auctions() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {console.log(response)
        setProduct(response.data)}).catch(error => { 
            console.log(error)
        })
    }, [])

    return (
        <div className="auctions" >
            <div>
    <Helmet>
      <title>Auctions</title>
    </Helmet>
    </div>
            <div className="auctions__top" >
                <p><a href="/" >Home</a></p>
                <p> / </p>
                <p>Shop</p>
            </div>
            <div className="auctions__middle" >
                {
                    product.length ? 
                    product.map((product) => <div  key={product.id} ><h3>{product.title}</h3>
                    <p>{product.body}</p></div> ) : null
                }
            </div>
        </div>
    )
}

export default Auctions
