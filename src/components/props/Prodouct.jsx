import React from 'react'

const Prodouct = ({ prudoct }) => {
    return (
        <div>
            <div>pruduct name: {prudoct.name}</div>
            <div>pruduct price: {prudoct.price} sum</div>
            <div>pruduct dec: {prudoct.dec}</div>
        </div>
    )
}

export default Prodouct
