import React from 'react'
import image from "../assets/pizza2.jpg";

function Menu() {
    return (
        <div>
            <h1>Menu</h1>
            <p style={{ color: 'red' }}>This is parahraph</p>
            <img src={image} height={150} width={150}></img>
        </div>
    )
}

export default Menu