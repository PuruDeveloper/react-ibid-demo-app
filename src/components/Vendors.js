import React, { useState } from 'react'

function Vendors() {

    const [ categories, setCategories ]  = useState([])
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://app.olvy.co/api/v1/organisations/piedpiper/public/release_notes", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    return (
        <div>
            Something
        </div>
    )
}

export default Vendors
